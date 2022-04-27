import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";

//icons
import logo from "../image/m.png";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined , AccountCircle ,Help,Search, Close} from "@material-ui/icons";

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
gap:1rem;
  display: flex;
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

const Links = styled.div`
padding: 2px;
align-self: center;
text-transform: capitalize;
color:#353535;
line-height: 20px;
font-size: 15px;
  cursor: pointer;
  &:hover{
    color:blue;
  }

`;

const Navbar = () => {



  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo src={logo} alt="site logo"/>
          </Link>
        </Left>
        <Center > <Links>phone</Links>
            <Links>watch</Links>
            <Links>laptops</Links>
            <Links>gaming</Links>
            <Links>offers</Links>


          <SearchContainer>
           
          <Input placeholder="Search for anything..." />

<Button type="submit">
  <Close/>
</Button>

            {/* <Button onClick={()=>setShow(true)}>
              <Search />
            </Button> 
           {show? <Input placeholder="Search for anything..." ><Button onClick={()=>setShow(false)}><Close/></Button></Input>:null} */}
           
          </SearchContainer>
          {/* <Search/> */}
        </Center>
       

        <Right> <Button type="submit">
  <Search/>
</Button>
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
