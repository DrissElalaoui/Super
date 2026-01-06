import React, { useEffect, useState } from 'react'
import axios from 'axios'
import logo from '../img/logo.png'
import { FaSignInAlt } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { useLocation, NavLink} from 'react-router-dom'
function Header() {
  const [category, setCategory] = useState([])
  const listLink = [
    {name: 'Home', to:'/'},
    {name: 'About', to:';;;;'},
    {name: 'Accessoires', to:'accessoires'},
    {name: 'Blog', to:'blog'},
    {name: 'Contact', to:'contact'},
  ]
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
  .then(function (response) {
    setCategory(response.data)
  })
  .catch(function (error) {
    console.log(error);
  })
  },[])
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img style={{width: '200px', height: '50px'}} src={logo} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
        <BsCart3 />
         <FaRegHeart /> 
      </form>
    </div>
  </div>
</nav>
            {/* ============================================ */}
    <nav class="navbar  bg-primary ">
       <div style={{width: '1200px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%'}} >
         {/* <h4>NavBar</h4> */}
         {/* =============================================== */}
         <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
              Browse Category
            </a>
            <ul style={{overflow: 'auto', maxHeight: "200px"}} class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {
              category.map(e => {
                return <a class="dropdown-item" href="#">{e.name}</a>
              })
              }
            </ul>
        </div>
         {/* =============================================== */}
        <div className='linkNav'>
          {listLink.map(( e => {
            return   <NavLink style={{height: '100%'}} to={e.to} className={({ isActive }) => (isActive ? "active" : "")} >{e.name}</NavLink>
          
          }))}
          {/* cree un array et ajouter line et to et utiliser map hhhhhhhhhhh location.pathName === e.to ? 'active' : ' */}
        </div>
        <div>
          <FaSignInAlt  style={{fontSize: '20px', marginRight: '10px', cursor: 'pointer'}} />
          <HiOutlineUserAdd style={{fontSize: '22px', cursor: 'pointer'}} />
        </div>
       </div>
    </nav>
            {/* ============================================ */}
    </div>
  )
}

export default Header