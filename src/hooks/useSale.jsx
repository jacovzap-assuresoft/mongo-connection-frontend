import { useState, useEffect } from 'react'

const useSale = () => {
  const [sales, setSales] = useState([])

  useEffect(() => {
    getAllSales()
  }, [])

  const getAllSales = async () => {
    const response = await fetch(
      'http://localhost:3000/api/get-all-sales-mongoose'
    )

    if (response.status !== 200) {
      throw new Error('Cannot fetch the data')
    }
   
    const data = await response.json()
    console.log(data)
    setSales(data)
  }


  return {
    sales,
  }
}

export default useSale
