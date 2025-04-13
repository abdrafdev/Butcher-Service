// client/src/pages/Booking.js
import React, { useState } from 'react';
import { Container, Form, Button, ProgressBar } from 'react-bootstrap';

function Booking() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking Submitted!');
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Book Your Qurbani</h2>
      <ProgressBar now={(step / 3) * 100} className="mb-4" />
      <Form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="fade-in">
            <h4>Step 1: Personal Info</h4>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone" required />
            </Form.Group>
            <Button variant="primary" onClick={nextStep}>Next</Button>
          </div>
        )}
        {step === 2 && (
          <div className="fade-in">
            <h4>Step 2: Booking Details</h4>
            <Form.Group className="mb-3">
              <Form.Label>Animal Type</Form.Label>
              <Form.Select required>
                <option value="">Select an option</option>
                <option>Goat</option>
                <option>Cow (Full)</option>
                <option>Cow (Share)</option>
                <option>Camel</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Delivery Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
            <Button variant="primary" onClick={nextStep}>Next</Button>
          </div>
        )}
        {step === 3 && (
          <div className="fade-in">
            <h4>Step 3: Payment</h4>
            <Form.Group className="mb-3">
              <Form.Label>Payment Method</Form.Label>
              <Form.Select required>
                <option value="">Select an option</option>
                <option>Cash on Delivery</option>
                <option>Easypaisa</option>
                <option>Partial Advance</option>
              </Form.Select>
            </Form.Group>
            <Button variant="secondary" onClick={prevStep} className="me-2">Back</Button>
            <Button variant="success" type="submit">Submit Booking</Button>
          </div>
        )}
      </Form>
    </Container>
  );
}

export default Booking;