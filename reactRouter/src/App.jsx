
import Feed from './Components/Feed'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import Details from './Components/Details'
import { Routes,Route } from 'react-router-dom'



function App() {
 

  return (
    <>
     <Navbar/>

     <Routes  >
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/feed" element={<Feed/>}>
      <Route path="/feed/:id" element={<Details/>} />
      </Route>
     
      <Route path="*" element={<h1>NOt Found</h1>} />
     </Routes>
    
    


    </>
  )
}

export default App
