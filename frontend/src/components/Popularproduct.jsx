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

const ProductImage = styled.img`

  margin: 5px;
  object-fit: contain;
  cursor: pointer;
  height: 17rem;
  width: 17rem;
 transition: 0.2s ease;
  &:hover {
 transform: scale(1.05);

   
  }
`;

const ProductName = styled.h4`
  text-transform: capitalize;
`;

const Product = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-items: center;
  color: #353535;

  &:hover {
    color: #476085;
    text-decoration: underline;
  }
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
  const productdata = [
    {
      id: 1,
      name: "nike1",
      link: "https://m.media-amazon.com/images/I/61qUlaexJ3S._AC_SX395._SX._UX._SY._UY_.jpg",
      price: "30",
    },
    {
      id: 2,
      name: "nike2",
      link: "https://m.media-amazon.com/images/I/61t0DD0FrSL._AC_SY575._SX._UX._SY._UY_.jpg",
      price: "40.99",
    },

    {
      id: 3,
      name: "nike3",
      link: "https://m.media-amazon.com/images/I/611lAiLMLWL._AC_UX575_.jpg",
      price: "50.77",
    },
    {
      id: 1,
      name: "nike1",
      link: "https://m.media-amazon.com/images/I/61qUlaexJ3S._AC_SX395._SX._UX._SY._UY_.jpg",
      price: "30",
    },
    {
      id: 2,
      name: "nike2",
      link: "https://m.media-amazon.com/images/I/61t0DD0FrSL._AC_SY575._SX._UX._SY._UY_.jpg",
      price: "40.99",
    },

    {
      id: 3,
      name: "nike3",
      link: "https://m.media-amazon.com/images/I/611lAiLMLWL._AC_UX575_.jpg",
      price: "50.77",
    },
    {
      id: 1,
      name: "nike1",
      link: "https://m.media-amazon.com/images/I/61qUlaexJ3S._AC_SX395._SX._UX._SY._UY_.jpg",
      price: "30",
    },
    {
      id: 2,
      name: "nike2",
      link: "https://m.media-amazon.com/images/I/61t0DD0FrSL._AC_SY575._SX._UX._SY._UY_.jpg",
      price: "40.99",
    },

    {
      id: 3,
      name: "nike3",
      link: "https://m.media-amazon.com/images/I/611lAiLMLWL._AC_UX575_.jpg",
      price: "50.77",
    },
  ];

 
  return (
    <div>
      <Title>Popular Product</Title>
      <Container>

        {productdata.map((item) => (
          <Product>
            <ProductImage
              src={item.link}
              alt={item.name}
            />
            <ProductName>{item.name}</ProductName>
            <ProductPrice>RS{item.price}/-</ProductPrice>
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
        ))}
      </Container>
    </div>
  );
};

export default Popularproduct;
