import { useEffect, useState } from "react"
import Moviecard from "../Components/Moviecard"

const Home = () => {

  const [movies, setMovies] = useState([])
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState("")


  useEffect(() => {

    let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=${process.env.REACT_APP_TMDB_KEY}`

    if (search){
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${process.env.REACT_APP_TMDB_KEY}`
    }

    fetch(url)
    .then(response => response.json())
    .then(data => setMovies(data.results))
    .catch(err => console.error(err))
  },[page, search])

  return (
    <div className="pt-20 p-4">
      <div className="flex justify-center">
        <input
          className="z-10 p-2 w-3/4 md:w-1/2 border border-gray-700 rounded bg-gray-900/60 backdrop-blur-md text-white fixed top-20 focus:border-blue-500 focus:outline-none"
          type="text"
          placeholder="Search Movies.."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="movie-container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {movies.map((movie, idx) => {
          return <Moviecard key={idx} movie={movie} />;
        })}
      </div>
      
      <div className="pagination-container flex justify-between mt-5">
        <button
          className="bg-gray-700 text-white rounded px-4 py-2"
          disabled={page == 1}
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          Previous
        </button>

        <p className="mt-2 text-xl text-gray-900">Page {page}</p>

        <button
          className="bg-gray-700 text-white rounded px-4 py-2"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Home
