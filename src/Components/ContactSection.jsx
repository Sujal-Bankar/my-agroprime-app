import React from 'react';
import '../Css/ContactSection.css';
import Navbar from './Navbar';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import farmer from './farmer.jpeg';
import crop from './crop.jpeg'; 
import Swal from 'sweetalert2';

const ContactSection = () => {

  const onsubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7c7260ca-6042-4439-a964-0ceeab8de8be");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });

        event.target.reset();
        
    }
  };

  return (
    <>
      <Navbar/>
      <div className='contact-section'>
        <div className='address'>
          <FaMapMarkerAlt className="icon" />
          <h2>Address</h2>
          <div className='address-details'>
            <p style={{ fontSize: '20px' }}>
               <br /> Office No.12, Third Floor Barve Memorial Complex Jangali Maharaj Road,Opposite Panchali Hotel, Shivaji Nagar, Pune 411005</p>
          </div>
        </div>
        <div className='call-now'>
          <FaPhoneAlt className="icon" />
          <h2>Call Now</h2>
          <div className='call-details'>
            <p style={{ fontSize: '20px' }}> 
              <br /> <br /> +91 9432127832 <br />
                +91 8765453627
            </p>
          </div>
          
        </div>
        <div className='email-us'>
          <FaEnvelope className="icon" />
          <h2>Email Us</h2>
          <div className='email-details'> 
             <p style={{ fontSize: '20px' }}> 
              <br /> <br /> agroprime2k25@gmail.com
            </p>

          </div>
          
        </div>

        <div className='message-section-container'>
            <div className='leftside'>

              <img src={farmer}alt="" className='farmerimg' />

            </div>
            
            <div className='rightside'>

                <img src={crop} alt="" className='cropimg' />

            </div>
        </div>

        <div className='message-section'>

          <div className='header'>
            <p><i>Have Question?</i></p>
            <h1>Send us a message</h1>

            <form onSubmit={onsubmit}>

              <input type="text" id="name" name="name" placeholder="Name" required /><br /><br />

             <div class="form-row">
                <div class="form-group">
                  <input type="email" id="email" name="email" placeholder="Email*" required />
                </div>
                <div class="form-group">
                 <input type="tel" id="phone" name="phone" placeholder="Phone" pattern="[0-9]{10}" maxlength="10" title="Please enter a valid 10-digit phone number" required />
                </div>
              </div>

              <textarea id="message" name="message" placeholder="Tell Us About Project*" rows="4"  required></textarea><br /><br />

              <button type="submit" className='submit-button'> <b>Get In Touch</b></button>

            </form>
          </div>

         

        </div>












    </div>


    <footer class="footer">
        <p> 2025 AgroPrime</p>
        {/* <div class="social-links">
            <a href="">Facebook</a> |
            <a href="">Instagram</a> |
            <a href="">Youtube</a>
        </div> */}
    </footer>
      

    </>
  );
};

export default ContactSection;