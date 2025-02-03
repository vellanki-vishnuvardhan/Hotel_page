import React from 'react';
import './contant.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  return (
    <section className="c-wraper">
      <div className="paddings innerWidth flexCenter c-container">
        <div className="flexColStart c-left">
          <span className='orangeText'>Our Contact Us</span>
          <span className='primaryText'>Easy to contact us</span>
          <span className='secondaryText'>We always ready to help by providing the best services for you. We believe a good place to live can make your life better</span>

          <div className="flexColStart conmodes">
            {/* Call mode */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={20}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Call</span>
                    <span className='secondaryText'>+91 9232424443</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  callNow
                </div>
              </div>
            </div>

            {/* Chat mode */}
            <div className="flexColCenter mode" >
              <div className="flexStart">
                <div className="flexCenter icon">
                  <BsFillChatDotsFill size={20}/>
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>Chat</span>
                  <span className='secondaryText'>+91 9232424443</span>
                </div>
              </div>
              <div className="flexCenter button">
                ChatNow
              </div>
            </div>

            {/* Video Call mode */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={20}/>
                  </div>
                  <div className="flexColStart detail">
                    <span className='primaryText'>Video Call</span>
                    <span className='secondaryText'>+91 9232424443</span>
                  </div>
                </div>
                <div className="flexCenter button">
                  Video callNow
                </div>
              </div>
            </div>

            {/* Message mode */}
            <div className="flexColCenter mode">
              <div className="flexStart">
                <div className="flexCenter icon">
                  <HiChatBubbleBottomCenter size={20}/>
                </div>
                <div className="flexColStart detail">
                  <span className='primaryText'>Message</span>
                  <span className='secondaryText'>+91 9232424443</span>
                </div>
              </div>
              <div className="flexCenter button">
                Message Now
              </div>
            </div>

          </div>
        </div>

        <div className="c-right">
          <div className="image-container">
            <img src='./contact.jpg' alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
