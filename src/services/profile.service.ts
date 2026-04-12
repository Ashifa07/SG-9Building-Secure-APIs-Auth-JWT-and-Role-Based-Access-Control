import { prisma } from "../config/prisma"

export const getProfiles = () => {
  return prisma.profile.findMany({
    include: {
      author: true
    }
  })
}

export const getProfileById = (id: number) => {
  return prisma.profile.findUnique({
    where: { id },
    include: {
      author: true
    }
  })
}

export const createProfile = (data: any) => {
  return prisma.profile.create({
    data
  })
}

export const updateProfile = (id: number, data: any) => {
  return prisma.profile.update({
    where: { id },
    data
  })
}

export const deleteProfile = (id: number) => {
  return prisma.profile.delete({
    where: { id }
  })
}