import React from 'react';

function ImageButton(props) {

    return (
    <a href={props.url} >
        <img src={props.image} alt={'Page logo'}/>
    </a>
  );
}

export default ImageButton;
