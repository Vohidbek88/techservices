import axios from "axios"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()
  const submit=async(e)=>{
    e.preventDefault();
  const {data}=await axios.post('https://shaxobiddin20.pythonanywhere.com/api/v1/user/login',{
    email,
    password,
  },{withCredentials:false})
  
  axios.defaults.headers.common['Authorization']=`Token ${data['token']}`
  navigate('/hujjat')
  
  }

  return (
    <main className="form-signin w-mob m-auto">
  <form className="p-md-0 m-md-0 p-lg-4 m-lg-4" onSubmit={submit}>
    <h1 className="h3 mb-3 fw-normal">Please Login</h1>
    <div className="form-floating">
      <input
        type="email"
        className="form-control"
        id="floatingInput"
        placeholder="name@example.com"
        onChange={e=>setEmail(e.target.value)}
      />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">

        <input
          type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={e=>setPassword(e.target.value)}
        />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
      Login
    </button>
    <p className="mt-2">
      Ro'yhatdan O'tmagamisiz{" "}
      <NavLink to="/signup" className="btn btn-link">
        Sign Up
      </NavLink>
    </p>
  </form>
</main>

  )
}

export default Login