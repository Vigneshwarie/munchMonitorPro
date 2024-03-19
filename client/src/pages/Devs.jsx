import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import devtitle from '../assets/devtitle.png'
import devRICK from '../assets/devRICK.png'
import devVIGGY from '../assets/devVIGGY.png'
import devFRANK from '../assets/devFRANK.png'
import devTASNEEM from '../assets/devTASNEEM.png'

import '../assets/styles/Devs.css';

export default function Devs() {
    return (
        <>

            <img src={devtitle} />

            <Row>
                <Col>
                    <Card className='devCard'>
                        <Card.Img variant="top" src={devRICK} />
                        <Card.Body>
                            <Card.Title><strong>Ricardo Torres</strong></Card.Title>
                            <Card.Subtitle>@RToCastro</Card.Subtitle>
                            <Card.Text>
                                Front End Development/REACT/Graphics/CSS
                            </Card.Text>
                            <br />
                            <Link to='https://github.com/rtocastro'>
                                <Button variant="info">Github</Button>
                            </Link>
                            <br />
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='devCard'>
                        <Card.Img variant="top" src={devVIGGY} />
                        <Card.Body>
                            <Card.Title><strong>Viggy Sambandam</strong></Card.Title>
                            <Card.Subtitle>@RToCastro</Card.Subtitle>
                            <Card.Text>
                                Back End Development/Javascript/GraphQL/JWT
                            </Card.Text>
                            <br />
                            <Link to='https://github.com/Vigneshwarie'>
                                <Button variant="info">Github</Button>
                            </Link>
                            <br />
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='devCard'>
                        <Card.Img variant="top" src={devFRANK} />
                        <Card.Body>
                            <Card.Title><strong>Francisco Contreras</strong></Card.Title>
                            <Card.Subtitle>@RToCastro</Card.Subtitle>
                            <Card.Text>
                                Back End Development/Javascript/GraphQL/
                            </Card.Text>
                            <br />
                            <Link to='https://github.com/frankieee324'>
                                <Button variant="info">Github</Button>
                            </Link>
                            <br />
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card className='devCard'>
                        <Card.Img variant="top" src={devTASNEEM} />
                        <Card.Body>
                            <Card.Title><strong>Tasneem Halim</strong></Card.Title>
                            <Card.Subtitle>@RToCastro</Card.Subtitle>
                            <Card.Text>
                                Front/Back End Development/Javascript/GraphQL
                            </Card.Text>
                            <br />
                            <Link to='https://github.com/thalim-glam'>
                                <Button variant="info">Github</Button>
                            </Link>
                            <br />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}