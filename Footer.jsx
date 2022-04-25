import {
  Facebook,
  Phone,
  Twitter,
  Copyright,
  LocationOn,
  Instagram,
  MailOutline,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

//styling

const UpperContainer = styled.div`
  background-color: #F5F4F4;
  padding: 1rem;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  ${mobile({
    padding: "0.2rem",
    gridTemplateColumns: "1fr 1fr  2fr",
  })}
`;
const LowerContainer = styled.div`
  background-color: #F5F4F4;


  height: 2rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  color: #535353;
`;
const Left = styled.div`
  justify-self: left;
  ${mobile({ marginLeft: "1rem" })}
`;
const Center = styled.div`
  justify-self: center;
`;
const Right = styled.div`
  display: grid;
  justify-self: end;
  font-size: 1rem;
  justify-items: center;
`;
const ListTitle = styled.h3`
  text-transform: uppercase;
  text-align: center;
  color: #476085;

  ${mobile({ fontSize: "0.9rem" })}
`;
const List = styled.div`
  justify-content: center;
  margin: 0.7rem 0;
  ${mobile({ margin: "0.5rem 0",
            fontSize: "0.8rem"     })}
`;
const ListItem = styled.div`
  list-style: none;
  cursor: pointer;
  display: grid;
  align-content: center;
  grid-auto-flow: column;
  place-items: center;
  justify-content: center;
`;

const AboutSite = styled.div`
  margin-right: 0.5rem;
  ${mobile({ display: "none" })}
`;
const SiteName = styled.h3`
  color: #476085;
  ${mobile({ fontSize: "1rem" })}
`;
const SiteDescription = styled.p``;

const Span = styled.span`
  display: flex;
  align-items: center;
  margin: 0 2px;
  gap: 0.2rem;
`;
const IconContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
const Icon = styled.div`
  background-color: ${(props) =>
    (props.bg === "#4267B2" && "#4267B2") ||
    (props.bg === "#1DA1F2" && "#1DA1F2") ||
    (props.bg === "#F56040" && "#F56040")};
  color: #ffffff;
  height: 30px;
  width: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
`;

const Footer = () => {
  return (
    <div>
      <classUpperContainer>
        <AboutSite>
          <SiteName>M-Vendor.</SiteName>
          <SiteDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam illo corrupti, eos suscipit aliquam earum eum alias dignissimos, commodi voluptate fuga provident deleniti? Eius eaque, sapiente quod vero ipsam praesentium repudiandae dolorem hic, ut commodi sequi laboriosam unde adipisci quidem asperiores pariatur dolore, perspiciatis dolores doloribus ad obcaecati cum enim. Maiores sapiente praesentium non totam eum! Numquam, repudiandae mollitia.
          </SiteDescription>
        </AboutSite>
        <Left>
          <ListTitle>Dummy Link</ListTitle>
          <List>
            <ListItem>Link</ListItem>
            <ListItem>Link234</ListItem>
            <ListItem>Link</ListItem>
          </List>
        </Left>
        <Center>
          <ListTitle>Buy & sell</ListTitle>
          <List>
            <ListItem>Link</ListItem>
            <ListItem>Link234</ListItem>
            <ListItem>Link</ListItem>
          </List>
        </Center>
        <Right>
          <ListTitle>contact Us</ListTitle>
          <List>
            <ListItem>
              <Phone fontSize="small" />
              1234567890
            </ListItem>

            <ListItem>
              <LocationOn fontSize="small" />
              Address,street
            </ListItem>
            <ListItem>
              <MailOutline />
              prop07@gmail.com
            </ListItem>
          </List>
          <IconContainer>
            <Icon bg="#4267B2">
              <Facebook />
            </Icon>
            <Icon bg="#1DA1F2">
              <Twitter />
            </Icon>
            <Icon bg="#F56040">
              <Instagram />
            </Icon>
          </IconContainer>
        </Right>
      </classUpperContainer>
      <LowerContainer>
        <Span>
          <SiteName>M-Vendor</SiteName>
        </Span>
        |
        <Span>
          <Copyright fontSize="small" />
          2022@prop07
        </Span>
      </LowerContainer>
    </div>
  );
};

export default Footer;
