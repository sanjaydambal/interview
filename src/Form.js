import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const errors = {};

    // Name validation
    const nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(name)) {
      errors.name = 'Name must contain only letters';
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      errors.password =
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character';
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, you can proceed with submission
      alert('Form submitted successfully');
      // Here you can proceed with your submission logic
    } else {
      // Form is invalid, set the errors state to display error messages
      setErrors(errors);
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <div className="error">{errors.name}</div>}
      <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errors.password && <div className="error">{errors.password}</div>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
