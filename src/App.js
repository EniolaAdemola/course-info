import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/Footer"
import { About, CheckInfo, Developers, DisplayInfo, LandingPage, SearchInfo } from './pages';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
				<Routes>
					{/* Route goes in here */}
          <Route index element={<LandingPage/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="check-info" element={<CheckInfo/>}/>
          <Route path="developers" element={<Developers/>}/>
          <Route path="display-info" element={<DisplayInfo/>}/>
          <Route path="search-info" element={<SearchInfo/>}/>
          <Route path="*" element="Page NotFound!"/>
				</Routes>
				<Footer />
      </BrowserRouter>
    </div>
  )
}

export default App