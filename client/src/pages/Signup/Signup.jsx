import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../../helper/validate';

import './Signup.css';

export default function Register() {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            password: '',
            username: '',
            fieldOfStudy: '',
            educationLevel: '',
            skills: [],
            resumeCV: '',
            linkedInProfile: '',
            location: '',
            preferredJobType: ''
        },
        validate: registerValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            if (file) {
                values.resumeCV = file;
            }

            const registerPromise = registerUser(values);
            toast.promise(registerPromise, {
                loading: 'Registering...',
                success: 'Registered successfully!',
                error: 'Could not register.'
            });

            registerPromise.then(() => {
                navigate('/');
            });
        }
    });

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFile(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="register-form">
                <div className="form-header">
                    <h4>Register</h4>
                    <span>Join us!</span>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-fields">
                        {/* Left column */}
                        <div className="column">
                            <input {...formik.getFieldProps('fullName')} type="text" placeholder="Full Name*" required />
                            <input {...formik.getFieldProps('email')} type="email" placeholder="Email*" required />
                            <input {...formik.getFieldProps('password')} type="password" placeholder="Password*" required />
                            <input {...formik.getFieldProps('fieldOfStudy')} type="text" placeholder="Field of Study" />
                            {/* Include choose file in left column */}
                            <div className="file-upload">
                                <label htmlFor="resumeCV">Resume/CV</label>
                                <input type="file" id="resumeCV" name="resumeCV" onChange={handleFileUpload} />
                            </div>
                        </div>
                        {/* Right column */}
                        <div className="column">
                            <input {...formik.getFieldProps('username')} type="text" placeholder="Username*" required />
                            <input {...formik.getFieldProps('educationLevel')} type="text" placeholder="Education Level" />
                            <input {...formik.getFieldProps('linkedInProfile')} type="url" placeholder="LinkedIn Profile" />
                            <input {...formik.getFieldProps('location')} type="text" placeholder="Location" />
                            <input {...formik.getFieldProps('preferredJobType')} type="text" placeholder="Preferred Job Type" />
                        </div>
                    </div>
                    <div className="register-button">
                        <button type="submit">Register</button>
                    </div>
                    <div className="login-link">
                        <span>Already registered? <Link to="/login">Login</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
}
