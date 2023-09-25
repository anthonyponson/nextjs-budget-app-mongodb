'use client'

import { useState } from 'react'

function AddExpenseForm({ budgets }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const res = await fetch('api/expense', {
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
    <>
      <div>
        {budgets && budgets.map((budget, i) => (
          <>
            <div>
              Add new <span className='text-teal-400'>{budget.title}</span>{' '}
              Expense
            </div>

            <div>
              <form onSubmit={handleLogin}>
                <label>
                  Expense Name
                  <input
                    className='bg-gray-900 text-white'
                    type='text'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                </label>

                <label>
                  Expense Amount
                  <input
                    className='bg-gray-900 text-white'
                    type='number'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                  />
                </label>
                <button type='submit'>submit </button>
              </form>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default AddExpenseForm
