import React, { useMemo, useState } from "react";
import { useHTTP } from "../../hooks/useHTTP";
import { fetchProducts } from "../../services/apiProducts";
import ProductItem from "../../components/ProductItem/ProductItem";
import { StyledList } from "./ShopPage.styled";

const ShopPage = () => {
  const [skip, setSkip] = useState(0);

  const params = useMemo(() => ({ limit: 6, skip }), [skip]);
  const [data] = useHTTP(fetchProducts, params);

  const pageCount = data ? Math.round(data.total / 6) : 0;

  const nextPage = () => {
    setSkip((prev) => prev + 6);
  };

  const prevPage = () => {
    setSkip((prev) => prev - 6);
  };

  const handleSelectPage = (number) => {
    setSkip(number * 6);
  };
  return (
    <div>
      <div>
        <button disabled={skip === 0} onClick={prevPage}>
          Prev
        </button>
        {Array(pageCount)
          .fill("")
          .map((_, index) => (
            <button onClick={() => handleSelectPage(index)} key={index}>
              {index + 1}
            </button>
          ))}
        <button disabled={skip > data?.total - 6} onClick={nextPage}>
          Next
        </button>
      </div>
      <StyledList>
        {data?.products.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </StyledList>
    </div>
  );
};

export default ShopPage;
