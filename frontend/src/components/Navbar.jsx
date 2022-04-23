import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

//icons
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Search } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: grid;
  grid-template-columns: max-content auto max-content;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: auto max-content;
  width: 90%;
  padding: 0 0.5rem;

  ${mobile({ width: "200px" })}
`;

const Input = styled.input`
  margin: 0 auto;
  width: 100%;
  height: 40px;
  padding: 0 20px;
  color: #464646;
  font-size: 1.2rem;
  border: none;
  background-color: #f3f3f3;
  border-radius: 1rem;
  outline: none;

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
`;

const Logo = styled.h2`
  color: #476085;
  
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0 1rem;
  ${mobile({ fontSize: "18px" })}
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
  color: #476085;
  font-weight: 500;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo>M-Vendor.</Logo>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search for anything..." />

            <Button type="submit">
              <Search />
            </Button>
          </SearchContainer>
        </Center>
        <Right>
          <Link to="/register/">
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login/">
            <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/vendor/">
            <MenuItem>BE VENDOR</MenuItem>
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
