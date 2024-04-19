import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
const [name,setName]=useState('')
  useEffect(() => {
  const getUserdata=async()=>{
    const {data}=await axios.get('')
    setName(data.name)

  }
  }, [])
  

  return (
    <div className="container-fluid d-md-flex justify-content-around align-items-center">
  <div className="pt-3">
    <h1 className="display-5 fw-bold text-body-emphasis text-center">
      OTM O'qituvchilarga
    </h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead text-center">
        Oliy Tal'im muassasalari o'qituvchilariga Online Xizmat ko'rsatish
        platformasi
      </p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <NavLink to="/signup" className="btn btn-primary btn-lg px-4">
          Sign Up
        </NavLink>
        <NavLink to={'/login'} className="btn btn-link btn-lg px-4 gap-3">
          Login
        </NavLink>
      </div>
    </div>
  </div>
  <div className="m-auto text-center">
    <img className="main-img"
      src="https://cdn-icons-png.freepik.com/512/1478/1478923.png"
      alt="Services"
    />
  </div>
</div>

  )
}

export default Home