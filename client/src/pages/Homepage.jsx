import createPetPro from '../assets/createpetprobutton.png'
import Mypets from '../assets/mypets.png';
import error from '../pages/Error'
import { Link } from "react-router-dom";
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Auth from '../utils/auth';
import { DELETE_PET } from '../utils/mutation';

import { Button, Row, Col, Card } from 'react-bootstrap';
import '../assets/styles/Petcard.css'
// All buttons
import feedbutt from '../assets/feedingbutt.png';
import editbutt from '../assets/editbutt.png';
import deletebutt from '../assets/deletebutt.png';
// Pet Gender Notations
import maleSymbol from '../assets/malesymbol.png';
import femaleSymbol from '../assets/femalesymbol.png';
// All Pet Type Images
import PetImage from '../assets/petimage.png';
import PetImagebird from '../assets/petimagebird.png';
import PetImagehamster from '../assets/petimagehamster.png';
import PetImagedog from '../assets/petimagedog.png';
import PetImageturtle from '../assets/petimageturtle.png';


function PetCard(props) {
     const [deletePet, { error }] = useMutation(DELETE_PET);

     const handleDeletePet = async (petId) => {
          const token = Auth.loggedIn() ? Auth.getToken() : null;

          if (!token) {
               return false;
          }

          try {
               const {data} = await deletePet({variables: {_id: petId}});
               console.log(data);
               window.location.assign('/homepage');
          } catch (err) {
               console.error(err);
          }
     };

     return (
          <>
               <Card className="PetProCard" style={{ width: '35rem' }}>
                    <Card.Header className='pettitle'>{props.pet_name}</Card.Header>
                    <Card.Body>
                         <Row>
                              <Col>
                                   <a href="/mypets">
                                        <img src={props.pet_type === 'Cat' ? PetImage : props.pet_type === 'Dog' ? PetImagedog : props.pet_type === 'Bird' ? PetImagebird : props.pet_type === 'Hamster' ? PetImagehamster: PetImageturtle} className="cardimg" title={ "I'm a "+props.pet_type } />
                                   </a>
                              </Col>
                              <Col>
                                   <img src={props.pet_sex === 'Male' ? maleSymbol : femaleSymbol} className="cardimg" title={ "I'm a "+props.pet_sex} />
                              </Col>
                         </Row>
                         <br />
                    </Card.Body>
                    <Card.Footer>
                         <Row>
                              <Col>
                                   <Button className="feedbutton">
                                         <Link to={`/feedMe/${props.pet_id}`} >
                                             <img src={feedbutt} title="Feed Me" className="imgbutton" />
                                        </Link>
                                   </Button>
                              </Col>
                              <Col>
                                   <Button className="editbutton">
                                        <Link to={`/editPet/${props.pet_id}`} >
                                             <img src={editbutt} title="Edit Me" className="imgbutton" />
                                        </Link>
                                   </Button>
                              </Col>
                              <Col>
                                   <Button type='submit' className="deletebutton" onClick={() => handleDeletePet(props.pet_id)}>
                                             <img src={deletebutt} title="Delete Me" className="imgbutton" />
                                   </Button>
                              </Col>
                         </Row>
                    </Card.Footer>
               </Card >
               <br/>
          </>
     );
}


function Homepage() {
     const { loading, data } = useQuery(QUERY_USER);

     const petData = data?.user?.my_pets || [];
     console.log(96, data);

     if(loading) {
          return (
               <h2>Loading Pet Data..</h2>
          );
     }


    return (
        <>
            <Link to="/profile">
                <img src={createPetPro} className="createbutton" />
            </Link>
            <div></div>
              <img src={Mypets} className="mypetspic" />
              <div>
                   {petData.map((pet) => {
                        return <PetCard key={pet._id} pet_name={pet.pet_name} pet_sex={pet.pet_sex} pet_type={pet.pet_type} pet_id={ pet._id} />
                    })}
              </div>
              
        </>
    );
}

export default Homepage;