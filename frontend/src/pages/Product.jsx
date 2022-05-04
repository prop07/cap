import React from "react";
import { useState } from "react";

import styled from "styled-components";
import {
  Star,
  StarHalf,
  StarOutline,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { mobile } from "../responsive";


//style
const Container = styled.div`
display: flex;
justify-content: center;
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

const ProductDetail = styled.div`
`;
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
const ProductDetailNavbar = styled.div`
  background-color: #f5f5f5;
  mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, transparent 100%);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  cursor: pointer;

`;

const TitleDescription = styled.div`
background-color: ${(props) => props.background === true && "#ffffff"};
  padding: 0.5rem;
 
  &:hover {
    text-decoration: underline;
} 
`;
const TitleSpecification = styled.div`
background-color: ${(props) => props.background === true && "#ffffff"};

  padding: 0.5rem;
 
  &:hover {
    text-decoration: underline;
  } 
`;
const TitleShippingAndPayment = styled.div`
background-color: ${(props) => props.background === true && "#ffffff"};

  padding: 0.5rem;
 
  &:hover {
    text-decoration: underline;
    
  } 
`;

const Discription = styled.div`
  display: ${(props) => props.display === true && "flex"};
  display: ${(props) => props.display === false && "none"};

  color: #353535;
  font-size: 12px;
  line-height: 20px;
  padding: 1rem;
  min-height: 15rem;

`;

const Specification = styled.div`
display: flex;
flex-direction: column;
  display: ${(props) => props.display === true && "flex"};
  display: ${(props) => props.display === false && "none"};
  padding: 1rem;
  color: #353535;
  font-size: 12px;
  line-height: 20px;
  min-height: 15rem;
`;

const ShippingAndPayment = styled.div`
  display: ${(props) => props.display === true && "flex"};
  display: ${(props) => props.display === false && "none"};
  color: #353535;
  font-size: 12px;
  line-height: 20px;
  padding: 1rem;
  min-height: 15rem;

`;

const Li = styled.li`
  color: #353535;
  font-size: 12px;
  line-height: 20px;
`;

const Product = () => {
  const [description, setDescription] = useState(true);
  const [specification, setSpecification] = useState(false);
  const [shippingandpayment, setShippingandpayment] = useState(false);

  function handleProductDetail(option) {
    switch (option) {
      case "desc":
        setDescription(true);
        setShippingandpayment(false);
        setSpecification(false);
        break;
      case "spec":
        setDescription(false);
        setShippingandpayment(false);
        setSpecification(true);
        break;
      case "ship":
        setDescription(false);
        setShippingandpayment(true);
        setSpecification(false);
        break;
    }
  }

  return (
    <div>
      <Container>
        <ProductImageContainer>
          <ProductImage
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
            <ProductSubImage
              src="https://m.media-amazon.com/images/I/611lAiLMLWL._AC_UX575_.jpg"
              alt="jordan"
            />
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
      <ProductDetail>
        <ProductDetailNavbar>
          <TitleDescription backgroung="description" onClick={()=>handleProductDetail("desc")}>Description</TitleDescription>
          <TitleSpecification backgroung="specification" onClick={()=>handleProductDetail("spec")}>Specification</TitleSpecification>
          <TitleShippingAndPayment backgroung="ShippingAndPayment" onClick={()=>handleProductDetail("ship")}>Shipping and payment</TitleShippingAndPayment>
        </ProductDetailNavbar>
        <Discription display={description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          vitae eum quidem. Tempore officiis minima iure quisquam magnam
          assumenda nihil unde? Eius nam aspernatur porro! Sunt atque similique
          odit architecto?Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti minus doloribus pariatur consequatur ipsa
          necessitatibus totam illo, vero porro recusandae laborum quam
          assumenda nobis accusamus! Beatae, ducimus dolores deleniti nemo aut
          animi soluta vel ratione qui ea, temporibus accusamus et
          exercitationem similique quasi quia corporis repudiandae sunt eius
          maiores.
        </Discription>
        <Specification display={specification}>
          <Li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            recusandae!
          </Li>
          <Li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            corporis.
          </Li>
          <Li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            odio.
          </Li>
          <Li>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            laborum?
          </Li>
          <Li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            dolores.
          </Li>
        </Specification>
        <ShippingAndPayment display={shippingandpayment}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim tenetur
          velit nulla hic sequi repellendus laboriosam vero autem quibusdam.
          Similique perferendis dolores voluptatibus minima temporibus. Optio
          aut harum tenetur doloribus?
        </ShippingAndPayment>
      </ProductDetail>
    </div>
  );
};

export default Product;
