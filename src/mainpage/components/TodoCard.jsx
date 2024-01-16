import React from 'react'

function TodoCard({openEditModal,openDeleteModal}) {
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
      <div className='flex justify-center flex-col sm:flex-row sm:justify-end items-center rounded-b-[7px] p-4 bg-zinc-300 h-auto'>
        <button 
        onClick={()=>{
          openEditModal(true)
        }}
        className='mx-3 sm:mx-1 text-lg w-full sm:w-auto font-bold rounded-[7px] h-3/5 py-2 px-6 bg-[#f6b819] hover:bg-yellow-700'>Edit</button>
        <button 
         onClick={()=>{
          openDeleteModal(true)
        }}
        className='mx-3 sm:mx-1 mt-4 sm:mt-0 text-lg w-full sm:w-auto font-bold rounded-[7px] h-3/5 py-2 px-5 bg-[#f6b819] hover:bg-yellow-700'>Delete</button>
      </div>
    </div>
  </div>


    </>
  )
}

export default TodoCard