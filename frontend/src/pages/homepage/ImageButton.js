import React from 'react';

function ImageButton(props) {
  return (
    <a href={props.url}>
      <img src={props.image} alt={'Page logo'} style={{height: '93vh', width:'50vw',transition:'opacity 300ms ease-in-out', filter:'opacity(100%)'}} 
      
      />
    </a>
  );
}

export default ImageButton;
