import { Container, Row, Col, Card } from 'react-bootstrap';
import familyImg from '../assets/images/family.jpg';
import hygieneImg from '../assets/images/hygiene.jpg';

function About() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4 urdu">ہمارے بارے میں</h2>
        <Row>
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src={familyImg} />
              <Card.Body>
                <Card.Title>Our Family Legacy</Card.Title>
                <Card.Text>
                  For generations, our family has been dedicated to providing halal Qurbani services with utmost care and respect for tradition.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src={hygieneImg} />
              <Card.Body>
                <Card.Title>Our Hygiene Process</Card.Title>
                <Card.Text>
                  We follow strict hygiene protocols to ensure your meat is clean, safe, and professionally handled.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;