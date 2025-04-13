import { Container, Row, Col, Card } from 'react-bootstrap';
import team1Img from '../assets/images/team1.jpg';
import team2Img from '../assets/images/team2.jpg';
import team3Img from '../assets/images/team3.jpg';

function Team() {
  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-5">Meet Our Team</h2>
        <Row>
          <Col md={4} className="animate__animated animate__fadeIn">
            <Card className="text-center service-card">
              <Card.Img variant="top" src={team1Img} loading="lazy" />
              <Card.Body>
                <Card.Title>Ahmed Khan</Card.Title>
                <Card.Text>Master Qasai with 20 years of experience.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animate__animated animate__fadeIn" style={{ animationDelay: '0.2s' }}>
            <Card className="text-center service-card">
              <Card.Img variant="top" src={team2Img} loading="lazy" />
              <Card.Body>
                <Card.Title>Fatima Ali</Card.Title>
                <Card.Text>Hygiene Specialist ensuring top standards.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="animate__animated animate__fadeIn" style={{ animationDelay: '0.4s' }}>
            <Card className="text-center service-card">
              <Card.Img variant="top" src={team3Img} loading="lazy" />
              <Card.Body>
                <Card.Title>Omar Shah</Card.Title>
                <Card.Text>Logistics Expert for timely deliveries.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Team;