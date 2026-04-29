import { Request, Response } from "express"
import * as service from "../services/book.service"

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createBook(req.body)
    res.status(201).json(data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getBooks()
    res.json(data)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const findOne = async (req: Request, res: Response) => {
  try {
    const data = await service.getBook(Number(req.params.id))
    if (!data) {
      return res.status(404).json({ message: "Book not found" })
    }
    res.json(data)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const data = await service.updateBook(Number(req.params.id), req.body)
    res.json(data)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    await service.deleteBook(Number(req.params.id))
    res.json({ message: "Book deleted" })
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
