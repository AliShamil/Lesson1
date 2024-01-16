import React from 'react'

export default function CreateCard({openCreateModal}) {
  return (
    <>
     <form action="" className='flex flex-col items-center w-[700px] h-[350px] justify-center rounded-[13px] bg-white'>
        <div className='w-[100%]'>
            <button className='bg-red-600 w-3 h-3 float-right my-0 mx-7 rounded-full ' 
            onClick={()=>{
                openCreateModal(false)
              }}></button>
        </div>
          <h1 className='text-3xl font-bold mb-5'>CREATE CARD</h1>
          <div className='flex flex-col w-[80%]'>
            <label htmlFor="" className='text-zinc-600 text-lg'>Title:</label>
            <input required  
              className='border border-zinc-300  my-3 h-[40px] p-1 rounded-[6px]'
            />
            <label htmlFor="" className='text-zinc-600 text-lg'>Description:</label>
            <input 
              required 
              className='border border-zinc-300 rounded-[6px] my-3 h-[40px] p-1'
            />
            <div className='flex justify-end h-[20%] items-center mt-[10px]'>
              <button className='border border-zinc-200 py-2 px-5 rounded-[5px] font-bold hover:bg-[#DFDFDF]'
              onClick={()=>{
                openCreateModal(false)
              }}>Close</button>
              <button className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-3 hover:bg-[#F6AB1A]'>Create</button>
            </div>
          </div>
        </form>
    </>
  )
}