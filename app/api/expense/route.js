import connectMongodb from '@/lib/mongodb'
import { Expense } from '@/models/expense'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, amount } = await request.json()
  await connectMongodb()
  await Expense.create({ title: title, amount: amount })
  return NextResponse.json({ message: 'Expense created' }, { satus: 200 })
}

export async function GET() {
  try {
    await connectMongodb()
    const expenses = await Expense.find()
    return NextResponse.json({ expenses })
  } catch (error) {
    console.log(error)
  }
}
