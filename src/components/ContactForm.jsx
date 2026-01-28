import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Le nom est requis';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email invalide';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Le message est requis';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            // TODO: Implement actual form submission (EmailJS, Formspree, or custom API)
            console.log('Form submitted:', formData);
            setSubmitStatus('success');

            // Reset form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

            // Clear success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus('');
            }, 5000);
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
                <label htmlFor="name" className="form-label">
                    Nom complet
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`form-input ${errors.name ? 'form-input-error' : ''}`}
                    placeholder="Votre nom"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input ${errors.email ? 'form-input-error' : ''}`}
                    placeholder="votre@email.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-input form-textarea ${errors.message ? 'form-input-error' : ''}`}
                    placeholder="Votre message..."
                    rows="5"
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            {submitStatus === 'success' && (
                <div className="form-success">
                    Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
            )}

            <button type="submit" className="btn btn-primary btn-submit">
                Envoyer le message
            </button>
        </form>
    );
};

export default ContactForm;
