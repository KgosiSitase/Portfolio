//Importing everything necessary
import React from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from 'react-bootstrap/Stack';
// Importing icons
import { BiSolidCrown } from "react-icons/bi";
import { IoIosCall, IoIosMail } from "react-icons/io";
import { AiFillLinkedin} from "react-icons/ai";

export function Contact() {
  return (
    <div >
      <div className='contact-section p-2  w-100'>
          <Stack direction='horizontal' gap={3}>
          {/* Footer Icon */}
          <div className='footer-icon'>
            <BiSolidCrown style={{fontSize: '4rem'}}/>
          </div>
          
          {/* Contact Info */}
          <div className='contact-info'>
            <Stack direction='horizontal' gap={3}>
              {/* Mobile Icon */}
              <div className='mobile px-4'>
                <IoIosCall style={{fontSize: '2rem'}} onClick={() => alert('Phone Number: 081 046 6734')}/>
                <p className='details'>081 046 6734</p>
              </div>
              {/* Email Icon */}
              <div className='email px-4'>
                <IoIosMail style={{fontSize: '2rem'}} onClick={() => alert('Email: Kgsitase7@gmail.com')}/>
                <p className='details'>Kgsitase7@gmail.com</p>
              </div> 
              {/* LinkedIn Icon */}
              <div className='linkedin px-4'>
                <AiFillLinkedin style={{fontSize: '2rem'}} onClick={() => alert('LinkedIn URL: www.linkedin.com/in/kgosi-sitase-18b925204')}/>
                <p className='details'>www.linkedin.com/in/kgosi-sitase-18b925204</p>
              </div>
            </Stack>
          </div>
          </Stack>
        </div>
      </div>
  );
}