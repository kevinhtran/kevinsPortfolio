import React from 'react';

import CardInfo from '../components/CardInfo';

const Card = (props) => {

  return(
    <div className="d-inline-block g-card card-1" onClick={(e) => props.click(props.item)}>
      <img className="g-card-image card-1" src={props.item.imgSrc} alt={props.item.imgSrc} />
      { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} link2={props.item.link2} /> }
    </div>
  );
}

export default Card;