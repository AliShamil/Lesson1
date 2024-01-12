import React from 'react'
import LoginCard from './login/components/LoginCard'
import TodoCard from './mainpage/components/TodoCard'
import Navbar from './mainpage/components/Navbar'


function App() {
  return (
    <div className='flex h-screen justify-center items-center'>
          {/* <LoginCard/> */}
          <Navbar />
          {/* <TodoCard/> */}
    </div>
  )
}

export default App