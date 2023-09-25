'use client'

import React, { useState, useEffect } from 'react'
import Intro from '@/components/Intro'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useRouter } from 'next/navigation'
import AddBudgetForm from '@/components/AddBudgetForm'
import AddExpenseForm from '@/components/AddExpenseForm'

// fetching get user data from api endpoint

async function getUserData() {
  try {
    const res = await fetch('api/user', {
      method: 'GET',
      // body: JSON.stringify({ username }),
    })
    if (!res.ok) {
      throw new Error('There is a problem fetching user data')
    }

    const response = await res.json()
    return response
  } catch (error) {
    console.log(error, 'error user')
  }
}

// get user budget from api endpoint

async function getUserBudget() {
  try {
    const res = await fetch('api/budgets', {
      cache: 'no-store',
    })
    if (!res.ok) {
      throw new Error('There is a problem fetching user data')
    }
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export default function Home() {
  let userLength
  const [users, setUsers] = useState([])
  const [budgets, setBudgets] = useState([])
  const router = useRouter()
  const [showAddExpenseForm, setShowAddExpenseForm] = useState(false) // Add a state to control the visibility of the AddExpenseForm

  // use useeffect to fetch user data
  useEffect(() => {
    // Fetch user data function
    async function getData() {
      const userData = await getUserData()
      const userBudget = await getUserBudget()
      setUsers([userData.users])
      setBudgets(userBudget.budgets)

      userLength = userData.users.length
      if (userLength === 0) {
        router.push('/createuser')
      }
    }

    getData()
  }, [])

  const handleAddExpenseForm = () => {
    setShowAddExpenseForm(true)
  }

  return (
    <>
      {users && users.length != 0 ? (
        <div>
          <Navbar />
          {users.map((user, i) => (
            <div key={i}>
              <p>{user.username}</p>
            </div>
          ))}

          {budgets && budgets.length > 0 ? (
            <div>
              <h2>
                <AddBudgetForm />
                {showAddExpenseForm ? (
                  <AddExpenseForm budgets={budgets} />
                ) : (
                  <button onClick={handleAddExpenseForm}>Add Expense</button>
                )}
                {budgets.map((bud, i) => (
                  <div key={i}>
                    <h2>{bud.title}</h2>
                    <h2>{bud.amount}</h2>
                  </div>
                ))}
              </h2>
            </div>
          ) : (
            <AddBudgetForm />
          )}
        </div>
      ) : null}
    </>
  )
}
