import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'300px',backgroundColor:'indigo'}} className='d-flex justify-content-center align-items-center text-light'>
      <div className='text-center'>
        <h2>Contact Us</h2>
        <h5><MdAttachEmail /> rbuilder@gmail.com</h5>
        <h5><FaPhoneAlt /> 9046578345</h5>
        <h4>Connect with Us</h4>
        <div className='d-flex justify-content-center fs-4 mt-3'>
          <FaWhatsapp className='me-3'/>
          <FaFacebookF className='me-3'/>
          <FaInstagram />
        </div>
        <p className='mt-3'>Designed & Built with ❤️ using React</p>
      </div>
      
    </div>
  )
}

export default Footer