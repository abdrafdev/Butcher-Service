import { Container, Row, Col, Card } from 'react-bootstrap';
import cut1Img from '../assets/images/cut1.jpg';
import cut2Img from '../assets/images/cut2.jpg';
import packaging1Img from '../assets/images/packaging1.jpg';
import delivery1Img from '../assets/images/delivery1.jpg';
import qasai1Img from '../assets/images/qasai1.jpg';

function Gallery() {
  const images = [cut1Img, cut2Img, packaging1Img, delivery1Img, qasai1Img];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4 urdu">ہمارا کام</h2>
        <Row>
          {images.map((img, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="shadow-sm">
                <Card.Img variant="top" src={img} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Gallery;