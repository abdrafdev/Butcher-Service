import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4 urdu">رابطہ کریں</h2>
        <Row>
          <Col md={6}>
            <h5>Contact Details</h5>
            <p><strong>Phone:</strong> +92 300 1234567</p>
            <p><strong>WhatsApp:</strong> +92 300 1234567</p>
            <p><strong>Address:</strong> 123 Main Road, Lahore, Pakistan</p>
          </Col>
          <Col md={6}>
            <h5>Our Location</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.123456789!2d74.312345!3d31.549876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDUyJzU5LjUiTiA3NMKwMTgnNDQuNSJF!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;