import React from "react";
import { useState } from "react";
import contactCSS from "./css-files/Contact.module.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "94d61ba6-4ad3-4110-8892-9388becf223d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully ✅");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id={contactCSS.contact}>
      <div id={contactCSS.messageBox}>
        <h2 id={contactCSS.sendMessage}>Send Message</h2>

        <div id={contactCSS.contactForm}>
          <form onSubmit={onSubmit}>
            <div className={contactCSS.formLabelInput}>
              <label htmlFor="name">Full Name </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
              />
            </div>

            <div className={contactCSS.formLabelInput}>
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            <div className={contactCSS.formLabelInput}>
              <label htmlFor="message">Message </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <div id={contactCSS.btnAndResult}>
              <button type="submit">Send 📩</button>
              <span>{result}</span>
            </div>
          </form>
        </div>
      </div>

      <div id={contactCSS.outro}>
        <div className={contactCSS.leftOutro}>
          <ul>
            <a
              href="http://linkedin.com/in/isaiah-okon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://twitter.com/Izaya4real"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              href="https://github.com/EazzyConnect"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <li className={contactCSS.bottomList}>
              <a href="tel:+2348085202397">
                <i className="fa-solid fa-phone"></i> +2348085202397
              </a>
            </li>

            <li className={contactCSS.bottomList}>
              <a href="mailto:okon.isaiah.samuel@gmail.com">
                <i className="fa-solid fa-envelope"></i>{" "}
                okon.isaiah.samuel@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className={contactCSS.rightOutro}>
          <p className={contactCSS.rightOutroText}>© 2024</p>
          <p className={contactCSS.rightOutroText}>IsaiahOkon</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
