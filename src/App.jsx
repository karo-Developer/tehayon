import React from 'react'
import About from './pages/about'
import Gallery from './pages/gallery'
import Home from './pages/home'
import Contact from './pages/contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className='App'>
      <BrowserRouter basename='/'>
        <Routes>
            <Route path = '/about'

            element= {<About/>}
            />

            <Route path = '/'

            element = { <Home/>}
            />

            <Route path = '/gallery'

            element= { <Gallery/>}
            
            />

            <Route path = '/contact'

            element= { <Contact/>}
            
            />

            {/* <Header/> */}

        </Routes>

        </BrowserRouter>


    </div>
  )
}

export default App