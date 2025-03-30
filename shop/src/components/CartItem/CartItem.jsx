import React from "react";
import { StyledCartItem } from "./CartItem.styled";
import { useDispatch } from "react-redux";
import {
  decreaseQtyThunk,
  increaseQtyThunk,
  removeFromCartThunk,
} from "../../redux/cart/operations";

const CartItem = (item) => {
  console.log(item);
  const { id, thumbnail, title, price, count } = item;
  const dispatch = useDispatch();
  const handleDecreaseCount = () => {
    if (count === 1) {
      dispatch(removeFromCartThunk(id));
    } else {
      dispatch(decreaseQtyThunk(item));
    }
  };
  return (
    <StyledCartItem>
      <div>
        <img src={thumbnail} alt={title} />
      </div>
      <p>{title}</p>
      <p>{price}$</p>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        <p>{count}</p>
        <button onClick={() => dispatch(increaseQtyThunk(item))}>+</button>
      </div>

      <button onClick={() => dispatch(removeFromCartThunk(id))}>Remove</button>
    </StyledCartItem>
  );
};

export default CartItem;
