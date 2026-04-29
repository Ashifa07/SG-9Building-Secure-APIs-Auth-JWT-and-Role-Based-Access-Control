import { Request, Response } from "express"
import * as service from "../services/publisher.service"

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createPublisher(req.body)
    res.status(201).json(data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getPublishers()
    res.json(data)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const findOne = async (req: Request, res: Response) => {
  try {
    const data = await service.getPublisher(Number(req.params.id))
    if (!data) {
      return res.status(404).json({ message: "Publisher not found" })
    }
    res.json(data)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const data = await service.updatePublisher(Number(req.params.id), req.body)
    res.json(data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    await service.deletePublisher(Number(req.params.id))
    res.json({ message: "Publisher deleted" })
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
