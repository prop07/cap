import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
   mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 90%, transparent 100%);
  background-color: #f5f5f5;
  padding: 1rem;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img`
padding: 1rem;
object-fit: contain;
  height: 3rem;
  width: 4em;
`;

const Description = styled.h2`
  color: #252525;
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  margin: 1.5rem 0;
  background-color: white;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: auto max-content;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  padding-left: 20px;
  background-color: white;
  border-radius: 10px 0 0 10px;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  border: none;
  background-color: white;
  border-radius: 0 10px 10px 0;
  border-left: 2px solid white;
  padding: 0 1rem;
  &:hover {
    cursor: pointer;
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src="https://raw.githubusercontent.com/prop07/cap/main/image/m.png?token=GHSAT0AAAAAABTHYMZX4HRG7E64MP5QIANAYTHV4SA" alt="site logo"/>
        <Description>Keep me updated about devices, news, tips, and offers from the Store.</Description>
        <InputContainer>
          <Input placeholder="Your email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;