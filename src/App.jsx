import React from 'react'
import LoginCard from './login/components/LoginCard'
import TodoCard from './mainpage/components/TodoCard'

function App() {
  return (
    <div className='flex h-screen justify-center items-center'>
     {/* <LoginCard/> */}
     <TodoCard/>
    </div>
  )
}

export default App