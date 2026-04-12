import { Request,Response } from "express"
import * as service from "../services/member.service"

export const create = async(req:Request,res:Response)=>{
  const data = await service.createMember(req.body)
  res.status(201).json(data)
}

export const findAll = async(req:Request,res:Response)=>{
  const data = await service.getMembers()
  res.json(data)
}

export const findOne = async(req:Request,res:Response)=>{
  const data = await service.getMember(Number(req.params.id))
  res.json(data)
}

export const update = async(req:Request,res:Response)=>{
  const data = await service.updateMember(Number(req.params.id),req.body)
  res.json(data)
}

export const remove = async(req:Request,res:Response)=>{
  await service.deleteMember(Number(req.params.id))
  res.json({message:"Member deleted"})
}