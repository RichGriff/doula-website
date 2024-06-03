import { Trash2 } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"

type MessagesTableProps = {
  title: string
  description: string
  data: any
}

export default function MessagesTable({ title, description, data } : MessagesTableProps) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">{title}</h1>
          <p className="mt-2 text-sm text-gray-700">
            {description}
          </p>
        </div>
      </div>
      <div className="-mx-4 mt-8 sm:-mx-0">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                Name
              </th>
              <th scope="col" className="hidden sm:table-cellpx-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Message
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Subject
              </th>
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {data.map((message: any) => (
              <tr key={message.email} className="">
                <td className="flex flex-col py-4 pl-4 pr-3 text-sm font-medium text-gray-900 w-auto max-w-none sm:pl-0">
                  <Link href={`messages/${message.id}`} className="w-full hover:text-violet-600 flex justify-start items-center gap-2">
                      {message.name}
                      {!message.read && <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                      New
                    </span>}
                  </Link>
                  <span className="text-muted-foreground text-sm pt-1">{message.email}</span>
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only sm:hidden">Message</dt>
                    <dd className="mt-4 max-w-96 truncate text-gray-500 sm:hidden">{message.message}</dd>
                  </dl>
                </td>
                <td className="hidden sm:table-cell max-w-[300px] flex-1 px-3 py-4 text-sm text-gray-500 truncate">{message.message}</td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{message.subject}</td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <Button size={"icon"} variant={"ghost"}><Trash2 className="w-4 h-4"/></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
