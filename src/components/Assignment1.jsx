const Assignment = () => {
  return (
    <div className='flex items-center justify-center w-screen h-screen bg-slate-900 '>
      <div className='shadow-lg shadow-white w-max'>
        <div className='relative flex flex-col justify-between h-96 w-96'>
          <img
            src='https://media.licdn.com/dms/image/D4E03AQHwSxl2k-yMpg/profile-displayphoto-shrink_200_200/0/1704731111852?e=2147483647&v=beta&t=-W8-NsxEP35dq-ZPBmwJhxdwTXc3nD44_ORJJHuJBS0'
            className='absolute inset-0 object-cover m-auto border-4 border-white rounded-full w-36 h-36'
          />

          <img
            src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='h-[50%] object-cover bg-cyan-200'
          ></img>
          <div className='flex flex-col items-center justify-end h-full py-4 bg-white'>
            <div>
              <h2 className='font-bold'>
                Tahjib <span className='font-semibold opacity-50 '>25</span>
              </h2>
              <p className='opacity-60'>Dhaka</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='flex items-center justify-around py-4 bg-white'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>80K</h2>{' '}
            <p className='text-sm opacity-50'>Followers</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>803K</h2>{' '}
            <p className='text-sm opacity-50'>Likes</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='font-bold'>1.4K</h2>{' '}
            <p className='text-sm opacity-50'>Photos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assignment
