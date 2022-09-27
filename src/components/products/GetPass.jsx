import React from "react";
import styled from "styled-components";
import opensea from "../../img/openseas.png";
import close from "../../img/svg/close-circle-white.svg";

const GetPass = ({ setTogglePass }) => {
  return (
    <Container>
      <Wrapper>
        <div className="top">
          <p>Get NFTPass Here</p>
          <img src={close} alt="" onClick={() => setTogglePass(false)} />
        </div>
        <div className="opensea">
          <img src={opensea} alt="" />
        </div>
      </Wrapper>
    </Container>
  );
};

export default GetPass;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

const Wrapper = styled.div`
  width: 460px;
  height: 320px;
  padding: 34px 28px;
  border-radius: 40px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary-color);
  background-color: #000;
  .top {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 34px 28px;
    z-index: 4;
    display: flex;
    align-items: center;
    p {
      width: 100%;
      margin: 0;
      color: white;
      font-family: var(--inter);
      font-weight: 700;
    }
    img {
      cursor: pointer;
    }
  }
`;
