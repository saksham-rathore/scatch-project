import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-black'>
        <form action="" className='border gap-10 p-10 space-x-5 border-white text-white'>
            <input type="text" placeholder='Name' className='border p-2 border-white text-white' />
            <input type="email" placeholder='Email' className='border p-2 border-white text-white' />
            <input type="password" placeholder='Password' className='border p-2 border-white text-white' />
            <button type='submit' className='border p-2 border-white text-white'>Submit</button>
        </form>
    </div>
  )
}

export default Form