import React from 'react'
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:'400px',backgroundColor:'indigo'}} className='d-flex justify-content-center align-items-center text-light'>
      <div className='text-center'>
        <h3 className='mb-4'>Contact Us</h3>
        <h6><MdAttachEmail /> rbuilder@gmail.com</h6>
        <h6><FaPhoneAlt /> 9046578345</h6>
        <h5 className='mt-5'>Connect with Us</h5>
        <div className='d-flex justify-content-center fs-4 mt-3'>
          <FaWhatsapp className='me-3'/>
          <FaFacebookF className='me-3'/>
          <FaInstagram />
        </div>
        <p className='mt-3'><i>Designed & Built with ❤️ using React</i></p>
      </div>
      
    </div>
  )
}

export default Footer