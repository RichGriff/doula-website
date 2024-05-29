
import CustomerTable from '@/components/admin/CustomerTable'
import React from 'react'

const CustomersPage = () => {
  const customerData = [
    { name: 'Jane Doe', tel: '07974151982', email: 'lindsay.walton@example.com', status: 'Pending' },
    { name: 'Esther Perel', tel: '01633233332', email: 'esther@relationshipguru.com', status: 'Booked' },
    { name: 'Rainbow Goddess', tel: '0844163121', email: 'random@example.com', status: 'Closed' },
    // More people...
  ]

  return (
    <div className='pt-6'>
      <CustomerTable
        title='Existing Customers'
        description='A list of all existing customers.'
        data={customerData}
      />
    </div>
  )
}

export default CustomersPage
