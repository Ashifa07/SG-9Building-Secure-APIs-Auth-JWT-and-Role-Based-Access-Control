import { JwtPayload } from 'jsonwebtoken'

export interface Token extends JwtPayload {
    userId: number
    role: 'admin' | 'user'
}

export const SECRET_KEY = process.env.SECRET_KEY || 'rahasia'