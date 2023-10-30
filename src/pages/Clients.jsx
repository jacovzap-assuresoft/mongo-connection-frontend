import useClient from '../hooks/useClient'
import { Trash } from 'lucide-react'

const Clients = () => {
  const clientHook = useClient()
  return (
    <div className='m-20 flex gap-36'>
      <div>
        <h1>CLIENTS</h1>
        <table className=' '>
          <thead>
            <tr>
              <th className='p-5'>Id</th>
              <th className='p-5'>Name</th>
              <th className='p-5'>Address</th>
              <th className='p-5'>Phone</th>
              <th className='p-5'>City</th>
              <th className='p-5'>Zone</th>
              <th className='p-5'>Street</th>
              <th className='p-5'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {clientHook.clients.map(client => (
              <tr key={client._id}>
                <td className='p-5'>{client._id}</td>
                <td className='p-5'>{client.name}</td>
                <td className='p-5'>{client.lastName}</td>
                <td className='p-5'>{client.phone}</td>
                <td className='p-5'>{client.address.city}</td>
                <td className='p-5'>{client.address.zone}</td>
                <td className='p-5'>{client.address.street}</td>
                <td className='p-5'>
                  <Trash
                    className='hover:cursor-pointer hover:bg-gray-200 rounded-md w-10 h-10 p-2'
                    onClick={() => clientHook.handleDeleteClient(client._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <form action='submit' onSubmit={clientHook.handleCreateClient}>
          <h1 className='text-lg font-semibold mb-10'>Create Client</h1>
          <div className='flex flex-col'>
            <label
              htmlFor='Name'
              className=' text-gray-600 font-medium text-md'
            >
              Name
            </label>
            <input
              type='text'
              name='name'
              id='Name'
              className='border border-gray-400 rounded-md mb-3  p-1'
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='LastName'
              className=' text-gray-600 font-medium text-md'
            >
              Last Name
            </label>
            <input
              type='text'
              name='lastName'
              className='border border-gray-400 rounded-md mb-3 p-1'
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='Phone'
              className=' text-gray-600 font-medium text-md'
            >
              Phone
            </label>
            <input
              type='text'
              name='phone'
              className='border border-gray-400 rounded-md mb-3  p-1'
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='City'
              className=' text-gray-600 font-medium text-md'
            >
              City
            </label>
            <input
              type='text'
              name='city'
              className='border border-gray-400 rounded-md mb-3  p-1'
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='Zone'
              className=' text-gray-600 font-medium text-md'
            >
              Zone
            </label>
            <input
              type='text'
              name='zone'
              className='border border-gray-400 rounded-md mb-3  p-1'
            />
          </div>
          <div className='flex flex-col'>
            <label
              htmlFor='Street'
              className=' text-gray-600 font-medium text-md'
            >
              Street
            </label>
            <input
              type='text'
              name='street'
              className='border border-gray-400 rounded-md mb-3  p-1'
            />
          </div>
          <button
            className='bg-gray-300 p-3 rounded-md hover:cursor-pointer hover:bg-gray-200'
            type='submit'
          >
            Save Client
          </button>
        </form>
      </div>
    </div>
  )
}

export default Clients
