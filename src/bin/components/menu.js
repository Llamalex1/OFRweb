import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Buttons from "./buttons";
const Menu = () => {
    return (
        <Row id="menu">
            <Col sm="1" id="OFRMain"><a href="https://www.youtube.com/channel/UCkmvkzRtXpRmhok2vt4eFWw" target="_blank"><button id="OFRbutton">OFR</button></a></Col>
            <Buttons/>
        </Row>
      );
}
 
export default Menu;