import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutPage = (props) => {
  
  return (
    <Container >
      <Container>
        <Hero title={props.title} />
          <Content>
            <p>My name is Kevin Tran and I'm a self-taught UI/UX Web Designer based in the Bay Area.</p>
          </Content>
      </Container>
      <Container>
        <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" roundedCircle />
                </Col>
              </Row>
            </Container>
      </Container>
    </Container>
  );

}

export default AboutPage;