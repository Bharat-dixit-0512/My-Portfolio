import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Navbar from './components/Navbar.jsx'
import Certificate from "./components/Certificate.jsx"

function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:'/About',
      element:<><Navbar/><About/></>
    },
    {
      path:'/Contact',
      element:<><Navbar/><Contact/></>
    },
    {
      path:'/Projects',
      element:<><Navbar/><Projects/></>
    },
    {
      path:'/Certificate',
      element:<><Navbar/><Certificate/></>
    },
   
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
  
}

export default App