'use client'

import { useRouter } from 'next/navigation'

function Button({ id }) {
  const router = useRouter()
  async function deleteUser() {
    // const confirmed = confirm('Are you sure?')
    // if (confirmed) {
    //   await fetch(`http://localhost:3000/api/user?id=${id}`, {
    //     method: 'DELETE',
    //   })
    // }

    localStorage.removeItem('username')
    router.push('/login')
    router.refresh()
  }

  return (
    <>
      <button onClick={deleteUser}>Logout</button>
    </>
  )
}

export default Button
