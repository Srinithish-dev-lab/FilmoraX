import React, {useContext} from 'react'
import {FaHeart, FaRegHeart} from "react-icons/fa"
import { WatchListContext } from '../context/WatchListContext'

const Moviecard = ({movie}) => {
  const {ToggleWatchlist, watchlist} = useContext(WatchListContext)

  const inWatchlist = watchlist.some((m) => m.id == movie.id)


  return (
    <div className='bg-gray-800 p-4 rounded-lg shadow-md text-white relative'>
      <img className='w-full h-80 object-contain rounded-sm' src={ `https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3 className='text-xl font-bold mt-4'>{movie.title}</h3>
      <p className='text-base text-gray-400 mt-1'>{movie.release_date}</p>
      <p className='text-sm text-white mt-1'>{movie.overview}</p>      
      <button onClick={() => ToggleWatchlist(movie)} className='absolute top-2 right-2 text-red-500 text-xl'>{ inWatchlist ? <FaHeart/> : <FaRegHeart/>}</button>
    </div>
  )
}

export default Moviecard