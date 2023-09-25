import connectMongodb from '@/lib/mongodb'
import { User } from '@/models/user'
import { NextResponse } from 'next/server'

export async function POST(request) {
  let userExist = false
  const { username } = await request.json()
  await connectMongodb()
  await User.findOne({ username: username })
    .then(findUser => {
      if (findUser != null) {
        userExist = true
      }
      console.log(findUser, 'find user')
    })
    .catch(error => {
      console.log('something went wrong')
      console.log(error)
    })

  return NextResponse.json({ userExist: userExist }, { satus: 201 })
}
