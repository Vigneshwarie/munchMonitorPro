import React from 'react';
import headerlogo from '../assets/mm2headerlogo.png'
import { Button } from 'react-bootstrap';
import '../assets/styles/Header.css';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <>
            <div className='headerdiv'>
                {
                Auth.loggedIn() ? (
                <div className="logoutbuttondiv">
                    <Button type="button" className="logoutbutton" onClick={Auth.logout}>Logout</Button>
                </div>
                ) : null
                }
                <div className="headlogodiv">
                    <Link to = "./homepage">
                    <img src={headerlogo} />
                    </Link>
                </div>
            </div>
        </>
    );
}