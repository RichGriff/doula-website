
import MessagesTable from '@/components/admin/MessagesTable'
import React from 'react'

const MessagesPage = () => {
  const customerData = [
    { id: crypto.randomUUID(), read: false, name: 'Jane Doe', tel: '07974151982', email: 'lindsay.walton@example.com', subject: 'Enquiry', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi inventore, necessitatibus, et eos dolores quia quibusdam nihil animi voluptate dignissimos at suscipit ad porro dolore ex vero ipsum recusandae' },
    { id: crypto.randomUUID(), read: false, name: 'Esther Perel', tel: '01633233332', email: 'esther@relationshipguru.com', subject: 'Feedback', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi inventore, necessitatibus, et eos dolores quia quibusdam nihil animi voluptate dignissimos at suscipit ad porro dolore ex vero ipsum recusandae' },
    { id: crypto.randomUUID(), read: true, name: 'Rainbow Goddess', tel: '0844163121', email: 'random@example.com', subject: 'Enquiry', message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque eligendi inventore, necessitatibus, et eos dolores quia quibusdam nihil animi voluptate dignissimos at suscipit ad porro dolore ex vero ipsum recusandae' },
    // More people...
  ]

  return (
    <div className='pt-6'>
      <MessagesTable
        title='Your Messages'
        description='A list of all messages received through website.'
        data={customerData}
      />
    </div>
  )
}

export default MessagesPage
