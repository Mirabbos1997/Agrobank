import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.firstName} {props.lastName}</h3>
        <div className={classes.description}>{props.middleName}</div>
        {/* <div className={classes.price}>{price}</div> */}
      </div>
      <div>
        <MealItemForm key={props.firstName} />
      </div>
    </li>
  );
};

export default MealItem;