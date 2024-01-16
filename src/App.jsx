import { useState } from 'react'
import './App.css'
import Mainpage from './mainpage/Mainpage'
import Login from './login/Login'


export default function App() {
  const [authorized,setAuthorized] = useState(false)
  const [mail,setMail] = useState('')
  return authorized ? <Mainpage setAuthorized={setAuthorized} mail = {mail}/> : <Login setAuthorized = {setAuthorized} mail = {mail} setMail={setMail}/> 
}