import {
  Facebook,
  MailOutline,
  Phone,
  Twitter,
  Copyright,
  LocationOn,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import React  from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";




//styling

const UpperContainer = styled.div`
  padding: 0 1rem;
  display:grid;
  margin:0.5rem;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  ${mobile({ padding: "0" ,
             margin:"0 1.3rem 0 0" ,           
             gridTemplateColumns: "1fr 1fr  2fr" ,
   
          
          })}




`;
const LowerContainer = styled.div`
   display: flex;
   color: #535353;

`;
const Left = styled.div`
justify-self:left;
`;
const Center = styled.div`
  justify-self: center;

`;
const Right = styled.div`
justify-self: end;
font-size: 1rem;

`;
const ListTitle = styled.h3`
  text-transform: uppercase;
  
`;
const List = styled.ul`
justify-content: center;

  
 
 
 `;
const ListItem = styled.li`
      list-style: none;
      cursor: pointer;

`;

const AboutSite = styled.div`
  ${mobile({ display: "none" })}


`;
const SiteName = styled.h3`
color: purple;
${mobile({ fontSize: "0.9rem" })}



`;
const SiteDescription = styled.p`



`;
const Span = styled.span`
margin: 0 2px;
  

`;




const Footer=()=>{
return(
  <div>
    <UpperContainer>
     <AboutSite>
        <SiteName>M-Vendor.</SiteName>
        <SiteDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quod quos. A perferendis sunt quis, atque debitis omnis deleniti quas ex. Quaerat ab similique ullam adipisci temporibus blanditiis nisi a.</SiteDescription>
      </AboutSite>
    <Left>
        <List>
          <ListTitle>Buy</ListTitle>
          <ListItem>Link113</ListItem>
          <ListItem>Link</ListItem>
          <ListItem>Link</ListItem>
        </List>
      </Left>
      <Center>
        <List>
        <ListTitle>sell</ListTitle>

          <ListItem>Link</ListItem>
          <ListItem>Link234</ListItem>
          <ListItem>Link</ListItem>
        </List>
      </Center>
      <Right>
        <List>
        <ListTitle>contact Us</ListTitle>

          <ListItem><Phone fontSize='small'/>1234567890</ListItem>
         
          <ListItem><LocationOn fontSize='small'/>Address,street</ListItem>  
          <Span><Link to='/'><MailOutline fontSize="large"/></Link> <Link to='/'><Twitter fontSize='large'/></Link> <Link to='/'><Facebook fontSize='large'/></Link> 
         
          </Span>
        </List>
       
      </Right>

    
    </UpperContainer>
    <LowerContainer>
      <Span><SiteName>M-Vendor</SiteName></Span>
      <Span>|</Span>
      <Span><Copyright fontSize='small'/>2022@prop07</Span>
    
    
    </LowerContainer>
  </div>
)


}

export default Footer;







