import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PetImage from '../assets/petimage.png'
import { useQuery } from '@apollo/client';
import { QUERY_PET } from '../utils/queries';

function PetCard() {
  const { loading, data } = useQuery(QUERY_PET);

  return (
    <>
    <Card className="PetProCard" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={PetImage} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          This will be pet type
        </Card.Text>
        <Card.Text>
          This will be Pet sex
        </Card.Text>
        <Card.Text>
          This will be notes.
        </Card.Text>
        <br />
        <Button
          type='submit'
          className="editbutton"
          // onClick={editbutton}
        >
          Edit Button
        </Button>
        <Button
          type='submit'
          className="savebutton"
          // onClick={editbutton}
        >
          Save Pet
        </Button>
        <Button
          type='submit'
          className="deletebutton"
          // onClick={deletebutton}
        >
          Delete Button
        </Button>

      </Card.Body>
    </Card>
    </>
  );
}

export default PetCard;