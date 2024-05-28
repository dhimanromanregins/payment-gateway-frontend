import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your contact form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Message:', message);
    // You can add code here to send the contact form data to your server or external service
  };

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className="main-wrap">
          <Container>
          <h4>Contact Us</h4>
            <Row className="contact-row">
              <Col md={12} className="d-flex align-items-center justify-content-center mb-3">
                <img src="/contact.png" alt="Contact Illustration" className="contact-image" />
              </Col>
              <Col md={12}>
             
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicName">
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="custom-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="custom-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="custom-input"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicMessage">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="custom-input"
                    />
                  </Form.Group>
                  <Button className="App-link" type="submit">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
      <Footer/>
    </div>
  );
};

export default ContactUs;
