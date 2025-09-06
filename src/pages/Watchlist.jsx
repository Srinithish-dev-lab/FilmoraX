import React, { useContext, useState } from 'react'
import GenreFilter from '../Components/GenreFilter'
import { WatchListContext } from '../context/WatchListContext'
import Moviecard from '../Components/MovieCard'


const Watchlist = () => {

  const {watchlist, genrelist} = useContext(WatchListContext)
  const [search, setSearch] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("")

  const filteredMovies = watchlist.filter((movie) => 
    movie.title.toLowerCase().includes(search.toLowerCase()))
    .filter( (movie) => { return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre))})
  

  return (
    <>
      <div className="flex justify-center pt-20 p-4">
        <input
          className="z-10 p-2 w-3/4 md:w-1/2 border border-gray-700 rounded bg-gray-900/60 backdrop-blur-md text-white fixed top-20 focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="Search Movies.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-16 flex justify-center">
        <GenreFilter genrelist = {genrelist} setSelectedGenre = {setSelectedGenre}/>
      </div>

      <div className="movie-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {filteredMovies.map((movie, idx) => {
          return <Moviecard key={idx} movie={movie} />;
        })}
      </div>
    </>
  );
}

export default Watchlist