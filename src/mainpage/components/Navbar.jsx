import React from 'react'

function Navbar() {
    return (
        <div className="px-[15px] text-[20px] font-bold text-black flex justify-between items-center bg-[#E7E7E7]  w-screen h-[121px]">
            <label htmlFor="">example.email@gmail.com</label>
            <button className='w-[202px] h-[61px] bg-yellow-500 py-2 px-4 rounded-[10px] hover:bg-yellow-700' type='submit'>Log Out</button>
        </div>
    )
}

export default Navbar