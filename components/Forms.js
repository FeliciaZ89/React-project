import React, { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup' 


const Formular = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const emailRegex=new RegExp (/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})+$/);
    
    const form = useFormik({
        initialValues: {
             name: '',
             email: '',
             message: ''
        },

        validationSchema: Yup.object ({
            name: Yup.string()
                .required("Name required")
                .min(2, "Names must be at least 2 characters long"),

            email: Yup.string()
                .required("E-mail required")
                .matches(emailRegex, "Invalid email address"),

            message: Yup.string()
                .required("Write your message")
                .min(10, "The message must be at least 10 characters long")
        }),

        onSubmit: (values) => {
            fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
            .then(response => {
                if (response.ok) {
                    setSuccessMessage('The form was sent');
                    form.resetForm();
                } else {
                    setErrorMessage('Error sending the form');
                }
            })
            .catch(error => {
                setErrorMessage('Error sending the form');
            });
        }
    })

    return (
        <section className="form">
            <div className="container">
                <div className="section-title">
                    <h3>Leave us a message for any information.</h3>
                </div>
                <div className="form-box">
                    {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                    {successMessage && <p className="successMessage">{successMessage}</p>}
                    <form onSubmit={form.handleSubmit} noValidate>
                    <div className="form-box">
                            <label className={form.errors.name && form.touched.name ? 'error' : ''}>
                                {form.errors.name ? form.errors.name : ""}
                            </label>
                            <input type="text" placeholder="Name*" name="name" value={form.values.name} onChange={form.handleChange}  />
                        </div>
                            <div className="form-box">
                            <label className={form.errors.email && form.touched.email ? 'error' : ''}>
                                {form.errors.email ? form.errors.email : ""}
                            </label>
                            <input type="email" placeholder="Email*" name="email" value={form.values.email} onChange={form.handleChange} />
                        </div>
                        <div className="last-form">
                            <label className={form.errors.message && form.touched.message ? 'error' : ''}>
                                {form.errors.message ? form.errors.message : ""}
                            </label>
                            <input type="text" placeholder="Your message*" name="message" value={form.values.message} onChange={form.handleChange} />
                            </div>
                        <div className="center-button">
                        <button className="yellow-button" type="submit">Send message<i class="fa-regular fa-arrow-up-right"></i></button>
                       
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Formular
