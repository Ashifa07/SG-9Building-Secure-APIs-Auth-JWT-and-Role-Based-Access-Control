import { Request, Response } from "express"
import * as service from "../services/publisher.service"

export const create=async(req:Request,res:Response)=>{
  const data=await service.createPublisher(req.body)
  res.status(201).json(data)
}

export const findAll=async(req:Request,res:Response)=>{
  const data=await service.getPublishers()
  res.json(data)
}

export const findOne=async(req:Request,res:Response)=>{
  const data=await service.getPublisher(Number(req.params.id))
  res.json(data)
}

export const update=async(req:Request,res:Response)=>{
  const data=await service.updatePublisher(Number(req.params.id),req.body)
  res.json(data)
}

export const remove=async(req:Request,res:Response)=>{
  await service.deletePublisher(Number(req.params.id))
  res.json({message:"Publisher deleted"})
}