import React from 'react'
import { NavLink ,Link} from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";
import { useAuth } from '../context/auth';
import {toast} from 'react-toastify';
import Dashboard from './../pages/user/Dashboard';

const Header = () => {
  const [auth,setAuth]=useAuth();
const handleLogut=()=>{
  setAuth({
    ...auth,
    user:null,
    token:''
  })
  localStorage.removeItem("auth")
  toast.success('Logout Successfully')
};
  return (
 <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand" >
     <FaCartShopping/>  Ecommerce App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link "  >
            Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/category" className="nav-link "  >
            Category</NavLink>
        </li>
      {
        !auth.user? (<>
          <li className="nav-
item">
          <NavLink to="/register" className="nav-link" >
            Register</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" >
            Login</NavLink>
        </li>
        </>) : (<>
          <li class="nav-item dropdown">
          <NavLink class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {auth?.user?.name}
          </NavLink>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><NavLink to={`/dashboard/${auth?.user?.role===1 ? 'admin':'user'}`} className="dropdown-item" >Dashboard</NavLink></li>
            <li>
            <NavLink onClick={handleLogut} to="/login" className="dropdown-item" >
            Logout</NavLink>
            </li>
          
          </ul>
        </li>
         
        </>)
      }
        <li className="nav-
item">
          <NavLink to="/cart" className="nav-link">
            Cart (0)</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>

    
      )
}

export default Header
