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
text-transform: capitalize;
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
text-transform: capitalize;
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
  border-top: 2px ridge #eaeaea;
  background-color: #eaeaea;
  mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, transparent 100%);
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  cursor: pointer;
`;

const TitleDescription = styled.div`
  padding: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
const TitleSpecification = styled.div`
  padding: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;
const TitleShippingAndPayment = styled.div`
  padding: 1rem;

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
  const [productImage, setProductImage] = useState(0);

  const productdetail = [
    {
      id: 1,
      name: "lorem4",
      price: "20",
      color: ["red", "green", "blue","yellow","green"],

      rating: 3.6,
      quantity: 20,
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
      specification: [
        "lorem20",
        "e are many variations of passages of Lorem Ipsum available, but the ",
        "e are many variations of passages of Lorem Ipsum available, but the ",
      ],
      shippingandpayment:
        "There are many variations of passages of Lorem Ipsum available, but the ",
    },
  ];




  const imagedata = [
    {
      id: 1,
      name: "nike1",
      link: "https://m.media-amazon.com/images/I/61qUlaexJ3S._AC_SX395._SX._UX._SY._UY_.jpg",
    },
    {
      id: 2,
      name: "nike2",
      link: "https://m.media-amazon.com/images/I/61t0DD0FrSL._AC_SY575._SX._UX._SY._UY_.jpg",
    },

    {
      id: 3,
      name: "nike3",
      link: "https://m.media-amazon.com/images/I/611lAiLMLWL._AC_UX575_.jpg",
    },
  ];

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

    
  //   const totalquantity = productdetail[0].quantity;
  // const Quantity = [];


  //   const PopularProduct = [];
  //   for (let i = 0; i <= 10; i++) {
  //     Quantity.push(
  //       <FilterOption>{i}</FilterOption>
       
  //     );
  //   }


  }

  return (
    <div>
      <Container>
        <ProductImageContainer>
          <ProductImage src={imagedata[productImage].link} alt={imagedata[productImage].link}/>
          <ProductImageList>
            {imagedata.map((item, index) => (
              <ProductSubImage
                onClick={() => setProductImage(index)}
                src={item.link}
                alt={item.name}
              />
            ))}
          </ProductImageList>
        </ProductImageContainer>

        <ProductInfo>
          <ProductName>{productdetail[0].name}</ProductName>
          <ProductPriceAndRating>
            <ProductPrice>RS {productdetail[0].price}/-</ProductPrice>
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
              {productdetail[0].color.map((index)=>
               <FilterOption id={index}>{[index]}</FilterOption>
              
              )}
             
            </FilterSelect>
          </Filter>

          <Filter>
            <FilterTitle>Quantity</FilterTitle>
            <FilterSelect name="quantity">
              {/* {for(let i=1;i=<productdetail[0].quantity;i++){

                <FilterOption>{i}</FilterOption>

              }
              } */}
         
            <FilterOption>1</FilterOption>
             
            </FilterSelect>
          </Filter>
          <Button type="submit">
            ADD TO CART <ShoppingCartOutlined />
          </Button>
        </ProductInfo>
      </Container>
      <ProductDetail>
        <ProductDetailNavbar>
          <TitleDescription
            style={description ? { backgroundColor: "white" } : {}}
            onClick={() => handleProductDetail("desc")}
          >
            Description
          </TitleDescription>
          <TitleSpecification
            style={specification ? { backgroundColor: "white" } : {}}
            background="specification"
            onClick={() => handleProductDetail("spec")}
          >
            Specification
          </TitleSpecification>
          <TitleShippingAndPayment
            style={shippingandpayment ? { backgroundColor: "white" } : {}}
            background="ShippingAndPayment"
            onClick={() => handleProductDetail("ship")}
          >
            Shipping and payment
          </TitleShippingAndPayment>
        </ProductDetailNavbar>
        <Discription display={description}>
      {  productdetail[0].description}
        </Discription>
        <Specification display={specification}>

        {productdetail[0].specification.map((index)=>
                <Li id={index}>{index}</Li>
              
              )}
        
        </Specification>
        <ShippingAndPayment display={shippingandpayment}>
      {  productdetail[0].shippingandpayment}
         
        </ShippingAndPayment>
      </ProductDetail>
    </div>
  );
};

export default Product;
