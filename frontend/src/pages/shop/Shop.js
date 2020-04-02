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

      <ItemTemplate image={pict} title={'jacket'} value={20} />
      <ItemTemplate image={pict2} title={'jacket'} value={50} />
      <ItemTemplate image={pict3} title={'shorts'} value={150} />
    </>
  );
}

export default Shop;
