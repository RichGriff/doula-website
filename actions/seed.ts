'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import bcrypt from 'bcryptjs'
import { contentTypes } from "@/config"

export const createContentTypes = async () => {
  const ct = contentTypes.pages
  const promises = []

  for (let index = 0; index < ct.length; index++) {
    const element = ct[index];
    promises.push(createContentType(element))  
  }

  Promise.all(promises)
    .then((result) => {
        return true
    })
    .catch((e) => {
        console.log(e)
        return false
    });
}

const createContentType = async (content: any) => {
  try {
    const createdType = await prisma.contentTypes.create({
      data: {
        title: content.title,
        key: content.key,
        data: JSON.stringify(content.data)
      }
    })
    return createdType
  } catch (error) {
    console.log('FAILED_TO_CREATE_CONTENTTYPE', content.key)
  }
}