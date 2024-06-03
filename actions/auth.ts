'use server'

import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"
import bcrypt from 'bcryptjs'
import * as jose from 'jose'
import { cookies } from "next/headers"

export const login = async (email: string, password: string) => {
  console.log(email, password)
  
  // Sample user to get logic in place
  const user = await prisma.user.findUnique({
    where: {
      email
    }
  })

  if(!user) return { error: 'Incorrect Email or Password' }

  // Check password - use bcrypt when this is in place
  const isCorrectPassword = bcrypt.compareSync(password, user.password)

  if(!isCorrectPassword) return { error: 'Incorrect Email or Password' }

  // Sign a jwt token
  const secret = new TextEncoder().encode(process.env.JWT_SECRET)
  const alg = 'HS256'

  const jwt = await new jose.SignJWT({})
    .setProtectedHeader({alg})
    .setExpirationTime('72h')
    .setSubject(user.id.toString())
    .sign(secret)

  // Set cookie
  cookies().set('Auth', jwt, {
    secure: true,
    httpOnly: true,
    expires: Date.now() + 24 * 60 * 60 * 1000 * 3,
    path: '/',
    sameSite: 'strict'
  })

  redirect('/admin')
}