import React from 'react'

function TodoCard() {
  return (
    <div className="flex flex-col justify-center items-center w-[560px] h-[330px]">
      <div className="flex flex-col w-full  bg-[#efefef] rounded-[5px]">
        <div className="ml-[25px] mt-5 mb-2.5 font-bold text-black text-[36px] ">
          Card title
        </div>
        <p className="mx-[25px] mb-[32px]  font-bold text-[#555] text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        <div className="flex flex-row-reverse items-center h-[91px] bg-[#d9d9d9] rounded-[0px_0px_5px_5px] font-bold text-black text-[20px] text-center" >
        <button className='mx-[15px] w-[124px] h-[61px] bg-yellow-500 py-2 px-4 rounded-[10px] hover:bg-yellow-700' type='submit'>Delete</button>
        <button className='w-[99px] h-[61px] bg-yellow-500 py-2 px-4 rounded-[10px] hover:bg-yellow-700' type='submit'>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default TodoCard