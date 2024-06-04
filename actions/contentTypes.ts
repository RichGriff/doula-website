'use server'

import prisma from "@/lib/prisma"

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

    return true
  } catch (error) {
    console.log('ERR_UPDATE_CONTENT', error)
    return false
  }
}