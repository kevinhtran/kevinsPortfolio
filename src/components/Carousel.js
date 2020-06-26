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
          title: '',
          subTitle: '',
          imgSrc: pic1,
          link: '',
          selected: false
        },
        {
          id: 1,
          title: '',
          subTitle: '',
          imgSrc: pic2,
          link: '',
          selected: false
        },
        {
          id: 2,
          title: '',
          subTitle: '',
          imgSrc: pic3,
          link: '',
          selected: false
        }
      ]
    }
  }

  // this alows for only one card to be selected at a time
  handleCardClick = (id, card) => {
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