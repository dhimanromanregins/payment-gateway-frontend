import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

const OtpVerification = ({ show, handleClose }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your OTP verification logic here
    console.log('OTP entered:', otp);
    // You can add code here to verify the OTP
    handleClose(); // Close the modal after OTP verification
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: '#c7b528' }}>OTP Verification</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p style={{ color: 'green' }}>We are sending OTP to your email</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicOtp">
            <Form.Label>Enter OTP:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </Form.Group>
          <Button className='App-link ' type="submit">
            Verify OTP
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default OtpVerification;
