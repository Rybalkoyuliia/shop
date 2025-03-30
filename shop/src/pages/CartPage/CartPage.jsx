import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartThunk } from "../../redux/cart/operations";
import { selectAmount, selectCart } from "../../redux/cart/slice";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import CartItem from "../../components/CartItem/CartItem";
import { StyledCartList } from "./CartPage.styled";

const CartPage = () => {
  const cartItems = useSelector(selectCart);
  const amount = useSelector(selectAmount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartThunk());
  }, [dispatch]);
  if (!cartItems.length) return <EmptyCart />;

  return (
    <>
      <h1>Total amount: {amount}$</h1>
      <StyledCartList>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </StyledCartList>
    </>
  );
};

export default CartPage;
