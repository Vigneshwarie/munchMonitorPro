import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PetNameContainer() {
  return (
    <Container >
      <Row>
        <Col> <strong>Pet Name!</strong> **name here**</Col>
      </Row>
    </Container>
  );
}

export default PetNameContainer;