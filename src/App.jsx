import { Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Menu from './pages/Menu'
import Clients from './pages/Clients'
import Sales from './pages/Sales'

function App () {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' exact element={<Menu />} />
        <Route path='/clients' element={<Clients />} />
        <Route path='/sales' element={<Sales />} />
      </Route>
    </Routes>
  )
}

export default App
