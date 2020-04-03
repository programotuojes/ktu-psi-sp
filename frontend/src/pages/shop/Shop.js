import React from "react";
import { Helmet } from "react-helmet";
import ItemTemplate from "./ItemTemplate";
import pict from "./jacket1.jpg";
import pict2 from "./jacket2.jpg";
import pict3 from "./shorts.jpg";

const title = 'Shop';

function Shop() {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <h1>Shop</h1>
      <ItemTemplate image={pict} title={'jacket'} price={20}/>
      <ItemTemplate image={pict2} title={'jacket'} price={50} />
      <ItemTemplate image={pict3} title={'shorts'} price={150} />
    </>
  );
}

export default Shop;
