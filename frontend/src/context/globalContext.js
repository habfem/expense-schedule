import React, { useContext, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://localhost:5000/api/v1/";


const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {

  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [error, setError] = useState(null)

  //calculate incomes
  const addIncome = async (income) => {
    await axios.post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message)
      })
    getIncomes()
  }

  const getIncomes = async () => {
    const response = await axios.get(`${BASE_URL}get-incomes`)
    setIncomes(response.data)
  }

  const deleteIncome = async (id) => {
    await axios.delete(`${BASE_URL}delete-income/${id}`)
    getIncomes()
  }

  const updateIncome = async () => {
    console.log("Hi Mom");
  }

  const totalIncome = () => {
    let totalIncome = 0;
    incomes.forEach((income) => {
      totalIncome = totalIncome + income.amount
    })

    return totalIncome;
  }


  //calculate expense
  const addExpense = async (income) => {
    await axios.post(`${BASE_URL}add-expense`, income)
      .catch((err) => {
        setError(err.response.data.message);
      })
    getExpenses()
  }

  const getExpenses = async () => {
    const response = await axios.get(`${BASE_URL}get-expenses`)
    setExpenses(response.data)
  }

  const deleteExpense = async (id) => {
    await axios.delete(`${BASE_URL}delete-expense/${id}`)
    getExpenses()
  }

  /* const updateExpense = async (id, updatedExpense) => {
    await axios.put(`${BASE_URL}edit-expense/${id}`, updatedExpense)
      .catch((err) => {
        setError(err.response.data.message);
      })
    getExpenses()
  } */

  const updateExpense = async () => {
    console.log("Hi");
  }

  const totalExpenses = () => {
    let totalIncome = 0;
    expenses.forEach((income) => {
      totalIncome = totalIncome + income.amount
    })

    return totalIncome;
  }

  const totalBalance = () => {
    return totalIncome() - totalExpenses()
  }

  const transactionHistory = () => {
    const history = [...incomes, ...expenses]
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt)
    })

    return history.slice(0, 3)
  }


  return (
    <GlobalContext.Provider value={{
      addIncome,
      getIncomes,
      incomes,
      deleteIncome,
      updateIncome,
      expenses,
      totalIncome,
      addExpense,
      getExpenses,
      deleteExpense,
      updateExpense,
      totalExpenses,
      totalBalance,
      transactionHistory,
      error,
      setError
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}