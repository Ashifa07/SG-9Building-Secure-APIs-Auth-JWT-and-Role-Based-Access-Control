import { Request, Response } from "express"
import * as service from "../services/category.service"

export const create = async (req: Request, res: Response) => {
  const category = await service.createCategory(req.body)
  res.status(201).json(category)
}

export const findAll = async (req: Request, res: Response) => {
  const categories = await service.getCategories()
  res.json(categories)
}

export const findOne = async (req: Request, res: Response) => {
  const category = await service.getCategory(Number(req.params.id))
  res.json(category)
}

export const update = async (req: Request, res: Response) => {
  const category = await service.updateCategory(
    Number(req.params.id),
    req.body
  )
  res.json(category)
}

export const remove = async (req: Request, res: Response) => {
  await service.deleteCategory(Number(req.params.id))
  res.json({ message: "Category deleted" })
}