import { useEffect } from "react";

const anchorElement = {
  type: 'a',
  props: {
    href: 'https://google.com/',
    target: '_blank',
    innerText: 'Click me',
  }
}

// Step 2: Create a function to generate HTML code from the React-like element object
const generateHTML = (element) => {
  const { type, props } = element;
  const attributes = Object.keys(props).map((each) => `${each}="${props[each]}"`).join(' ')
  // console.log(attributes);
  return `<${type} ${attributes}>${props.innerText}</${type}>`;
}

// Step 3: Create a function for custom rendering
const customRender = (element, targetSelector) => {
  const html = generateHTML(element);
  // console.log(html);
  const selector = document.querySelector(targetSelector);
  // console.log(selector);
  selector.innerHTML = html;
}

function Assignment3() {
  useEffect(() => {
    customRender(anchorElement, '.targetClass');
  }, [])

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500 font-bold text-white">
      <div className="targetClass"></div>
    </div>
  )
}

export default Assignment3;
