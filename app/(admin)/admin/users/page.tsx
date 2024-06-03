import UsersTable from "@/components/admin/UsersTable"
import prisma from "@/lib/prisma"
import UserPageHeader from "./_components/Header"

export default async function UsersPage() {
  const users = await prisma.user.findMany()

  return (
    <div className="mt-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <UserPageHeader />
        <UsersTable users={users} />
      </div>
    </div>
  )
}
