import FormCSS from './Form.module.css';
import React, { useState } from 'react';
import axios from 'axios';
//https://formspree.io/

const Form = () => {
	const [ status, setStatus ] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null }
	});

	const [ inputs, setInputs ] = useState({
		email: '',
		message: ''
	});

	const handleServerResponse = (ok, msg) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg }
			});
			setInputs({
				email: '',
				message: ''
			});
		} else {
			setStatus({
				info: { error: true, msg: msg }
			});
		}
	};

	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null }
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		axios({
			method: 'POST',
			url: 'https://formspree.io/f/mvodoroe',
			data: inputs
		})
			.then((response) => {
				handleServerResponse(
					true,
					'Thank you, your message has been sent.'
				);
			})
			.catch((error) => {
				handleServerResponse(false, error.response.data.error);
			});
	};

	return (
		<section className={FormCSS.formContainer}>
			<form
				onSubmit={handleOnSubmit}
				className={FormCSS.form}>
				<div className={FormCSS.formGroup}>
					<label className={FormCSS.formLabel} htmlFor='name'>Your Name</label>
					<input 
						onChange={handleOnChange} 
						value={inputs.name} 
						className={FormCSS.formInput} 
						id='name' 
						type='text' 
						name='name' 
						placeholder='Name...' 
						required 
					/>
				</div>
				<div className={FormCSS.formGroup}>
					<label className={FormCSS.formLabel} htmlFor='email'>Your Email</label>
					<input 
						onChange={handleOnChange} 
						value={inputs.email} 
						className={FormCSS.formInput} 
						id='email' 
						type='email' 
						name='_replyto' 
						placeholder='Email...' 
						required 
					/>
				</div>
				<div className={FormCSS.formGroup}>
					<label className={FormCSS.formLabel} htmlFor='message'>Your Message</label>
					<textarea 
						onChange={handleOnChange} 
						value={inputs.message} 
						className={FormCSS.formInput} 
						id='message' 
						name='text' 
						rows='5' 
						placeholder='Message...' 
						required
						>
					</textarea>
				</div>
				<div className={FormCSS.formGroup}>
					<button type='submit' disabled={status.submitting}>
					{!status.submitting ? !status.submitted ? 
					'Submit' : 
					'Submitted' : 
					'Submitting...'}
					</button>
				</div>
			</form>
		</section>

	);
};

export default Form;
