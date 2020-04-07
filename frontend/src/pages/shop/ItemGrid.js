import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ItemTemplate from './ItemTemplate';
import React from 'react';

/*
Method, which lists items in a grid.
Takes in two arguments:
props - array of data.
style - style class.
 */
export default function ItemGrid(props, style) {
  return (
    <div className={style.root} align={'center'}>
      <GridList className={style.gridList} cellHeight={500} cols={3}>
        {props.map((props) => (
          <GridListTile>
            <ItemTemplate image={props.img} title={props.title} price={props.price} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
