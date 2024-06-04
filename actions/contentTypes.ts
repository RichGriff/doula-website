'use server'

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const updateContentType = async (id: string, data: string) => {
  try {
    const updatedContent = await prisma.contentTypes.update({
      where: {
        id
      }, 
      data: {
        data
      }
    })

    revalidatePath('/admin/website/[slug]/page')
    return true
  } catch (error) {
    console.log('ERR_UPDATE_CONTENT', error)
    return false
  }
}