import {
  Facebook,
  Twitter,
  Copyright,
  Instagram,
  YouTube,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

//styling

const UpperContainer = styled.div`
  padding: 1rem;
  display: grid;
  ${mobile({
    padding: "0.2rem",
  })}
`;
const LowerContainer = styled.div`
padding: 0.5rem 0rem;
  display:flex;
  background-color: #F5F4F4;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  color: #5e5e5e;
`;



const List = styled.div`
  padding: 2rem 0rem 2rem 4rem;
  justify-content: center;
  ${mobile({ margin: "0.5rem 0",
            fontSize: "0.8rem"     })}
`;
const ListItem = styled.div`
color:#353535;
padding:1rem 0rem 1rem 0rem;
text-transform: capitalize;
line-height: 20px;
font-size: 14px;
font-weight: 400;
  list-style: none;
  cursor: pointer;
  display: grid;
  grid-auto-flow: column;
  &:hover{
    color:blue;
  }
`;

const AboutSite = styled.div`
  margin-right: auto;
  ${mobile({ display: "none" })}
`;

const SiteDescription = styled.p`
color:#353535;
font-size: 12px;
line-height: 20px;
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  margin: 0 2px;
  gap: 0.2rem;
`;
const SocialIcon = styled.div`
  cursor: pointer;
  display: flex;
  gap: 1rem;
  justify-content: center;
`;
const SiteLinks = styled.div`
padding: 1rem 3rem 0.5rem 3rem;
display: flex;
justify-content: end;
`;

const CopyrightReserve = styled.div`


`;
const Footer = () => {
  return (
    <div>
      <UpperContainer>
        <AboutSite>
          <SiteDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam illo corrupti, eos suscipit aliquam earum eum alias dignissimos, commodi voluptate fuga provident deleniti? Eius eaque, sapiente quod vero ipsam praesentium repudiandae dolorem hic, ut commodi sequi laboriosam unde adipisci quidem asperiores pariatur dolore, perspiciatis dolores doloribus ad obcaecati cum enim. Maiores sapiente praesentium non totam eum! Numquam, repudiandae mollitia. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt totam sequi quasi ex laborum, numquam amet mollitia, rerum impedit dolores ipsa adipisci, molestiae odio assumenda blanditiis eveniet atque quam dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo voluptas tempora inventore, sapiente a nobis libero ipsa reiciendis? Laborum, cum?
          </SiteDescription>
        </AboutSite>
         <SiteLinks>
          <List>
            <ListItem>placing an order</ListItem>
            <ListItem>shipping options</ListItem>
            <ListItem>tracking a package</ListItem>
            <ListItem>country availability</ListItem>
            <ListItem>repairs</ListItem>
            <ListItem>installation</ListItem>
            

          </List>
      
       
          <List>
            <ListItem>help center</ListItem>
            <ListItem>contact us</ListItem>
            <ListItem>financing</ListItem>
            <ListItem>device recycling</ListItem>
            <ListItem>plcing an order</ListItem>
            <ListItem>shipping options</ListItem>
            <ListItem>tracking a package</ListItem>
            <ListItem>country availability</ListItem>
           
          </List>
         </SiteLinks>
         

      
      
      </UpperContainer>
      <LowerContainer>
     <SocialIcon>
       <Twitter/>
       <Instagram/>
       <Facebook/>
       <YouTube/>
     </SocialIcon>
       <CopyrightReserve>
        
       <Span>
         |
          <Copyright fontSize="small" />
          2022@prop07
        </Span>
         
       </CopyrightReserve>
      </LowerContainer>
    </div>
  );
};

export default Footer;
