import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Main = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
`;

const Container = styled.div`
  display: flex;
`;

const ItemWrapper = styled.div`
  mask: linear-gradient(to left, rgba(0, 0, 0, 1) 90%, transparent 100%);

  transition: all 0.3s ease;

  width: 100vw;
  transform: translateX(${(props) => -props.index * 100 + "vw"});
`;

const Image = styled.img`
  mask: linear-gradient(to bottom, rgba(0, 0, 0, 1) 50%, transparent 100%);
  width: 100vw;
  margin: auto;
  /* background-color: ${(props) => props.bg}; */
  height: 700px;
  ${mobile({ height: "auto" })};
`;

const Button = styled.button`
  position: absolute;
  background-color: #b3c2da;
  top: 0;
  bottom: 0;
  margin-top: 10%;
  height: 50px;
  border-radius: 50%;
  border: none;
  width: 50px;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  z-index: 2;
  :hover {
    background-color: #99ddc3;
    cursor: pointer;
  }
  ${mobile({ height: "40px", width: "40px" })};
`;
const ImageWrapper = styled.div`
  mask: linear-gradient(to right, rgba(0, 0, 0, 1) 90%, transparent 100%);
`;

const Slider = () => {
  const data = [
    {
      id: 1,
      link: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg",
    },
    {
      id: 2,
      link: "https://m.media-amazon.com/images/I/61N83xtyr6L._SX3000_.jpg",
    },

    {
      id: 3,
      link: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
    },

    {
      id: 4,
      link: "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg",
    },

    {
      id:5,
      link:"https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg",
    }
  ];
  const [index, setIndex] = useState(0);
  const handleCarousel = (direction) => {
    if (direction === "left") {
      index === 0 ? setIndex(data.length - 1) : setIndex(index - 1);
    } else {
      index === data.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
    // console.log(index);
    // console.log(data)
  };
  return (
    <Main>
      <Button direction="left" onClick={() => handleCarousel("left")}>
        <ArrowLeft />
      </Button>
      <Container>
        {data.map((item) => (
          <ItemWrapper index={index}>
            <ImageWrapper>
              <Image src={item.link} alt={item.link} />
            </ImageWrapper>
          </ItemWrapper>
        ))}
      </Container>
      <Button direction="right" onClick={() => handleCarousel("right")}>
        <ArrowRight />
      </Button>
    </Main>
  );
};

export default Slider;
