import { Request, Response } from "express"
import * as profileService from "../services/profile.service"

export const getProfiles = async (req: Request, res: Response) => {
  const profiles = await profileService.getProfiles()
  res.json(profiles)
}

export const getProfileById = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const profile = await profileService.getProfileById(id)

  if (!profile) {
    return res.status(404).json({ message: "Profile not found" })
  }

  res.json(profile)
}

export const createProfile = async (req: Request, res: Response) => {
  const profile = await profileService.createProfile(req.body)
  res.status(201).json(profile)
}

export const updateProfile = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const profile = await profileService.updateProfile(id, req.body)
  res.json(profile)
}

export const deleteProfile = async (req: Request, res: Response) => {
  const id = Number(req.params.id)

  await profileService.deleteProfile(id)
  res.status(204).send()
}