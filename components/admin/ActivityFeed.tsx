import { activityItems } from '@/config'
import React from 'react'

const ActivityFeed = () => {
  return (
    <aside className="bg-gray-100 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
      <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-foreground">Activity feed</h2>
        <a href="#" className="text-sm font-semibold leading-6 text-purple-500">
          View all
        </a>
      </header>
      <ul role="list" className="divide-y divide-foreground/5">
        {activityItems.map((item) => (
          <li key={item.commit} className="px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-x-3">
              <img src={item.user.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full bg-gray-800" />
              <h3 className="flex-auto truncate text-sm font-semibold leading-6 text-foreground">{item.user.name}</h3>
              <time dateTime={item.dateTime} className="flex-none text-xs text-gray-600">
                {item.date}
              </time>
            </div>
            <p className="mt-3 truncate text-sm text-muted-foreground">
              Pushed to <span className="text-purple-600">{item.projectName}</span> (
              <span className="font-mono text-purple-600">{item.commit}</span> on{' '}
              <span className="text-purple-600">{item.branch}</span>)
            </p>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default ActivityFeed
