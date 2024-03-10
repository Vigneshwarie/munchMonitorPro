import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GreetingContainer() {
  return (
    <Container className="greetingcont" >
      <Row>
        <Col> <strong>Greetings!</strong> **name here**</Col>
      </Row>
    </Container>
  );
}

export default GreetingContainer;