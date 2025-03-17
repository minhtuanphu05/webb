import React from 'react'
import Headeradmin from '../compoment/admin/Headeradmin'
import { Outlet } from 'react-router-dom'
import Footer from '../compoment/Footer'
import Sidebar from '../compoment/Sidebar'

const Adminlayout :React.FC  = () => {
  return (
    <div>
        <Headeradmin/>
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

export default Adminlayout