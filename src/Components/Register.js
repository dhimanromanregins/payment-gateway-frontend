import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OtpVerification from './OtpVerification';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const requestOptions = {
      email: email,
      password: password,
      confirm_password:confirmPassword
    };

    try {
      const response = await axios.post('https://sspmitra.in/base/Webregister/', requestOptions);
      const data = response.data;
      console.log(data); // Assuming the API returns some data upon successful registration

      // For demo, just showing OTP verification modal
      setShowOtpModal(true);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Registration failed. Please try again.');
    }
  };

  const handleCloseOtpModal = () => {
    setShowOtpModal(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-wrap-login">
          <Container>
            <Row className="register-row">
              <Col md={6} className="d-flex align-items-center justify-content-center">
                {/* Your registration illustration or image */}
                <img src="/bitcoin.png" alt="Registration Illustration" className="login-image" />
              </Col>
              <Col md={6}>
                <h5 className="mb-5">Register an Account</h5>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="custom-input"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="custom-input"
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="custom-input"
                      required
                    />
                  </Form.Group>
                  <Button className="App-link" type="submit">
                    Register
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <OtpVerification show={showOtpModal} handleClose={handleCloseOtpModal} />
      <ToastContainer />
    </div>
  );
};

export default Register;
