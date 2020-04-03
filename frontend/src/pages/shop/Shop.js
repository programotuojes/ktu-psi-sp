import React from 'react';
import { Helmet } from 'react-helmet';
import ItemTemplate from './ItemTemplate';
import img from './jacket1.jpg';
import img2 from './jumper.jpg';
import img3 from './shorts.jpg';

const title = 'Shop';

function Shop() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <ItemTemplate image={img} title={'jacket'} price={2000} />
      <ItemTemplate image={img2} title={'jumper'} price={5005} />
      <ItemTemplate image={img3} title={'shorts'} price={15014} />
    </>
  );
}

export default Shop;
