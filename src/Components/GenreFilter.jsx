const GenreFilter = ({genrelist, setSelectedGenre}) => {

  return (
        <select className='p-2 bg-gray-900/60 text-white backdrop-blur-md border rounded' onChange={(e) => setSelectedGenre(e.target.value)}>
            <option value="">All Genres</option>
            {genrelist.map((genre) => {
              return <option key={genre} value={genre.id}>{genre.name}</option>
            })}
        </select>
  )
}

export default GenreFilter
