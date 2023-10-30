import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='h-screen flex items-center justify-center gap-5'>
      <NavLink to={'/clients'}>
        <button className=' bg-gray-300 p-5 rounded-md hover:cursor-pointer hover:bg-slate-200'>
          Go to clients
        </button>
      </NavLink>

      <NavLink to={'/sales'}>
        <button className=' bg-gray-300 p-5 rounded-md hover:cursor-pointer hover:bg-slate-200'>
          Go to sales
        </button>
      </NavLink>
    </div>
  )
}

export default Menu
