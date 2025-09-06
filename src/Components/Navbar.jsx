import {Link} from 'react-router-dom'
import { useContext } from 'react'
import { WatchListContext } from '../context/WatchListContext'

const Navbar = () => {

  const {watchlist} = useContext(WatchListContext)

  return (
    <div className='flex justify-between text-white bg-gray-900 p-4 w-full fixed top-0 z-10'>
      <Link to="/" className='text-2xl font-bold'>FilmoraX</Link>
      <Link to="/watchlist" className='text-xl'>Watchlist({watchlist.length})</Link>
    </div>
  )
}

export default Navbar