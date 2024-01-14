import React from 'react'
import Navbar from './components/Navbar'
import TodoCard from './components/TodoCard'

function Mainpage({setAuthorized , mail}) {
  return (
    <div className='h-screen'>
      <Navbar setAuthorized={setAuthorized} mail={mail}/>
      <main className='mx-8 my-5'>

      <button className='w-full md:w-fit bg-yellow-400 py-3 px-10 font-bold rounded-[8px] hover:bg-yellow-500 '>Create card</button>
      <div className='flex flex-wrap px-15'>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
        <TodoCard/>
      </div>
      </main>
    </div>
  )
}

export default Mainpage