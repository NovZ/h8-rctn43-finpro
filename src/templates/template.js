import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgress } from '@material-ui/core';
import Header from '../molecules/Header';
import Movie from '../molecules/Movie';
import apikey from '../data/data';

const useTemplate = () => {
    const baseUrl = `https://www.omdbapi.com/?apikey=${apikey}&type=movie`;
    const [search, setSearch] = useState("");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    
  const getData = (url) => {
    axios.get(url)
      .then(response => {
        setData(response.data)
        setLoading(false)
      })
  }
  
  useEffect(() => {
    if(search.length === 0) setSearch("doraemon")
    setLoading(true)
    getData(`${baseUrl}&s=${search}`)
  }, [search])
  
        return ( 
            <>
              <Header enableSearch handleSearch={setSearch} />
              <h2>Movie List of "{search}"</h2>
              <div className="container">
                {loading && <CircularProgress />}
                <div style={{width: '100%', display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
                  {!loading && data && data.totalResults > 0 &&
                    data.Search.map((movie, index) => {
                        return(
                        <div key={index} style={{padding: '15px'}}>
                          <Movie movie={movie} />
                        </div>
                        )
                    })
                  }
                </div>
              </div>
            </>  
        );
}
export default useTemplate;