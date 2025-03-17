import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Headeradmin.css"
const Headeradmin: React.FC = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Danh sách ảnh trong slider
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPoFl0NX9e9j0BLwF5g8unlGq_1uVW3K1gcw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqn_bWRBCIOeauVjMYEMjjr1xUYoYS4ER5g&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3faIXvdqKzYNFA7qAesALkkXBiufz4zJvQ&s",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header>
      <div className="header_1">
        <img style={{width:"90px"}} src="https://marketplace.canva.com/EAF1Ah5STk8/1/0/1600w/canva-dark-abstract-black-panther-gaming-logo-JqcoEpC3-BI.jpg" alt="" />

        <nav>
          <ul>
            <li ><Link className="nav_link" to="home">Home</Link></li>
            <li ><Link className="nav_link" to="#">Help</Link></li>
            <li ><Link className="nav_link" to="management">Product Management</Link></li>

            {user ? (
              <div className="acc">
                <img 
                  src={user.avatar || "https://i.pravatar.cc/40"} 
                  alt="User Avatar" 
                />
                <button onClick={handleLogout} >Logout</button>
              </div>
            ) : (
              <li><Link style={{ color: "yellow" }} to="/login">Login</Link></li>
            )}
          </ul>
        </nav>
        
      </div>
      

      {/* Slide động */}
      <div className="header_2">
        <div className="slide_dong">
            <img  
            src={images[currentIndex]} 
            alt="Slide" 
            />
        </div>
        <div className="slide2">
            <div className="slide2_tren">
                <div className="sl2_1"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" /></div>
                <div className="sl2_2"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd3faIXvdqKzYNFA7qAesALkkXBiufz4zJvQ&s" alt="" /></div>
                
            </div>
            <div className="slide2_duoi">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrqn_bWRBCIOeauVjMYEMjjr1xUYoYS4ER5g&s" alt="" />
            </div>
        </div>
      </div>
                    <div className="header_3">
                      <nav>
                          <ul>
                              <div>
                                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                                  <li ><Link className="nav_lik2" to={`#`}>One</Link></li>
      
                              </div>
                              <div>
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                                  <li ><Link className="nav_lik2" to={`#`}>One</Link></li>
      
                              </div>
                              <div >
                                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                                  <li ><Link className="nav_lik2" to={`#`}>One</Link></li>
      
                              </div>
                              <div >
                                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                                  <li ><Link className="nav_lik2" to={`#`}>One</Link></li>
      
                              </div>
                              <div>
                                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                                  <li ><Link className="nav_lik2" to={`#`}>One</Link></li>
      
                              </div>
                              <div >
                                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                                  <li ><Link className="nav_lik2" to={`#`}>One</Link></li>
      
                              </div>
                              <div >
                                  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ROHT5EJk1A9qDyOuvTEDBlNICxtyz8sf2g&s" alt="" />
                                  <li ><Link className="nav_lik2" to={`#`}>One</Link></li>
      
                              </div>
                              
                          </ul>
                      </nav>
                  </div>
    </header>
  );
};

export default Headeradmin;
