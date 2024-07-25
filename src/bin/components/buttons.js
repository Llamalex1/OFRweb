import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';

const Buttons = () => {
    return (  
    <Col sm="10" id="Navbar">
        <a href="https://bluemap.bluecolored.de" target='_blank' rel="noreferrer"><button onClick={handleClickMapa}>MAPA</button></a>
        <a href="https://vishop.pl/shop/14027/" target='_blank' rel="noreferrer"><button onClick={handleClickSklep}>SKLEP</button></a>
    </Col>
);
}
 
export default Buttons;