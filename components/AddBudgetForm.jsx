'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

function AddBudgetForm() {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const router = useRouter()

  async function handleLogin(e) {
    e.preventDefault()

    // create budget

    try {
      const res = await fetch('api/budgets', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, amount }),
      })
      if (!res.ok) {
        throw new Error('There is a problem creating budget')
      }
      const userData = await res.json()
      console.log(userData, 'userdata')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="p-4">
  <form onSubmit={handleLogin} className="bg-gray-800 p-4 rounded-lg shadow-md">
    <div className="mb-4">
      <label htmlFor="title" className="block text-white">
        Budget Name
      </label>
      <input
        id="title"
        className="bg-gray-900 text-white border border-gray-600 rounded-md px-3 py-2 w-full"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>

    <div className="mb-4">
      <label htmlFor="amount" className="block text-white">
        Amount
      </label>
      <input
        id="amount"
        className="bg-gray-900 text-white border border-gray-600 rounded-md px-3 py-2 w-full"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
    </div>

    <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
    >
      Submit
    </button>
  </form>
</div>

  )
}

export default AddBudgetForm
