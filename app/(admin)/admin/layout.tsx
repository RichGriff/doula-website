import Dashboard from '@/components/admin/Dashboard'
import React, { ReactNode } from 'react'

const AdminLayout = ({ children } : { children: ReactNode }) => {
  return (
    <Dashboard>
      {children}
    </Dashboard>
  )
}

export default AdminLayout
