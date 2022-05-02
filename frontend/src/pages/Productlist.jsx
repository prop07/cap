import { Star, StarHalf, StarOutline } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";


//style
const Container = styled.div`
  padding: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  height: 26rem;

  ${mobile({ gridTemplateColumns:"repeat(2,1fr)" })};

 
`;
const Title = styled.h2`
color: #303030;
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  
  margin: 0.5rem;
`;
const ProductContainer = styled.div`
 

color:#353535;
height: 27rem;
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

const Productlist = () => {
  const ProductList = [];
  for (let i = 0; i < 9; i++) {
    ProductList.push(
      <ProductContainer>
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
      </ProductContainer>
    );
  }
  return (
    <div>
      <Title>
        Product List
       
      </Title>
      <Container>{ProductList}</Container>
    </div>
  );
};

export default Productlist;
