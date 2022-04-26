import React from "react";
import styled from "styled-components";
import {
  Star,
  StarHalf,
  StarOutline,
  ShoppingCartOutlined,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  margin: auto;
`;

const ProductImage = styled.img`
  object-fit: contain;
  height: 40rem;
  width: 40rem;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 5rem;
`;

const ProductDetail = styled.div``;
const ProductName = styled.h4`
  text-transform: capitalize;
  color: #494949;
  font-size: 35px;
  line-height: 35px;
`;
const ProductPrice = styled.div`
   font-size: 25px;
  line-height: 25px;
  color: #383838;
`;

const ProductRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ProductStar = styled.span`
  color: orange;
`;

const Filter = styled.div`
  display: grid;
`;

const FilterTitle = styled.h4`
    color: #494949;
  letter-spacing: 2px;
  padding: 5px 0;
`;

const FilterSelect = styled.select`
  color: #383838;
  
  height: 4rem;
  width: 20rem;
  font-size: 20px;
  line-height: 20px;
  padding: 0.5rem;
  background-color: transparent;
  border: 2px ridge #f1f1f1;
  border-radius: 5px;
  cursor: pointer;
`;

const FilterOption = styled.option`
  cursor: pointer;
`;
const Button = styled.button`
  transition: 0.3s ease;
  width: 20rem;

  padding: 1rem;
  background-color: transparent;
  border: 2px ridge #f1f1f1;

  border-radius: 5px;
  color: #494949;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 500;
  font-size: 1.1rem;
  &:hover {
    border: 2px ridge #494949;

    background-color: #494949;
    color: white;
  }
`;

const ProductPriceAndRating= styled.div``

;
const Product = () => {
  return (
    <div>
      <Container>
        <ProductImage
          src="https://cdn.shopify.com/s/files/1/0225/6679/products/quicksquarenew_202087225936568_1024x1024.jpg?v=1596805381"
          alt="jordan"
        />

        <ProductInfo>
          <ProductName>nike1234</ProductName>
          <ProductPriceAndRating>
            <ProductPrice>RS 300.77/-</ProductPrice>
            <ProductRating>
              <ProductStar>
                <Star />
                <Star />
                <Star />
                <StarHalf />
                <StarOutline />
              </ProductStar>
              (3.6)
            </ProductRating>
          </ProductPriceAndRating>

          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterSelect name="color">
              {/* dummy color */}
              <FilterOption>White</FilterOption>
              <FilterOption>Black</FilterOption>
              <FilterOption>Gray</FilterOption>
              {/* dummy color  */}
            </FilterSelect>
          </Filter>

          <Filter>
            <FilterTitle>Quantity</FilterTitle>
            <FilterSelect name="quantity">
              {/* dummy color */}
              <FilterOption>1</FilterOption>
              <FilterOption>2</FilterOption>
              <FilterOption>3</FilterOption>
              {/* dummy color  */}
            </FilterSelect>
          </Filter>
          <Button type="submit">
            ADD TO CART <ShoppingCartOutlined />
          </Button>
        </ProductInfo>
      </Container>
      <ProductDetail></ProductDetail>
    </div>
  );
};

export default Product;
