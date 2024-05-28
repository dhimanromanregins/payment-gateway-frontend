import React from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
const Dashboard = () => {
  const data = {
    totalTransactions: 1500,
    pendingTransactions: 50,
    settledTransactions: 1450,
    totalAmountTransferred: '1,000,000 USD',
    pendingAmount: '50,000 USD',
    transactions: [
      {
        dateTime: '2024-05-26 10:30 AM',
    
        hash: '0x123abc',
        from: 'Sender1',
        to: 'Receiver1',
        status: 'Pending'
      },
      {
        dateTime: '2024-05-26 11:45 AM',

        hash: '0x456def',
        from: 'Sender2',
        to: 'Receiver2',
        status: 'Settled'
      },
      // Add more transactions as needed
    ]
  };

  return (
    <>
      <Navbar />
      <div className="app-header-one">
        
  <div className="home-container">
  <Container >
          <Row>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Total Transactions</Card.Title>
                  <Card.Text>{data.totalTransactions}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Pending Transactions</Card.Title>
                  <Card.Text>{data.pendingTransactions}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Settled Transactions</Card.Title>
                  <Card.Text>{data.settledTransactions}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Total Amount Transferred</Card.Title>
                  <Card.Text>{data.totalAmountTransferred}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Pending Amount</Card.Title>
                  <Card.Text>{data.pendingAmount}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>Transaction Data</Card.Title>
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>Date & Time</th>
                   
                        <th>Hash</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.transactions.map((transaction, index) => (
                        <tr key={index}>
                          <td>{transaction.dateTime}</td>
                      
                          <td>{transaction.hash}</td>
                          <td>{transaction.from}</td>
                          <td>{transaction.to}</td>
                          <td>{transaction.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
 
  </div>
  <Footer/>
      </div>
   
    </>
  );
}

export default Dashboard;
