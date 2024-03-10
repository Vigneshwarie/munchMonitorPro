import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PetImage from '../assets/petimage.png'
// import { useMutation, useQuery } from '@apollo/client';
// import { QUERY_PET } from '../utils/queries';
// import { DELETE_PET } from '../utils/mutations';

function PetCard() {
//   const { loading, data } = useQuery(QUERY_PET);
//   let userData = data?.me || {}
//   const userDataLength = Object.keys(userData).length;
// }
// const [deletePet, { error }] = useMutation(DELETE_PET)

// const handleDeletePet = async (_id) => {
//   const token = Auth.loggedIn() ? Auth.getToken() : null;
//   if (!token) {
//     return false;
//   }
//   try {
//     const { data } = await deletePet({
//       variables: { _id }
//     });

//     // here we need to update current data.
//   } catch (error) {
//     console.log(error);

//   }
// }


return (
  <>
    <Card className="PetProCard" style={{ width: '18rem' }}>
      {/* <Card.Img variant="top" src={PetImage} /> */}
      <Card.Body>
        <Card.Title>This will be the Pet name</Card.Title>
        <Card.Img variant="top" src={PetImage} />
          {/* This will be Pet Image */}
        <Card.Text>
          This will be Pet sex symbol
        </Card.Text>

        <br />
        <Button
          type='submit'
          className="editbutton"
        // onClick={editbutton}
        >
          Edit Pet
        </Button>
        <Button
          type='submit'
          className="savebutton"
        // onClick={savebutton}
        >
          Save Pet
        </Button>
        <Button
          type='submit'
          className="deletebutton"
        // onClick={deletebutton}
        >
          Delete Pet
        </Button>

      </Card.Body>
    </Card>
  </>
);
}
export default PetCard;