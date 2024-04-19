import axios from 'axios'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { signUserFailure, signUserStart, signUserSuccess } from "../slice/auth"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {isLoading,isLoggedin}=useSelector(state=>state.auth)
  const submit=async(e)=>{
    e.preventDefault();

    const userdata={
      email,
      password,
    }
    dispatch(signUserStart())
    try {
      const {data}=await axios.post('https://shaxobiddin20.pythonanywhere.com/api/v1/user/login/',userdata)
      dispatch(signUserSuccess(data))
      // axios.defaults.headers.common['Authorization']=`Token ${data['token']}`
      console.log(data);
      navigate('/hujjat')
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }
  

  
  }

  // useEffect(() => {
  //   if(isLoggedin){
  //     navigate('/')
  //   }
  //   }, [isLoggedin])
    

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
    <button disabled={isLoading} className="btn btn-primary w-100 py-2 mt-2" type="submit">
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