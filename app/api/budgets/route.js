import connectMongodb from '@/lib/mongodb'
import { Budget } from '@/models/budget'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, amount } = await request.json()
  await connectMongodb()
  await Budget.create({ title: title, amount: amount })
  return NextResponse.json({ message: 'budget created' }, { satus: 200 })
}

export async function GET() {
  try {
    await connectMongodb()
    const budgets = await Budget.find()
    return NextResponse.json({ budgets })
  } catch (error) {
    console.log(error)
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectMongodb()
  await Budget.findByIdAndDelete(id)
  return NextResponse.json({ message: ' budget deleted' }, { status: 201 })
}
