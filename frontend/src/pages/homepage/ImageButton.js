import React from 'react';

function ImageButton(props) {
  return (
    <a href={props.url}>
      <img src={props.image} alt={'Page logo'} />
      <h2 className={props.style}>{props.text}</h2>
    </a>
  );
}

export default ImageButton;
