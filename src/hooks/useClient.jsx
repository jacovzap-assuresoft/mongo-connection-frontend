import { useState, useEffect } from 'react'

const useClient = () => {
  const [clients, setClients] = useState([])

  useEffect(() => {
    getAllClients()
  }, [])

  const getAllClients = async () => {
    const response = await fetch(
      'http://localhost:3000/api/get-all-clients-mongoose'
    )

    if (response.status !== 200) {
      throw new Error('Cannot fetch the data')
    }
    const data = await response.json()
    setClients(data)
  }

  const handleCreateClient = async e => {
    e.preventDefault()
    const data = new FormData(e.target)
    await fetch(
      'http://localhost:3000/api/create-client-mongoose',
      {
        method: 'POST',
        body: JSON.stringify({
          name: data.get('name'),
          lastName: data.get('lastName'),
          phone: data.get('phone'),
          address: {
            city: data.get('city'),
            zone: data.get('zone'),
            street: data.get('street')
          }
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    getAllClients()
    e.target.reset()
  }

  const handleDeleteClient = async id => {
    const response = await fetch(
      `http://localhost:3000/api/delete-client-mongoose/${id}`,
      {
        method: 'DELETE'
      }
    )

    if (response.status !== 200) {
      throw new Error('Cannot fetch the data')
    }

    getAllClients()
  }

  return {
    clients,
    handleDeleteClient,
    handleCreateClient
  }
}

export default useClient
