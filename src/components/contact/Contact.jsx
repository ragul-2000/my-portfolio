import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  const formRef = useRef()
  const [done,setDone] = useState(false);
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;


  const handleSubmit = (e) =>{
       e.preventDefault();
       emailjs.sendForm('service_0pa5h5k', 'template_rqlnr9p', formRef.current, 'DqToTsCK3Y-mfJEyU')
      .then((result) => {
          setDone(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }
  return (

    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">
                Let's discuss your project
                </h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +91 8248971275
                    </div>
                    <div className="c-info-item">
                       <img className="c-icon" src={Email} alt="" />
                       ragulmyd2000@gmail.com
                       </div>
                    <div className="c-info-item">
                       <img className="c-icon" src={Address} alt="" />
                        Mayiladuthurai, TamilNadu, India.
                </div>
                </div>
               
            </div>
            <div className="c-right">
            <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref = {formRef} onSubmit={handleSubmit}>
            <input style = {{backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name"/>
            <input style = {{backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject"/>
            <input style = {{backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email"/>
            <textarea style = {{backgroundColor: darkMode && "#333"}} id="" cols="30" rows="5" placeholder="Message" name="message"/>
            <button>Submit</button>
           <div style = {{color: darkMode && "red" }} className="submitted">{done && "Your Response Was Submitted..."}</div>
          </form>
          <div className="footer">
                <hr className="hr"/>
                <div className="social">
                <a href="https://www.linkedin.com/in/ragul-r-writer/">
               <LinkedInIcon className="social-icon" />
                </a>
                <a href="https://github.com/ragul-2000">
               <GitHubIcon className="social-icon" /></a>
               <a href="https://www.instagram.com/ragul_1275?igsh=b2h6NW9kdnB4NG41">
                 <InstagramIcon className="social-icon" /></a>
               <a href="https://www.facebook.com/ragul.ragulramesh?mibextid=rS40aB7S9Ucbxw6v">
               <FacebookIcon className="social-icon" /></a>
               <a href="https://wa.me/qr/Q2RFWBH3F3SIP1">
               <WhatsAppIcon className="social-icon"/></a>
              <TwitterIcon className="social-icon" />
              </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default Contact