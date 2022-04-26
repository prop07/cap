import { ArrowForward } from "@material-ui/icons";
import styled from "styled-components";

//style
const Container = styled.div`
  padding: 0.5rem;
  display: flex;
  gap: 0.5rem;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 10.5rem;
  &:hover {
    overflow-x: scroll;
  }
`;
const Title = styled.div`
  font-size: 1rem;
  margin: 0.5rem;
  display: flex;
  align-content: center;
`;
const CategoryList = styled.div`
  &:hover {
    color: #476085;
    text-decoration: underline;
  }
`;
const CategoryImage = styled.img`
 
  cursor: pointer;
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover {
    height: 8.7rem;
    width: 8.7rem;
  }
`;

const CategoryName = styled.p`
  text-transform: capitalize;
  text-align: center;
`;

const Category = styled.div`
  width: 9rem;
`;
const Wrapper = styled.div`
  margin-top: -5rem;

`;
const Shopbycategory = () => {
  const PopularCategory = [];
  for (let i = 0; i <= 20; i++) {
    PopularCategory.push(
      <CategoryList>
        <Category>
          <CategoryImage
            src="https://c.static-nike.com/a/images/w_1200,c_limit/bzl2wmsfh7kgdkufrrjq/seo-title.jpg"
            alt="nike"
          ></CategoryImage>
          <CategoryName>nike1234</CategoryName>
        </Category>
      </CategoryList>
    );
  }
  return (
    <div>
      <Wrapper>
         <Title>
        Explore By Popular Category
        <ArrowForward fontSize="small" />
      </Title>
      <Container>{PopularCategory}</Container>
      </Wrapper>
     
    </div>
  );
};

export default Shopbycategory;
