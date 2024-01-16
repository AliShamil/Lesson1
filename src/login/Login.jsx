import React from 'react'
import LoginCard from './components/LoginCard'

export default function Login({setAuthorized,mail,setMail}) {
  return (
    <div className='flex justify-center items-center h-screen'>
      <LoginCard setAuthorized = {setAuthorized} mail = {mail} setMail={setMail}/>
    </div>
  )
}