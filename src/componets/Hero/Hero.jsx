import React from 'react'
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import {motion} from 'framer-motion'
import Countup from 'react-countup';
const Hero = () => {
  return (
    <section className="hero-wraper">
        <div className="flexCenter paddings innerWidth hero-container">
        
           
           <div className="flexColStart hero-left">
               <div className="hero-title">
                   <div className="orange-cricle"/>
                   <motion.h1
                    initial={{y:"2rem", opacity:0}}
                    animate ={{y:0,opacity:1}}
                    transition={{duration:3,type:"spring"}}>
                    
                    Discover <br/>Most Suitable <br/>Property</motion.h1>
               </div>
               <div className="flexColStart hero-des">
                   <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
                   <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
               </div>
               <div className="flexCenter search">
                   <HiLocationMarker color="var(--blue)" size={25}/>
                   <input type="text" />
                   <button className="button">search</button>
               </div>
               <div className="flexCenter stats">
                <div className="flexColStart stat"> <span><Countup start={8800} end={9000} duration={4}/>+
                </span>
                
                <span className='secondaryText'>Prenuim products</span>
                </div>

                <div className="flexColStart stat"> <span><Countup start={1950} end={2000} duration={4}/>+
                </span>
                
                <span className='secondaryText'>Happy customers</span>
                </div>

                <div className="flexColStart stat"> <span><Countup start={28} end={35} />+
                </span>
                
                <span className='secondaryText'>Awards Winning</span>
                
                </div>
                </div>
           </div>


           <div className="flexCenter hero-right">
               <motion.div 
               initial={{x:"7rem",opacity:0}} 
               animate={{x:0,opacity:1}}
               transition={{
                duration:2,
                type:"spring"
               }     }         
               className="image-container">
                   <img src="./hero-image.png" alt="Hero iamge"/>
               </motion.div>
           </div>
       </div>
    
        
       





        
    </section>
  )
}

export default Hero