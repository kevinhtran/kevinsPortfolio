import React from 'react';
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
      <div>Hello World</div>
    );
  }

}

export default App;


// step 1: Convert the app.js component into a class base component because we will be using state in here
// step 2: make a constructor to get props and super() to take in those props. have the state for the top level stuff on the website
// state is for the title that will be in the nav bar/header, state for the link that is inside of the navbar, state for the home/about/contact page but only the title of these pages
// step 3: in the terminal, run this command for the react router: 'npm install --save -react-router-dom' then 'npm run start'
