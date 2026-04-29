import { Request, Response } from "express"
import * as profileService from "../services/profile.service"

export const getProfiles = async (req: Request, res: Response) => {
  try {
    const profiles = await profileService.getProfiles()
    res.json(profiles)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getProfileById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const profile = await profileService.getProfileById(id)
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" })
    }
    res.json(profile)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const createProfile = async (req: Request, res: Response) => {
  try {
    const profile = await profileService.createProfile(req.body)
    res.status(201).json(profile)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const updateProfile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const profile = await profileService.updateProfile(id, req.body)
    res.json(profile)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteProfile = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await profileService.deleteProfile(id)
    res.status(204).send()
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
