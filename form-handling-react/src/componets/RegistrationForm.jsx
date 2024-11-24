import React from 'react';
import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            /> <br/>
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            /><br/>
            <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
            /><br/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;