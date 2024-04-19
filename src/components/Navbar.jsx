import { useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import auth from "../slice/auth"
import axios from "axios"




const Navbar = () => {
  const {isLoggedin}=useSelector(state=>state.auth)
  const navigate=useNavigate()
  console.log(isLoggedin);

  const logout=async()=>{
await axios.post('logout',{},{withCredentials:true})
navigate('/login')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">
        Teacher.Services
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         {
          isLoggedin ? '': <li className="nav-item"> 
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
         }

        </ul>
        <div>
          <a
            className="btn btn-outline-secondary"
            href="mailto:vohidabdunazarov88@gmail.com"
          >
            Bog'lanish
          </a>
          {
            isLoggedin ? <div className="btn btn-group">
            <button className="btn btn-danger" onClick={logout}>Chiqish</button>
            <button className="btn btn-info">Profile Sozlamalari</button>
            </div>:null
          }
        </div>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar