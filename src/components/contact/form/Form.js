import FormCSS from './Form.module.css';
import React from 'react';


  // state for event input

const Form = () => {
  return ( 
    <form className={FormCSS.form}>
        <label for='name'>name:</label>
        <input
          id='name'
          type="text"
          required
        />
        <label for='email'>email:</label>
        <input
          id="email"
          type="email"
          required
        />
        <label for='msg'>message:</label>
        <textarea
          id='msg'
          required 
        />
        <button>Send</button>
    </form>
  );
}

export default Form;