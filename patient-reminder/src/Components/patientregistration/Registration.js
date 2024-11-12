

import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    district: '',
    diseaseType: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ( {
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Registration submitted successfully!');
  };

  return (
    <div className="form-container">
          <h2 className="form-title">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Sex:</label>
          <select
            name="sex"
            value={formData.sex}
            onChange={handleChange}
            className="select"
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label">District:</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Disease Type:</label>
          <input
            type="text"
            name="diseaseType"
            value={formData.diseaseType}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div className="form-group">
          <label className="label">Phone Number:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <button type="submit" className="button">
          Register
        </button>
        
        <button type="submit" className="button">view</button>

      </form>
    </div>
  );
};


export default Registration;
