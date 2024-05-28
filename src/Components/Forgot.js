import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import OtpVerification from './OtpVerification';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const [showOtpModal, setShowOtpModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your password recovery logic here
    console.log('Recovery email sent to:', email);
    // You can add code here to send a recovery email to the provided email address

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
          <Container className="mt-5">
            <Row className="forgot-row">
              <Col md={6} className="d-flex align-items-center justify-content-center">
                {/* Your forgot password illustration or image */}
                <img src="/bitcoin.png" alt="Forgot Password Illustration" className="login-image" />
              </Col>
              <Col md={6}>
                <h5 className="mb-5">Forgot Password</h5>
                <p className="forgot-text">Please enter your email address to <span className="highlight">recover your password.</span></p>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="custom-input"
                    />
                  </Form.Group>
                  <Button className="App-link" type="submit">
                    Recover Password
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <OtpVerification show={showOtpModal} handleClose={handleCloseOtpModal} />
    </div>
  );
};

export default Forgot;
