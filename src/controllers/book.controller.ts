import { Request,Response } from "express"
import * as service from "../services/book.service"

export const create=async(req:Request,res:Response)=>{
  const data=await service.createBook(req.body)
  res.status(201).json(data)
}

export const findAll=async(req:Request,res:Response)=>{
  const data=await service.getBooks()
  res.json(data)
}

export const findOne=async(req:Request,res:Response)=>{
  const data=await service.getBook(Number(req.params.id))
  res.json(data)
}

export const update=async(req:Request,res:Response)=>{
  const data=await service.updateBook(Number(req.params.id),req.body)
  res.json(data)
}

export const remove=async(req:Request,res:Response)=>{
  await service.deleteBook(Number(req.params.id))
  res.json({message:"Book deleted"})
}