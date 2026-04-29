import { Request, Response } from "express"
import * as service from "../services/category.service"

export const create = async (req: Request, res: Response) => {
  try {
    const category = await service.createCategory(req.body)
    res.status(201).json(category)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const categories = await service.getCategories()
    res.json(categories)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const findOne = async (req: Request, res: Response) => {
  try {
    const category = await service.getCategory(Number(req.params.id))
    if (!category) {
      return res.status(404).json({ message: "Category not found" })
    }
    res.json(category)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const category = await service.updateCategory(Number(req.params.id), req.body)
    res.json(category)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    await service.deleteCategory(Number(req.params.id))
    res.json({ message: "Category deleted" })
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
