'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

function page() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedInUser, setLoggedInUser] = useState(null)
  const router = useRouter()

  async function handleLogin(e) {
    e.preventDefault()
    // fetching get user data from api endpoint

    try {
      const res = await fetch('api/loginuser', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username }),
      })
      if (!res.ok) {
        throw new Error('There is a problem fetching user data')
      }
      const userData = await res.json()
      console.log(userData, 'userdata')
      if (userData.userExist) {
        localStorage.setItem('username', username)
        router.push('/')
      }
      else{
        alert('this user is not exits')
      }
      setLoggedInUser(userData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            className='bg-gray-900 text-white'
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <button type='submit'>Login </button>
      </form>
    </div>
  )
}

export default page
