'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import bcrypt from 'bcryptjs'

export const addNewUser = async () => {
  // Check if user already exists
  const currentUser = await prisma.user.findUnique({
    where: {
      email: 'solman.bhz@gmail.com'
    }
  })

  if(currentUser) return { error: 'User already exists' }

  const hashedPassword = bcrypt.hashSync('Welcome123!', 8)

  // Sample user to get logic in place
  const user = await prisma.user.create({
    data: {
      email: 'solman.bhz@gmail.com',
      password: hashedPassword,
      name: 'Bridie Solman',
      role: 'Admin',
      avatar: 'https://res.cloudinary.com/dfs5xyvsv/image/upload/v1716973250/DSC_0144_qinqhe.jpg'
    }
  })

  revalidatePath('/admin/users')
  return { data: user }
}