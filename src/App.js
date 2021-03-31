import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kevin Tran",
      // this provides everything that we need for our navbar
      headerLinks: [ 
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        // { title: 'Contact', path: '/contact' }
      ],
      // the top level info for each page in particular
      home: {
        title: 'Front-End Developer & Designer',
        subTitle: 'My name is Kevin Tran from the Bay Area.',
        text: 'I have designed and prototyped useful experiences for websites. Click on the cards below to view/download my projects.',
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <div className='header-1'>
              <Navbar.Brand>Kevin Tran</Navbar.Brand>
              <a href='https://www.linkedin.com/in/kevin-tran-a8652586/'> <i class="fab fa-linkedin fa-2x"></i></a>
              <a href='https://github.com/kevinhtran'><i class="fab fa-github-square fa-2x"></i></a>
            </div>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                {/* <Link className="nav-link" to="/">Home</Link> */}
                {/* <Link className="nav-link" to="/about">About</Link> */}
                {/* <Link className="nav-link" to="/contact">Contact</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer/>
        </Container>
      </Router>
    );
  }

}

export default App;