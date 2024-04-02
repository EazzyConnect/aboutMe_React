import React from "react";
import { useState } from "react";
import contactCSS from './css-files/Projects.module.css';


const Contact = () => {

 const [result, setResult] = useState("");

 const onSubmit = async (event) => {
  event.preventDefault();
  setResult("Sending....");
  const formData = new FormData(event.target);

  formData.append("access_key", "94d61ba6-4ad3-4110-8892-9388becf223d");

  const response = await fetch("https://api.web3forms.com/submit", {
   method: "POST",
   body: formData
  });

  const data = await response.json();

  if (data.success) {
   setResult("Message Sent Successfully");
   event.target.reset();
  } else {
   console.log("Error", data);
   setResult(data.message);
  }
 };

 return (
  <div>
   <h2>Send Message</h2>

   <form onSubmit={onSubmit}>
    <div>
     <label htmlFor="name">Full Name: </label>
     <input type="text" name="name" id="name" placeholder="Full Name" required />
    </div>

    <div>
     <label htmlFor="email">Email: </label>
     <input type="email" name="email" id="email" placeholder="Your Email" required />
    </div>

    <div>
     <label htmlFor="message">Message: </label>
     <textarea name="message" id="message" placeholder="Your Message" required></textarea>
    </div>

    <button type="submit">Send 📩</button>

   </form>

   <span>{result}</span>

   <div className={contactCSS.outro}>

    <div className={contactCSS.rightOutro}>
     <h5>Contact Me: </h5>
     <ul>
      <li className={contactCSS.bottomList}><a href="tel:+2348085202397"><i className="fa-solid fa-phone"></i>
       +2348085202397</a></li>
      <li className={contactCSS.bottomList}><a href="mailto:okon.isaiah.samuel@gmail.com"><i
       className="fa-solid fa-envelope"></i> okon.isaiah.samuel@gmail.com</a></li>
     </ul>

    </div>


    <div className={contactCSS.bottomOutro}>

     <h5>©️ 2024</h5>
     <h5>IsaiahOkon</h5>

    </div>

   </div>

  </div>
 );
}

export default Contact;