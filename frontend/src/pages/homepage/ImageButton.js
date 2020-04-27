import React from 'react';

function ImageButton({ url, image, imageStyle, text, textStyle }) {
  return (
    <a href={url}>
      <img src={image} alt={'Page logo'} />
      <h2 className={textStyle}>{text}</h2>
    </a>
  );
}

export default ImageButton;
