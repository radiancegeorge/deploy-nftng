import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const ScrollToTop = () => {
  return (
    <Link to="home" spy={true} smooth={true} offset={0} duration={100}>
      <Container>
        <span className="calculator">Top</span>
      </Container>
    </Link>
  );
};

export default ScrollToTop;

const Container = styled.div`
  cursor: pointer;
  position: sticky;
  z-index: 20px;
  width: 65px;
  height: 65px;
  background-color: var(--primary-color);
  bottom: 30px;
  border-radius: 50%;
  left: calc(100% - 80px);
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  span {
    color: black;
    font-size: 20px;
  }
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;
