import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PetImage from  '../assets/petimage.png'

function PetCard() {
  return (
    <Card className="PetProCard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={PetImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default PetCard;