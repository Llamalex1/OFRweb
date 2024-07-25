import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const Buttons = () => {
    const handleClickInfo = () => {
        console.log("info");
    }

    const handleClickMapa = () => {
        console.log("mapa");
    }

    const handleClickSklep = () => {
        console.log("sklep");
    }
    
    return (  
    <Col sm="10" id="Navbar">
        <a href="https://bluemap.bluecolored.de" target='_blank'><button onClick={handleClickMapa}>MAPA</button></a>
        <a href="https://vishop.pl/shop/14027/" target='_blank'><button onClick={handleClickSklep}>SKLEP</button></a>
    </Col>
);
}
 
export default Buttons;