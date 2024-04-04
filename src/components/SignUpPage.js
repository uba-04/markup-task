import React, { useState } from 'react';
import Breadcrumb from './Breadcrumb';

const SignUpPage = () => {
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({});
  
  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  if (role === '') {
    return (
      <div>
        <button onClick={() => setRole('student')}>Register as Student</button>
        <button onClick={() => setRole('trainer')}>Register as Trainer</button>
        <Breadcrumb path="/signup" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} required />
      <Breadcrumb path="/signup" />
      
      {role === 'student' && (
        <>
          <input type="date" name="dob" placeholder="Date of Birth" onChange={handleChange} />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} />
        </>
      )}

      { role === 'trainer' && (
          <input type="text" name="specialization" placeholder="Specialization" onChange={handleChange} required />
      )}
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUpPage;