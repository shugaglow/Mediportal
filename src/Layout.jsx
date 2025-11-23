import React from 'react'
import { Outlet } from "react-router-dom"
import NavBar from './components/NavBar'

function Layout() {
  return (
    <div className='flex min-h-screen w-full overflow-x-hidden'>
       <div className='flex lg:w-[24%]'>
         <NavBar/>
       </div>
        <main className='flex p-4 w-full lg:w-[76%] bg-gray-100'>
          <Outlet/>
        </main>
    </div>
  )
}

export default Layout