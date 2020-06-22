import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Kevin Tran",
      // this provides everything that we need for our navbar
      headerLinks: [ 
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      // the top level info for each page in particular
      home: {
        title: 'Keep on coding.',
        subTitle: 'Projects with real-world solutions',
        text: 'Checkout my projects below'
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
            <Navbar.Brand>Kevin Tran</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    );
  }

}

export default App;


// step 1: Convert the app.js component into a class base component because we will be using state in here
// step 2: make a constructor to get props and super() to take in those props. have the state for the top level stuff on the website
// state is for the title that will be in the nav bar/header, state for the link that is inside of the navbar, state for the home/about/contact page but only the title of these pages
// step 3: in the terminal, run this command for the react router: 'npm install --save -react-router-dom' then 'npm run start'
// step 4: after installing react router. you can add <Router> to your render() and import up top.
// step 5: we also want to install reactstrap which is bootstrap with react. terminal: 'npm install --save react-bootstrap bootstrap'
// this allows for us to put things in and see stuff
// step 6: now we're going to create a container inside of the render.
// step 7: create a navbar
  // add brand
  // add a toggle
  // add collapse
  // add a nav
