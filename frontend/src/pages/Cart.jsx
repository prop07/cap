import { Close} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 50px;
  ${mobile({padding:"20px"})}
`;

const Title = styled.h1`
  font-size: 1.5rem;
  color: #353535;
`;

const ButtonItem = styled.button`
  padding: 0.7rem 1rem;
  letter-spacing: 1px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem 0;
  border: 1px solid #494949;
  color: ${(props) => (props.bg === "gray" ? "#ffff" : "#494949")};
  background-color: ${(props) =>
    props.bg === "gray" ? "#494949" : "transparent"};
  &:hover {
    background-color: #2e2e2e;
    color: white;
  }
`;

const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: start;
  gap: 1rem;
  ${mobile({ gridTemplateColumns: "1fr" })}
`;
const Left = styled.div``;

const Product = styled.div`
  display: grid;
  gap: 2rem;
`;

const Hr = styled.hr`
  margin: 1rem 0;
`;

const ProductDetail = styled.div`
  position: relative;
  padding: 1rem;
  display: grid;
  grid-template-columns: max-content auto max-content;
  gap: 1rem;
  -webkit-box-shadow: 2px 3px 3px 5px rgba(185, 185, 185, 0.5);
  box-shadow: 2px 3px 3px 5px rgba(185, 185, 185, 0.5);
  border-radius: 10px;
  ${mobile({gridTemplateColumns:"1fr"})}
`;

const Image = styled.img`
object-fit: contain;
  height: 200px;
  width: 200px;
  margin: auto;
  border-radius: 10px;
`;



const ProductTitle = styled.h3`
  margin-bottom: 0.7rem;
`;
const ProductInfo = styled.div`
  display: grid;
  justify-content: start;
  padding: 0.5rem;
`;
const Color = styled.p`
  display: grid;
  grid-template-columns: 80px auto;
`;
const Quantity = styled.p`
  display: grid;
  grid-template-columns: 80px auto;
`;
const Price = styled.p`
  display: grid;
  grid-template-columns: 80px auto;
`;


const Right = styled.fieldset`
  display: grid;
  padding: 1rem;
  border-radius: 10px;
`;

const Legend = styled.legend`
  font-size: 1.5rem;
  padding: 0.5rem;
`;


const Select = styled.select`
  background-color: transparent;
  padding: 0.3rem;
  max-width: 120px;
`;

const OrderDetail = styled.div`
  font-size: 1.5rem;
`;



const Summary = styled.div`
  text-align: center;
`;

const OrderInfo = styled.p`
  text-align: center;
  color: gray;
`;

const ShippingInfo = styled.p`
  text-align: center;
  color: gray;
`;




const Option = styled.option``;
const Label = styled.label``;
const LeftSide = styled.div``;
const RightSide = styled.div``;


const RemoveButton = styled.button`
  position: absolute;
  right: 0%;
  top: 0;
  padding: 0.5rem 1rem;
  margin: 0.5rem 0;
  background-color: transparent;
  border: none;
  transition: all 0.1s ease;
  &:hover {
    color: #000000;
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Cart = () => {
  const cartdata = [
    {
      id: 1,
      name: "nike1",
      link: "https://m.media-amazon.com/images/I/61qUlaexJ3S._AC_SX395._SX._UX._SY._UY_.jpg",
      price: "30",
      color:"gray",
      quantity:"2",
      
    },
    {
      id: 2,
      name: "nike2",
      link: "https://m.media-amazon.com/images/I/61t0DD0FrSL._AC_SY575._SX._UX._SY._UY_.jpg",
      price: "40",
      color:"black",
      quantity:"5"


    },

  ];
  const Icon = {
    fontSize: "2.5rem",
    position: "absolute",
    top: 5,
    right: 10,
  };


  return (
    <Container>
      <Title>YOUR CART (2)</Title>
      <CartContainer>
        <Left>
         
          <Hr />
          <Product>
          
            {/* Product */}
            {cartdata.map((item)=>(
            <ProductDetail>
            <Image src={item.link} alt={item.name}/>
            <ProductInfo>
              <ProductTitle>{item.name}</ProductTitle>
              <Color>
                <LeftSide>Color:</LeftSide>
                <RightSide>
                  <b>{item.color}</b>
                </RightSide>
              </Color>
              <Price>
                <LeftSide>Total:</LeftSide>
                <RightSide>
                  <b >Rs:{item.quantity*item.price}/-</b>
                </RightSide>
              </Price>
              <Quantity>
                <LeftSide>
                  <Label for="quantity">Quantity:</Label>
                </LeftSide>
                <RightSide>
                  <Select name="quantity" id="quantity">
                  <Option value="4">{item.quantity}</Option>
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                   
                  </Select>
                </RightSide>
              </Quantity>
            </ProductInfo>
            <RemoveButton>
              <Close style={Icon} />
            </RemoveButton>
          </ProductDetail>
        ))}
           

        </Product>
        </Left>
        <Right>
          <Legend>Order Summary</Legend>
          <Summary>
            <OrderDetail>
              Total: <b>$518</b>
            </OrderDetail>
            <OrderInfo>( inclusive of GST )</OrderInfo>
           
          </Summary>
          <Hr />
          <ShippingInfo>
            Shipping costs will be calculated at checkout.
          </ShippingInfo>
          <Hr />
          <ButtonItem bg="gray">CHECKOUT NOW</ButtonItem>
          <ButtonItem bg="transparent">CONTINUE SHOPPING</ButtonItem>
        </Right>
      </CartContainer>
    </Container>
  );
};

export default Cart;