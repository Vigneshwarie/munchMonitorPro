import headerlogo from '../assets/mm2headerlogo.png'
import { Button } from 'react-bootstrap';

const styles = {
    logoutbutton: {
        background: "#81D8D0",
        color: "white",
        border: "#E7D045",
        margin: "0, 0, 0, 0",


    }
};

export default function Header() {
    return (
        <>
            <Button
                // disabled={!(userFormData.petname && userFormData.petsex && userFormData.pettype && userFormData.petnotes)}
                type='submit'
                style={styles.logoutbutton} className="logoutbutton"
            >
                Logout
            </Button>

            <  img src={headerlogo} className="headlogo" />

        </>
    )
}