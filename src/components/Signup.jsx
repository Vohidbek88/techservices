import axios from "axios"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
const Signup = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [seconname, setsecondName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmpassword, setConfirmpassword] = useState('')
//asosiy mana shu yerda sinovda lekin xtolik
  const submit = async (e) => {
    e.preventDefault();
   
const data={
  email:email,
    password:password,
    password2:confirmpassword,
    first_name:name,
    last_name:seconname,
}

    console.log(data);
  //   const res=await fetch("https://shaxobiddin20.pythonanywhere.com/api/v1/user/register", {
  //     method: "POST",
  //     mode: "no-cors",  // Change the mode to CORS  
  //     headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json"
  //     },
  //     body: JSON.stringify(data),
  // })
  const res=await axios.post("https://shaxobiddin20.pythonanywhere.com/api/v1/user/register",data)
console.log(res);
  
}




  return (
    <main className="form-signin w-mob m-auto">
      <form className="p-md-0 m-md-0 p-lg-4 m-lg-4" onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputIsm"
            placeholder="name@example.com"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="floatingInputIsm">Ism</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInputFamilya"
            placeholder="name@example.com"
            onChange={e => setsecondName(e.target.value)}
          />
          <label htmlFor="floatingInputFamilya">Familya</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">

          <input
            type="password"
            className="form-control"
            id="floatingPasswordConfirm"
            placeholder="Password Confirm"
            onChange={e => setConfirmpassword(e.target.value)}
          />
          <label htmlFor="floatingPasswordConfirm">Password Confirm</label>
        </div>
        <button className="btn btn-primary w-100 py-2 mt-2" type="submit">
          Sign in
        </button>
        <p className="mt-2">
          Ro'yhatdan O'tkanmisiz{" "}
          <NavLink to="/login" className="btn btn-link">
            Login
          </NavLink>
        </p>
      </form>
    </main>

  )
}

export default Signup