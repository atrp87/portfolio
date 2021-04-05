import FormCSS from './Form.module.css';
import { FormspreeProvider } from '@formspree/react';
import React, { useState } from 'react';

const Form = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setValue({...value, name: event.target.value});
    console.log(value);
  }

  const handleEmailChange = (event) => {
    setValue({...value, email: event.target.value});
    console.log(value);
  }
  const handleMessageChange = (event) => {
    setValue({...value, message: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
            // action form spree action="https://formspree.io/f/{form_id}
    <form className={FormCSS.form} onSubmit={handleSubmit} action='' method=''>
        { submitted ? <div className={FormCSS.success}>
          Thanks for contacting me! I will be in touch shortly.</div> 
          : null
        }
        <label htmlFor='name'>name:</label>
        <input
          onChange={handleNameChange}
          value={value.name}
          id='name'
          type="text"
          required
          name="name"
        />
          {
          submitted && !value.name ? <span>Please enter your name</span> 
          : null
          }
        <label htmlFor='email'>email:</label>
        <input
          onChange={handleEmailChange}
          value={value.email}
          id="email"
          type="email"
          required
          name="email"
        />
        <span>Please enter your email</span>
        <label htmlFor='msg'>message:</label>
        <textarea
          onChange={handleMessageChange}
          value={value.message}
          id='msg'
          required
          name="message"
        />
        <span>Please enter your message</span>
        <button>Send</button>
    </form>
  );
}

export default Form;