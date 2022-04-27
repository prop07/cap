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
  height: 30rem;
  width: 30rem;
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
  width: 25rem;
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
  width: 25rem;

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

const ProductPriceAndRating = styled.div``;
const ProductImageContainer = styled.div`
gap: 1rem;
display: flex;
flex-direction: column;
`;
const ProductImageList = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;


`;
const ProductSubImage = styled.img`
  cursor: pointer;

  border: 2px ridge #f1f1f1;
border-radius: 10px;
object-fit: contain;
height: 10rem;
width: 10rem;

&:hover {
  box-shadow: 1px 1px 1px black;
  }

`;




const Product = () => {
  return (
    <div>
      <Container>
          <ProductImageContainer> <ProductImage
          src="https://m.media-amazon.com/images/I/61qUlaexJ3S._AC_SX395._SX._UX._SY._UY_.jpg"
          alt="jordan"
        />
        <ProductImageList>
      
        
        <ProductSubImage
          src="  https://m.media-amazon.com/images/I/61t0DD0FrSL._AC_SY575._SX._UX._SY._UY_.jpg"
          alt="jordan"
        />
        <ProductSubImage
          src="https://m.media-amazon.com/images/I/61qUlaexJ3S._AC_SX395._SX._UX._SY._UY_.jpg"
          alt="jordan"
        />
            <ProductSubImage src="https://m.media-amazon.com/images/I/611lAiLMLWL._AC_UX575_.jpg"
          alt="jordan"/>
        </ProductImageList>
        
        </ProductImageContainer>
       

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
