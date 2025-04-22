// client/pages/Signup.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  // State variables for form fields and errors
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [childName, setChildName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !username || !childName || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/users/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, childName, password }),
      });
   
      const data = await response.json().catch(() => ({}));
   
      if (response.ok) {
        // Save token and redirect to home
        localStorage.setItem('id_token', data.token);
        console.log('Signup successful', data);
        navigate('/');
      } else {
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('Server is unreachable. Please try again later.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Create Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formchildName" className="mb-3">
              <Form.Label>Child's Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="What is your child's name?"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Create your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          <div className="mt-3 text-center">
            <p>
              Already have an account? <Link to="/login">Login here.</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
