import React from 'react'
import Header from '../compoment/Header'
import Sidebar from '../compoment/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from '../compoment/Footer'

const Clielayout : React.FC = () => {
  return (
    <div>
        <Header/>
        <div className='content' style={{display:"flex"}}>
            <Sidebar/>
            <div style={{border:"1px solid",width:"930px",borderRadius:"5px 5px 3px 3px",backgroundColor:"white"}}>
                <main><Outlet/></main>
            </div>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Clielayout