import React, { useRef } from "react";
import emailjs from "emailjs-com";
import NextImage from "next/image";

export default function ContactUsSubmitWork() {
  const form = useRef();

  const contact = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_q1whm4r",
        "template_lx9aayq",
        form.current,
        "FQVdGdKf9tXQ6_M7X"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert(
          "The email service is temporarily unavailable.  Please contact me directly on thegstudios1@gmail.com"
        );
      });
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          width: "120%",
          maxWidth: "500px",
          aspectRatio: "20 / 11",
          margin: "0 auto",
        }}
      >
        <NextImage
          src="/ContactSubmitWork1.png"
          alt="Mission"
          priority
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      <hr style={{ border: "1px solid #ccc", margin: "2px 0" }} />

      <main>
        <h1>Contact Us / Submit Work</h1>
        <p>
          The G Studios is always looking for new contributing artists. If you
          would like to propose an idea for a show or participate in upcoming
          events, please submit your name, phone number, and a short description
          of your work. If you need help from Entes or Entes Restoring and
          Improvement or anything else please feel free to send a message.
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
