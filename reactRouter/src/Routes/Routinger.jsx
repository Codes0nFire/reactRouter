import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "../Components/Home"
import Feed from "../Components/Feed"
import Profile from "../Components/Profile"
import Details from '../Components/Details'

const Routinger = () => {
  return (
    <div>
          <Routes  >
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/feed" element={<Feed/>}>
      <Route path="/feed/:id" element={<Details/>} />
      </Route>
     
      <Route path="*" element={<h1>NOt Found</h1>} />
     </Routes>
    </div>
  )
}

export default Routinger

