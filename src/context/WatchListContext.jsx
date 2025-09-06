import React, { createContext, useState, useEffect} from 'react'

export const WatchListContext = createContext()

export const WatchListProvider = ({children}) => {
    const [watchlist, setWatchlist] = useState([])
    const [genrelist, setGenrelist] = useState([])

    useEffect(() => {
    
        let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=307c20304dd739d7724f8d46033a24db`
    
        fetch(url)
        .then(response => response.json())
        .then(data => setGenrelist(data.genres || []))
        .catch(err => console.error(err))
      },[])


    const ToggleWatchlist = (movie) => {

        // Step 1: Check if the movie already exists in the watchlist
        const exists = watchlist.find((m) => m.id === movie.id)

        if (!exists){
            // Step 2a: If not found, add it by creating a new array
            setWatchlist([...watchlist,movie])
        }
        else{
            // Step 2b: If found, remove it using filter
            setWatchlist(watchlist.filter((m) => m.id !== movie.id))
        }

    }

    return(
        <WatchListContext.Provider value={{watchlist, ToggleWatchlist, genrelist}}>
            {children}
        </WatchListContext.Provider>
    )


}
