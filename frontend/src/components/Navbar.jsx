import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

//icons
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined , AccountCircle ,Help,Search} from "@material-ui/icons";

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
  display: grid;
  grid-template-columns: auto max-content;
  width: 90%;
  padding: 0 0.5rem;

  ${mobile({ width: "200px" })}
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
  border-radius: 1rem;
  outline: none;

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 2;
  text-align: center;
`;

const Logo = styled.img`
  object-fit: contain;
  height: 3rem;
  width: 4em;
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
  &:hover{
    color:blue;
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

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src="https://raw.githubusercontent.com/prop07/cap/main/image/m.png?token=GHSAT0AAAAAABTHYMZX4HRG7E64MP5QIANAYTHV4SA" alt="site logo"/>
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
          <Link to="/help/">
            <MenuItem><Help/></MenuItem>
          </Link>
          <Link to="/account/">
            <MenuItem><AccountCircle/></MenuItem>
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
