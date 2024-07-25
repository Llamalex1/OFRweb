import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Discord from '../discord.png'

const Banner = () => {
    return (  
        <Row md="12" className="banner">
            <Col md="8" id="bannersection">
                <h2 id="bannersectiontext">Oficjalna strona OFR</h2>
            </Col>
            <Col>
                <a href="https://discord.gg/x94M964Ght" target="_blank" rel="noreferrer"><button id="discordbttn"><img id="discordimg" src={Discord} alt="discord" /></button></a>
            </Col>
        </Row>
        );
}
 
export default Banner;