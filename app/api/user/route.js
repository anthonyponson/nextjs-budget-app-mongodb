import connectMongodb from '@/lib/mongodb'
import { User } from '@/models/user'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { username } = await request.json()
  await connectMongodb()
  await User.create({ username })
  return NextResponse.json({ message: 'user created' }, { satus: 201 })
}

export async function GET() {
  await connectMongodb()
  // const currentUser = localStorage.getItem('username')
  const users = await User.findOne()
  return NextResponse.json({ users })
}
