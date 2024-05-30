import React, { ReactNode } from 'react'

const LoginLayout = ({ children } : { children: ReactNode }) => {
  return (
    <div className='w-full min-h-screen bg-gray-50'>
      {children}
    </div>
  )
}

export default LoginLayout
