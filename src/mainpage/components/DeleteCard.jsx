import React from 'react'

function DeleteCard({setOpenModal, setCards}) {
  const handleSubmit = (e) => {
    e.preventDefault();
}
  return (
    <form action="" className='flex flex-col items-center w-screen h-screen md:w-[700px] md:h-[200px] justify-center md:rounded-[13px] bg-white relative'>
    <div className='w-[100%]'>
        <button className='w-4 h-4 bg-red-600 rounded-full absolute top-[10px] right-[10px]' 
        onClick={()=>{
          setOpenModal("")
          }}></button>
    </div>
      <h1 className='text-3xl font-bold mb-8 md:mb-5'>DELETE CARD</h1>
      <label htmlFor="" className='text-[#616161]'>Are you sure you want to delete card “Card name”?</label>
        <div className='flex justify-center h-[20%] items-center md:mt-5'>
          <button className='border border-zinc-300 py-2 px-5 rounded-[5px] font-bold hover:bg-[#9D9D9D]'
          onClick={()=>{
            setOpenModal("")
          }}
          >Close</button>
          <button onClick={handleSubmit} className='bg-yellow-400 py-2 px-5 rounded-[5px] font-bold mx-3 hover:bg-[#F6AB1A]'>Delete</button>
        </div>
      
    </form>
  )
}

export default DeleteCard