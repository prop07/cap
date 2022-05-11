import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";

//icons
import logo from "../image/m.png";
import { Badge } from "@material-ui/core";
import {
  ShoppingCartOutlined,
  AccountCircle,
  Help,
  Search,
  Close,
} from "@material-ui/icons";

const Container = styled.div`

`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: grid;
  gap: 1rem;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: ${(props) => props.display === true && "none"};
  display: ${(props) => props.display === false && "grid"};
  grid-template-columns: auto max-content;
  width: 90%;
  justify-self: center;



`;

const Input = styled.input`
  font-size: 1rem;
  margin: 0 auto;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  color: #464646;
  border: none;
  background-color: #f3f3f3;
  border-radius: 5px;
  outline: none;

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  display: flex;
  height: 2.5rem;
  display: ${(props) => props.display === true && "flex"};
  display: ${(props) => props.display === false && "none"};
  gap: 1rem;
  /* display: flex; */
  text-align: center;
  align-items: center;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 2rem;
  width: 3em;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 1.2rem;
  cursor: pointer;
  margin-left: 25px;
  color: #6d6d6d;
  font-weight: 510;
  &:hover {
    color: blue;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const Links = styled.div`
  letter-spacing: 1px;
  padding: 2px;
  align-self: center;
  text-transform: capitalize;
  color: #353535;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;
const SearchButton = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  color: #6d6d6d;

  &:hover {
    color: blue;
  }
`;

const LinksContainer = styled.div`
gap: 1rem;
display: flex;
flex-direction: row;
`;
const Navbar = () => {
  const [display, setDisplay] = useState(true);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src={logo} alt="site logo" />
          </Link>
        </Left>
        <Center display={display}>
          <LinksContainer>
            <Links>phone</Links>
            <Links>watch</Links>
            <Links>laptops</Links>
            <Links>gaming</Links>
            <Links>offers</Links>
          </LinksContainer>
          <SearchButton type="button" onClick={() => setDisplay(false)}>
            <Search />
          </SearchButton>
        </Center>
        <SearchContainer display={display}>
          <Input placeholder="Search for anything..." />

          <Button type="button" onClick={() => setDisplay(true)}>
            <Close />
          </Button>
        </SearchContainer>
        <Right>
          <Link to="/help/">
            <MenuItem>
              <Help />
            </MenuItem>
          </Link>
          <Link to="/profile/">
            <MenuItem>
              <AccountCircle />
            </MenuItem>
          </Link>

          <Link to="/cart/">
            <MenuItem>
              <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
