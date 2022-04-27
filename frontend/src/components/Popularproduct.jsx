import { Star, StarHalf, StarOutline } from "@material-ui/icons";
import styled from "styled-components";

//style
const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 2rem;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 26rem;
  &:hover {
    overflow-x: scroll;
  }
`;
const Title = styled.h2`
color: #303030;
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  
  margin: 0.5rem;
`;
const ProductList = styled.div`
color:#353535;

  &:hover {
    color: #476085;
  }
`;
const ProductImage = styled.img`
/* filter: drop-shadow(1px 1px 2px black); */

  margin: 5px;
  object-fit: contain;
  cursor: pointer;
  height: 17rem;
  width: 17rem;
  border-top-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  transition: all 0.3s ease;

  &:hover {
    height: 18rem;
    width: 18rem;
  }
`;

const ProductName = styled.h4`
  text-transform: capitalize;
`;

const Product = styled.div`
  width: 18rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const ProductPrice = styled.div``;

const ProductRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ProductStar = styled.span`
  color: orange;
`;

const Popularproduct = () => {
  const PopularProduct = [];
  for (let i = 0; i <= 20; i++) {
    PopularProduct.push(
      <ProductList>
        <Product>
          <ProductImage 
            src="https://cdn.shopify.com/s/files/1/0225/6679/products/quicksquarenew_202087225936568_1024x1024.jpg?v=1596805381"
            alt="jordan"
          />
          <ProductName>nike1234</ProductName>
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
        </Product>
      </ProductList>
    );
  }
  return (
    <div>
      <Title>
        Popular Product
       
      </Title>
      <Container>{PopularProduct}</Container>
    </div>
  );
};

export default Popularproduct;
