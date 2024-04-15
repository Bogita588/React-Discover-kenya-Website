import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { loginValidation } from '../../helper/validate';

import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    const navigate = useNavigate();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: async (values) => {
          let errors = {};
      
          // Call the loginValidation function to validate the form values
          const loginErrors = await loginValidation(values);
      
          
          errors = { ...errors, ...loginErrors };
      
          return errors;
      },
      validateOnBlur: false,
      validateOnChange: false,
      
        onSubmit: async (values) => {
            try {
                // Send form data to the back end using fetch
                const response = await fetch('http://localhost:3000/api/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: values.email, password: values.password }),
                });

                const data = await response.json();

                if (response.ok) {
                    toast.success('Login successful!');
                    navigate('/home');
                } else {
                    toast.error(data.error || 'Login failed. Please check your input.');
                }
            } catch (error) {
                toast.error('Login failed. Network issue.');
            }
        }
    });

    // Toggle password visibility
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="container">
            <Toaster position="top-center" />
            <div className="login-form">
                <div className="form-header">
                    <h4>Login</h4>
                    <span>Welcome back!</span>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    {/* Email input */}
                    <input
                        {...formik.getFieldProps('email')}
                        type="email"
                        placeholder="Email"
                        required
                    />
                    {formik.touched.email && formik.errors.email && (
                        <span className="error-message">{formik.errors.email}</span>
                    )}

                    {/* Password input */}
                    <div className="password-field">
                        <input
                            {...formik.getFieldProps('password')}
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Password"
                            required
                        />
                        <FontAwesomeIcon
                            icon={passwordVisible ? faEyeSlash : faEye}
                            onClick={togglePasswordVisibility}
                            className="password-icon"
                        />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <span className="error-message">{formik.errors.password}</span>
                    )}

                    {/* Submit button */}
                    <div className="login-button">
                        <button type="submit">Login</button>
                    </div>

                    {/* Forgot password link */}
                    <div className="forgot-password">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>
                </form>
                <div className="register-link">
                    <span>Don't have an account? <Link to="/register">Register</Link></span>
                </div>
            </div>
        </div>
    );
}
