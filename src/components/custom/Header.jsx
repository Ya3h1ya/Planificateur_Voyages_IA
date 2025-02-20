import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center px-5'>
        <img src='airtravel.png' className='w-20 h-25' alt='AI Travel Logo' />
        <div>
            <Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Header