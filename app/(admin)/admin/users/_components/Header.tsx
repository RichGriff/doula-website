'use client'

import { addNewUser } from '@/actions/users'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

const UserPageHeader = () => {
  const handleNewUser = async () => {
    const { error } = await addNewUser()
    if(error) {
      alert(error)
    }
  }
  return (
    <div className="sm:flex sm:items-center">
      <div className="sm:flex-auto">
        <h1 className="text-base font-semibold leading-6 text-gray-900">Manage Users</h1>
        <p className="mt-2 text-sm text-gray-700">
          A list of all the users in your account including their name, title, email and role.
        </p>
      </div>
      <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <Button onClick={handleNewUser}>
          <Plus className='w-4 h-4 mr-2'/>
          Add user
        </Button>
      </div>
    </div>
  )
}

export default UserPageHeader
