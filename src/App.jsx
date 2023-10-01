import { useState } from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './components/pages/Home'

function App() {
  
  return (
    <>
      <div className='App'>
        <Router>
          <Header />
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='movie/:id' element={<h1>Movie details</h1>}></Route>
            <Route path='movies/:type' element={<h1>movie list</h1>}></Route>
            <Route path='/*' element={<h1>Error Page</h1>}></Route>
          </Routes>
        </Router>

      </div>
      

    </>
  )

  }

  


export default App
