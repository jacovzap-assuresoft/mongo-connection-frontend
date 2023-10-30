import useSale from '../hooks/useSale'

const Sales = () => {
  const salesHook = useSale()
  return (
    <div className='m-20 flex gap-36'>
      <div>
        <h1>SALES</h1>
        <table className=' '>
          <thead>
            <tr>
              <th className='p-5'>Id</th>
              <th className='p-5'>Cliente</th>
              <th className='p-5'>item</th>
              <th className='p-5'>price</th>
            </tr>
          </thead>
          <tbody>
            {salesHook.sales.map(sale => (
              <tr key={sale._id}>
                <td className='p-5'>{sale._id}</td>
                <td className='p-5'>{`${sale.clientId.name} ${sale.clientId.lastName}`}</td>
                <td className='p-5'>{sale.item}</td>
                <td className='p-5'>{`${sale.price} Bs.`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Sales
