import { Request,Response } from "express"
import * as service from "../services/author.service"

export const create=async(req:Request,res:Response)=>{
  const data=await service.createAuthor(req.body)
  res.status(201).json(data)
}

export const findAll=async(req:Request,res:Response)=>{
  const data=await service.getAuthors()
  res.json(data)
}

export const findOne=async(req:Request,res:Response)=>{
  const data=await service.getAuthor(Number(req.params.id))
  res.json(data)
}

export const update=async(req:Request,res:Response)=>{
  const data=await service.updateAuthor(Number(req.params.id),req.body)
  res.json(data)
}

export const remove=async(req:Request,res:Response)=>{
  await service.deleteAuthor(Number(req.params.id))
  res.json({message:"Author deleted"})
}