import React from "react";
import {
  StyledActionsButtonWrapper,
  StyledContentWrapper,
  StyledImgWrapper,
  StyledPrice,
  StyledProductsCard,
} from "./ProductItem.styled";
import { cutText } from "../../helpers/cutText";
import { useDispatch } from "react-redux";
import { addToCartThunk } from "../../redux/cart/operations";

const ProductItem = (item) => {
  const dispatch = useDispatch();
  const { thumbnail, title, description, price } = item;
  return (
    <StyledProductsCard>
      <StyledImgWrapper>
        <img src={thumbnail} alt={item.title} />
      </StyledImgWrapper>
      <StyledContentWrapper>
        <h2>{cutText(title, 22)}</h2>
        <p>{cutText(description)}</p>
        <StyledPrice>{price}$</StyledPrice>
        <StyledActionsButtonWrapper>
          <button>See more</button>
          <button
            onClick={() => dispatch(addToCartThunk({ ...item, count: 1 }))}
          >
            Add to cart
          </button>
        </StyledActionsButtonWrapper>
      </StyledContentWrapper>
    </StyledProductsCard>
  );
};

export default ProductItem;
