import React from 'react'

function TodoCard() {
  return (
    <>
  <div className='max-w-[560px] w-full md:mr-8 my-5'>
    <div className='border border-zinc-300 rounded-[5px]'>
      <div className='bg-[#efefef] p-[15px] md:p-[30px]'>
        <h1 className='text-xl md:text-3xl font-bold'>Card title</h1>
        <p className='my-2 text-justify font-bold text-[#555] text-sm md:text-base'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
      </div>
      <div className='flex bg-[#d9d9d9] justify-end items-center p-2'>
        <button className='bg-yellow-500 py-1 px-3 md:py-2 md:px-5 rounded-[5px] font-bold hover:bg-yellow-600'>Edit</button>
        <button className='bg-yellow-500 py-1 px-3 md:py-2 md:px-5 rounded-[5px] font-bold mx-2 hover:bg-yellow-600'>Delete</button>
      </div>
    </div>
  </div>


    </>
  )
}

export default TodoCard