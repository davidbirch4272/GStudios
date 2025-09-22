import React, { useRef} from "react"
import emailjs from "emailjs-com";
import NextImage from "next/image";

export default function ContactUsSubmitWork() {

const form = useRef();

const contact = (event) => {
 event.preventDefault();

 emailjs
   .sendForm(
       'service_q1whm4r',     //This must be dealt with.  You must figure out why this isn't working. 
       'template_lx9aayq',     
       form.current,
       'FQVdGdKf9tXQ6_M7X'     
  )
  .then(() => {
    alert("Message sent successfully!");
    form.current.reset();
  })  
  .catch (() => {
        alert(
     "The email service is temporarily unavailable.  Please contact me directly on thegstudios1@gmail.com"   
    );
    });
   };


  return (
    <>
      <div style={{ padding: "24px 32px 20px 16px" }}>
        <header style={{ textAlign: "center", padding: 0 }}>
          <NextImage
            src="/ContactSubmitWork1.png"
            alt="Mission"
            width={475}
            height={120}
            priority
            style={{
              width: "100%",
              maxWidth: "475px",
              height: "127px",
              objectFit: "cover",
              display: "block",
              margin: "0 auto",
            }}
          />
        </header>
      </div>

      <hr style={{ border: "1px solid #ccc", margin: "10px 0" }} />

      <main>
        <h1>Contact Us / Submit Work</h1>
        <p>
          The G Studios is always looking for new contributing artists. If you
          would like to propose an idea for a show or participate in upcoming
          events, please submit your name, phone number, and a short description
          of your work. NOTICE: For the time being, please send said information
          to gstudios1@gmail.com
        </p>
      
        <h1>Email us by filling the form out below</h1>
        <div className="form__shell">
          <form ref={form} onSubmit={contact} className="contact__form">
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input
                className="input"
                name="user_name"
                type="text"
                required
              ></input>
            </div>

            <div className="form__item">
              <label className="form__item--label">E-Mail</label>
              <input
                className="input"
                name="user_email"
                type="email"
                required
              ></input>
            </div>

            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea
                className="input"
                name="message"
                type="text"
                required
              ></textarea>
            </div>

            <button type="submit" id="contact__submit" className="form__submit">
              Send!
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
