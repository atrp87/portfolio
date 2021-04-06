import FormCSS from './Form.module.css';
import { FormspreeProvider } from '@formspree/react';
import React, { useState } from 'react';
import axios from 'axios'

const Form = () => {
  
const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    email: '',
    message: ''
  })
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }
  const handleOnSubmit = e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mvodoroe',
      data: inputs
    })
      .then(response => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.' // Insert CSS
        )
      })
      .catch(error => {
        handleServerResponse(false, error.response.data.error)
      })
  }

  return (
    <form className={FormCSS.form} onSubmit={handleOnSubmit}>
        <label htmlFor='name'>name:</label>
        <input
          onChange={handleOnChange}
          value={inputs.name}
          id='name'
          type="text"
          required
          name="name"
        />
        <label htmlFor='email'>email:</label>
        <input
          onChange={handleOnChange}
          value={inputs.email}
          id="email"
          type="email"
          required
          name="_replyto"
        />
        <label htmlFor='message'>message:</label>
        <textarea
          onChange={handleOnChange}
          value={inputs.message}
          id='message'
          required
          name="message"
        />
        <button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
    </form>
  );
}

export default Form;