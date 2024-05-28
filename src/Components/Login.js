import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OtpVerification from './OtpVerification';

const Login = () => {
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleLogin = () => {
    // Perform login logic here
    // For demo, just showing OTP verification modal
    setShowOtpModal(true);
  };

  const handleCloseOtpModal = () => {
    setShowOtpModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-wrap-login">
          <Container>
            <Row className="login-row">
              <Col md={6} className="d-flex align-items-center justify-content-center">
                <img src="/bitcoin.png" alt="Login Illustration" className="login-image" />
              </Col>
              <Col md={6}>
                <h5 className="mb-5">Login to your Account</h5>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button onClick={handleLogin} className="App-link" type="button">
                    Login
                  </Button>
                  <p className="mt-3">Don't have an account? <Link to="/register">Register</Link></p>
                  <Link to="/forgot"><p>Forgot password?</p></Link>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    
    </div>
  );
};

export default Login;
