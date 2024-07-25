import 'bootstrap/dist/css/bootstrap.css';
import './Info.css';
import '../fonts.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Menu from '../components/menu';
import Banner from '../components/banner';
import Section from '../components/section';
import Aside from '../components/aside';
import Background from '../blackstone.png';
import Frame from '../frame.png';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
  return (
    <div id="main">
      <div id='background' style={{ backgroundImage: `url(${Background})` }}>
        <Col className='d-none d-xl-block'><img id='foreground' src={Frame} /></Col>
        <Container>
          <Col>
            <Menu />
            <Banner />
          </Col>
        </Container>
        <Container>
          <Row>
            <Section />
            <Aside />
          </Row>
        </Container>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
