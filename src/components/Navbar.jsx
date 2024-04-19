import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import auth, { logout } from "../slice/auth"
import axios from "axios"




const Navbar = () => {
  const {isLoggedin}=useSelector(state=>state.auth)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  console.log(isLoggedin);

  const Chiqish=async()=>{
    const token=localStorage.getItem('token')
    try {
      await axios.delete("https://shaxobiddin20.pythonanywhere.com/api/v1/user/logout/",{
        headers:{
          Authorization:`Token ${token}`
        }
      })
      localStorage.removeItem('token')
      dispatch(logout())
      navigate('/login')
    } catch (error) {
      
    }
  }

  const Otvorish=()=>{
    const token=localStorage.getItem('token')
    if(token){
      navigate('/hujjat')
    }else{
      navigate('/login')
    }
  }
  const token=localStorage.getItem('token')

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
        <li className="nav-item"> 
          <NavLink className="nav-link active" aria-current="page" to={'/'}>
            Home
          </NavLink>
        </li>
         
        <li className="nav-item"> 
          <button className="nav-link active" aria-current="page" to={'/hujjat'} onClick={Otvorish}>
            Hujjat
          </button>
        </li>
        </ul>
        <div>
          <a
            className="btn btn-outline-secondary"
            href="mailto:vohidabdunazarov88@gmail.com"
          >
            Bog'lanish
          </a>
          {
            token? <div className="btn btn-group">
            <button className="btn btn-danger" onClick={Chiqish}>Chiqish</button>
            {/* <button className="btn btn-info">Profile Sozlamalari</button> */}
            </div>:null
          }
        </div>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar