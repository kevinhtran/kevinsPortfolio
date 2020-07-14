import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
  
  return (
    <div>
      <Hero title={props.title} />

        <Content>
          <p>Hello, my name is Kevin and I'm a full-stack developer that is currently learning the MERN stack.</p>
        </Content>
    </div>
  );

}

export default AboutPage;