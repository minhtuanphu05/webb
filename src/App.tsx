import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Adminlayout from './layout/Adminlayout'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Register from './pages/Register'
import Login from './pages/Login'
import { useRoutes } from 'react-router-dom'
import Clielayout from './layout/Clielayout'
import Home from './pages/Home'
import Detail from './pages/Detail'
import About from './pages/About'
import Management from './pages/Management'
const conFig = [
  {
    path:"admin",
    element:<Adminlayout/>,
    children:[
      {path:"add", element:<Add/>},
      {path:"home", element:<Home/>},
      {path:"management", element:<Management/>},
      {path:"update/:id", element:<Edit/>},
      {path:"detail/:id", element:<Detail/>},
      {path:"register", element:<Register/>},
      {path:"login", element:<Login/>},
    ]
  },
  {
    path:"/",
    element:<Clielayout/>,
    children:[
      {path:"home",element:<Home/>},
      {path:"about",element:<About/>},
      {path:"detail/:id",element:<Detail/>},
      {path:"register", element:<Register/>},
      {path:"login", element:<Login/>},
    ]
  }
]
function App() {
const rouTes = useRoutes(conFig)
  return (
    <>
    {rouTes}
    </>
  )
}

export default App
