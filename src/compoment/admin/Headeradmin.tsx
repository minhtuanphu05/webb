import React from 'react'
import { Link } from 'react-router-dom'
const Headeradmin : React.FC = () => {

  return (
    <div>
        <header style={{marginBottom:"20px"}}>
            <div style={{display:"flex",justifyContent:"space-between",border:"1px solid red",backgroundColor:"black"}}>
            
                <h1 style={{fontSize:"30px",marginLeft:"20px"}}>LOGO</h1>
                <div style={{marginRight:"20px"}}>
                    <nav>
                        <ul style={{display:"flex"}}>
                            <li style={{listStyle:"none",padding:"5px 20px 0px 20px"}}><Link style={{color:"yellow"}} to={`home`}>Home</Link></li>
                            <li style={{listStyle:"none",padding:"5px 20px 0px 20px"}}><Link style={{color:"yellow"}} to={`add`}>Add</Link></li>
                            <li style={{listStyle:"none",padding:"5px 20px 0px 20px"}}><Link style={{color:"yellow"}} to={`management`}>Product Management</Link></li>
                            <li style={{listStyle:"none",padding:"5px 20px 0px 20px"}}><Link style={{color:"yellow"}} to={`login`}>Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='slide_dong' style={{marginTop:"20px",width:"700px",height:"300px",border:"1px solid",marginLeft:"250px"}}>
                <img style={{width:"700px",height:"300px",objectFit:"cover"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
            </div>
            <div style={{margin:"40px 0px 40px 0px"}}>
                <nav>
                    <ul style={{display:"flex",justifyContent:"space-around"}}>
                        <div style={{width:"50px",borderRadius:"5px"}}>
                            <img style={{width:"40px",height:"70px",objectFit:"cover",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                            <li style={{listStyle:"none",width:"40px",margin:"1px 0px 2px 4px"}}><Link to={`#`}>One</Link></li>

                        </div>
                        <div style={{width:"50px",borderRadius:"5px"}}>
                            <img style={{width:"40px",height:"70px",objectFit:"cover",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                            <li style={{listStyle:"none",width:"40px",margin:"1px 0px 2px 4px"}}><Link to={`#`}>One</Link></li>

                        </div>
                        <div style={{width:"50px",borderRadius:"5px"}}>
                            <img style={{width:"40px",height:"70px",objectFit:"cover",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                            <li style={{listStyle:"none",width:"40px",margin:"1px 0px 2px 4px"}}><Link to={`#`}>One</Link></li>

                        </div>
                        <div style={{width:"50px",borderRadius:"5px"}}>
                            <img style={{width:"40px",height:"70px",objectFit:"cover",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                            <li style={{listStyle:"none",width:"40px",margin:"1px 0px 2px 4px"}}><Link to={`#`}>One</Link></li>

                        </div>
                        <div style={{width:"50px",borderRadius:"5px"}}>
                            <img style={{width:"40px",height:"70px",objectFit:"cover",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                            <li style={{listStyle:"none",width:"40px",margin:"1px 0px 2px 4px"}}><Link to={`#`}>One</Link></li>

                        </div>
                        <div style={{width:"50px",borderRadius:"5px"}}>
                            <img style={{width:"40px",height:"70px",objectFit:"cover",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                            <li style={{listStyle:"none",width:"40px",margin:"1px 0px 2px 4px"}}><Link to={`#`}>One</Link></li>

                        </div>
                        <div style={{width:"50px",borderRadius:"5px"}}>
                            <img style={{width:"40px",height:"70px",objectFit:"cover",borderRadius:"10px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                            <li style={{listStyle:"none",width:"40px",margin:"1px 0px 2px 4px"}}><Link to={`#`}>One</Link></li>

                        </div>
                        
                    </ul>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Headeradmin 