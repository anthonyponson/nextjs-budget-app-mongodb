'use client'

import { useState } from 'react'
import { redirect, useRouter } from 'next/navigation'

function page() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loggedInUser, setLoggedInUser] = useState(null)

  const router = useRouter()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const res = await fetch('api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
      })

      if (!res.ok) {
        throw new Error(
          'somwthing went wrong find yourself instead of using chatgpt'
        )
      }

      const user = await res.json()
      setLoggedInUser(user)

      // save user name in localstorage

      localStorage.setItem('username', username)

      router.push('/')
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div>
        <div>
          <h2>Welcome to Dashboard</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            laborum!
          </p>
        </div>
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
            <button type='submit'>create user </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
