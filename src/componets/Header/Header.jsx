import React from 'react'
import './Header.css';
const Header = () => {
  return (
  
<section className="h-wrapper">

    <div className="flexCenter paddings innerWidth h-container">

       <img src="./logo.png" alt="logo" width={100} />
    
    <div className="flexCenter h-menu">
   
      <a href=""> Resdenices</a> 
      <a href="">our value </a>
      <a href="">contact us</a>
      <a href="">Get started</a>
      <button className="button">
      <a href="">Contact </a>
      </button>
      

   
      

    </div>
    </div>
</section>
  )
}

export default Header
