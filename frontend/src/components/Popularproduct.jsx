import { ArrowForward ,Star, StarHalf, StarOutline} from "@material-ui/icons";
import styled from "styled-components";


//style
const Container = styled.div`
padding: 0.5rem;
display: flex;
gap: 2rem;
overflow-x: hidden;
overflow-y: hidden;
height: 22rem;
&:hover{
    overflow-x: scroll;
}


`;
const Title = styled.div`
font-size: 1rem;
margin: 0.5rem;
display: flex;
align-content: center;


`;
const ProductList = styled.div`
&:hover{
color:#476085;
text-decoration: underline;
}

`;
const ProductImage= styled.div`
cursor: pointer;
background-color: #504c4c;
height:17rem;
width: 17rem;
border-top-left-radius: 2rem;
border-bottom-right-radius: 2rem;
transition: all 0.3s ease;

&:hover{
    height:18rem;
width: 18rem; 
}
`;

const ProductName = styled.p`
text-transform: capitalize;
`;

const Product= styled.div`
width: 18rem; 

display: flex;
flex-direction: column;
justify-items: center;

`;

const ProductPrice = styled.div`

`;

const ProductRating = styled.div`
display: flex;
flex-direction: row;
align-items: center;

`;
const ProductStar = styled.span`
  color  :orange ;

`;

const Popularproduct=()=>{
    const PopularProduct = [];
    for (let i=0;i<=20;i++){
        PopularProduct.push(
            <ProductList>
                <Product> 
                <ProductImage></ProductImage>
                <ProductName>nike1234</ProductName>
                <ProductPrice>RS 300.77/-</ProductPrice>
                <ProductRating>3.6<ProductStar><Star/><Star/><Star/><StarHalf/><StarOutline/></ProductStar></ProductRating>
                </Product>
               
            </ProductList>
        )
    }
    return(
        <div>
            <Title>Popular Product<ArrowForward fontSize="small"/></Title>
        <Container>
           {PopularProduct}
            

        </Container>
        </div>
    );
}


export default Popularproduct;