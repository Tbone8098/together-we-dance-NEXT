import React from 'react'

export default function Index() {
  return (
    <div className='flex justify-between sticky top-0 px-10 py-2 bg-white shadow shadow-black'>
        <ul className='flex gap-3'>
            <li>About Us</li>
            <li>Let's Move</li>
        </ul>
        <h1 className='text-xl font-extrabold'>Together We Move</h1>
        <ul className='flex gap-3'>
            <li><a className='underline text-my-secondary' href="">Login</a></li>
            <li><a className='btn bg-my-accent' href="">Sign Up</a></li>
        </ul>
    </div>
  )
}
