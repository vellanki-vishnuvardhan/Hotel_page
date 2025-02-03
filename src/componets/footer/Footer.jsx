import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span className='secondaryText'>
                Our vision is to make all people
                the best place to live for them.
                </span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>
                Information    
                </span>
                <span className='secondaryText'>Hyderbad Telangana India 50072 </span>
                <div className="f-menu">
                    <span>  Property </span><span>  Serivces </span>  Product <span>  Aboutus </span>
                </div>
            </div>

        </div>



    </section>
  )
}

export default Footer
