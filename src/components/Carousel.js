import React from 'react';

import Card from '../components/Card';

import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'Github',
          subTitle: 'View my repositories.',
          imgSrc: pic1,
          link: 'https://github.com/kevinhtran',
          selected: false
        },
        {
          id: 1,
          title: 'Twitter',
          subTitle: 'Check out my tweets.',
          imgSrc: pic2,
          link: 'https://twitter.com/kev_developer',
          selected: false
        },
        {
          id: 2,
          title: 'Instagram',
          subTitle: 'View my posts.',
          imgSrc: pic3,
          link: 'https://www.instagram.com/kevdeveloper/',
          selected: false
        }
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