import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../../helper/validate';
import './Signup.css';

export default function Register() {
    const [file, setFile] = useState(null);
    const [errorFlags, setErrorFlags] = useState({}); // State variable to track error notifications

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
        validate: async (values) => {
            let errors = {};
            let newErrorFlags = {};

            // Validate form fields
            const registerErrors = await registerValidation(values);
            errors = { ...errors, ...registerErrors };

            

            // List of fields to check for errors
            const fieldsToCheck = [
                'fullName',
                'email',
                'password',
                'username',
                'fieldOfStudy',
                'educationLevel',
                'linkedInProfile',
                'location',
                'preferredJobType'
            ];

            // Check each field for errors and show a toast notification if needed
            fieldsToCheck.forEach((field) => {
                if (errors[field] && !errorFlags[field]) {
                    toast.error(errors[field]);
                    newErrorFlags[field] = true;
                }
            });

            // Update errorFlags state
            setErrorFlags((prevFlags) => ({ ...prevFlags, ...newErrorFlags }));
            return errors;
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            if (file) {
                values.resumeCV = file;
            }

            // Instead of calling an API, log the form values to the console
            console.log('Form submitted with values:', values);

            // Display a toast notification to indicate that the form has been submitted
            toast.success('Form submitted successfully!');
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
                            <input
                                {...formik.getFieldProps('fullName')}
                                type="text"
                                placeholder="Full Name*"
                                required
                            />
                            {formik.touched.fullName && formik.errors.fullName && (
                                <span className="error-message">{formik.errors.fullName}</span>
                            )}

                            <input
                                {...formik.getFieldProps('email')}
                                type="email"
                                placeholder="Email*"
                                required
                            />
                            {formik.touched.email && formik.errors.email && (
                                <span className="error-message">{formik.errors.email}</span>
                            )}

                            <input
                                {...formik.getFieldProps('password')}
                                type="password"
                                placeholder="Password*"
                                required
                            />
                            {formik.touched.password && formik.errors.password && (
                                <span className="error-message">{formik.errors.password}</span>
                            )}

                            <input
                                {...formik.getFieldProps('fieldOfStudy')}
                                type="text"
                                placeholder="Field of Study"
                            />
                            {formik.touched.fieldOfStudy && formik.errors.fieldOfStudy && (
                                <span className="error-message">{formik.errors.fieldOfStudy}</span>
                            )}

                            <div className="file-upload">
                                <label htmlFor="resumeCV">Resume/CV</label>
                                <input
                                    type="file"
                                    id="resumeCV"
                                    name="resumeCV"
                                    onChange={handleFileUpload}
                                />
                                {formik.touched.resumeCV && formik.errors.resumeCV && (
                                    <span className="error-message">{formik.errors.resumeCV}</span>
                                )}
                            </div>
                        </div>

                        {/* Right column */}
                        <div className="column">
                            <input
                                {...formik.getFieldProps('username')}
                                type="text"
                                placeholder="Username*"
                                required
                            />
                            {formik.touched.username && formik.errors.username && (
                                <span className="error-message">{formik.errors.username}</span>
                            )}

                            <input
                                {...formik.getFieldProps('educationLevel')}
                                type="text"
                                placeholder="Education Level"
                            />
                            {formik.touched.educationLevel && formik.errors.educationLevel && (
                                <span className="error-message">{formik.errors.educationLevel}</span>
                            )}

                            <input
                                {...formik.getFieldProps('linkedInProfile')}
                                type="url"
                                placeholder="LinkedIn Profile"
                            />
                            {formik.touched.linkedInProfile && formik.errors.linkedInProfile && (
                                <span className="error-message">{formik.errors.linkedInProfile}</span>
                            )}

                            <input
                                {...formik.getFieldProps('location')}
                                type="text"
                                placeholder="Location"
                            />
                            {formik.touched.location && formik.errors.location && (
                                <span className="error-message">{formik.errors.location}</span>
                            )}

                            <input
                                {...formik.getFieldProps('preferredJobType')}
                                type="text"
                                placeholder="Preferred Job Type"
                            />
                            {formik.touched.preferredJobType && formik.errors.preferredJobType && (
                                <span className="error-message">{formik.errors.preferredJobType}</span>
                            )}
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
