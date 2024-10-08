import { sidebarLinks } from '@/Constants'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='stickey left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
        <div className='flex flex-1 flex-col gap-6'>
            {[sidebarLinks]}
        </div>
      
    </div>
  )
}

export default Sidebar
