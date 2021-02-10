import React from 'react';

import Card from '../components/Card';

import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.jpg';
import pic4 from '../assets/images/pic4.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Kurated Sound',
          subTitle: 'Single Page App Prototype',
          imgSrc: pic2,
          link: 'https://ktranspicbucket.s3-us-west-1.amazonaws.com/kuratedsound.png',
          link2: 'https://ktranspicbucket.s3-us-west-1.amazonaws.com/kuratedsound.fig',
          selected: false
        },
        {
          id: 1,
          title: 'Vietnoms Restaurant',
          subTitle: 'Homepage Prototype',
          imgSrc: pic3,
          link: 'https://ktranspicbucket.s3-us-west-1.amazonaws.com/vietnoms.png',
          link2: 'https://ktranspicbucket.s3-us-west-1.amazonaws.com/vietnoms.fig',
          selected: false
        },
        {
          id: 2,
          title: 'Visual Content',
          subTitle: 'Homepage Prototype with animation.',
          imgSrc: pic1,
          link: 'https://ktranspicbucket.s3-us-west-1.amazonaws.com/visualcontent.png',
          link2: 'https://ktranspicbucket.s3-us-west-1.amazonaws.com/visualcontent.fig',
          selected: false
        },
        {
          id: 3,
          title: 'Airbnb Clone',
          subTitle: 'Wireframe with UI library and user-flow prototype.',
          imgSrc: pic4,
          link: 'https://ktranspicbucket.s3-us-west-1.amazonaws.com/airbnbprototype.png',
          link2: 'https://ktranspicbucket.s3-us-west-1.amazonaws.com/airbnbwireframe.fig',
          selected: false
        },
        
      ]
    }
  }

  // this alows for only one card to be selected at a time
  handleCardClick = (id, card) => {
    console.log(id);

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if(item.id !== id) {
        item.selected = false;
      }
    });

    // then you have to set state here
    this.setState({
      items
    });
  }

  // then you have to make the items. this is a method that creates maps through our items and card components
     makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

  render() {
    return(
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }

}

export default Carousel; 