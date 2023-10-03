import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/pages/Home'
import Card from './components/cards/Card'
import MovieList from './components/movieList/MovieList'
import Movie from './components/pages/movieDetails/MovieDetails'

function App() {
  
  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='movie/:id' element={<Movie />}></Route>
            <Route path='movies/:type' element={<MovieList />}></Route>
            <Route path='/*' element={<h1>Error Page</h1>}></Route>
          </Routes>
        </Router>

      </div>
      

    </>
  )

  }

  


export default App
