import React from 'react'
import { useState } from 'react'
function LoginCard({ setAuthorized, mail, setMail }) {
  const [isValid, setIsValid] = useState(false)
  return (
    <form className='w-full max-w-[700px] mx-auto p-4 md:p-8 shadow-md shadow-zinc-300 rounded-[13px]'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-5 text-center'>LOGIN FORM</h1>
      <div className='mb-4'>
        <label htmlFor="email" className='text-sm md:text-base lg:text-lg'>Email:</label>
        <input
          id="email"
          onChange={(e) => {
            setMail(e.target.value);
            setIsValid(e.target.checkValidity());
          }}
          required={true}
          value={mail}
          placeholder='example@example.com'
          className='w-full border border-zinc-300 rounded-[5px] my-2 p-2 text-base md:text-lg'
          type="email"
        />
      </div>
      <button
        disabled={!isValid}
        onClick={() => {
          setAuthorized(isValid);
        }}
        className={`w-full ${isValid ? "bg-yellow-500 hover:bg-amber-400" : "bg-slate-500"} py-2 px-4 rounded-[10px] text-base md:text-lg`}
        type='submit'
      >
        Submit
      </button>
    </form>

  )
}

export default LoginCard