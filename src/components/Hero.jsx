import React from "react";
import styled from "styled-components";
import bubble from "../img/svg/bubbles.svg";
import ellipse from "../img/svg/ellipse.svg";
import heart from "../img/svg/heart.svg";
import verifed from "../img/svg/verifed.svg";
import nft from "../img/nft.gif";

const Hero = () => {
  return (
    <Container>
      <img src={bubble} alt="" className="bubble" />
      <img src={ellipse} alt="" className="ellipse" />
      <Wrapper>
        <div className="rectangle"></div>
        <Wrap>
          <img src={nft} alt="" />
          <Desc>
            <div className="hero-header">
              <h3>Devils’ Dragonz #87619</h3>
              <img src={heart} alt="" />
            </div>
            <div className="hero-content">
              <div className="hero-wrap">
                <img src={nft} alt="" />
                <p>Boryoku Dragonz</p>
                <img src={verifed} alt="" className="verifed" />
              </div>
              <p className="price">1.00 ETH</p>
            </div>
          </Desc>
        </Wrap>
      </Wrapper>
    </Container>
  );
};
export default Hero;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 550px;
  height: 550px;
  .bubble {
    width: 100%;
    height: 550px;
  }

  .ellipse {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const Wrapper = styled.div`
  .rectangle {
    position: absolute;
    top: 80px;
    width: 305px;
    height: 370px;
    left: 22%;
    transform: translate(-22%, 0);
    border: 1.5px solid rgba(0, 135, 83, 1);
    border-radius: 12px;
    transform: rotate(8deg);
  }
`;

const Desc = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  width: 305px;
  background-color: white;
  margin: 0 auto;
  height: 95px;
  transform: translateY(-5px);
  border-radius: 0px 0px 12px 12px;
  padding: 18px;

  .hero-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    h3 {
      font-size: 18px;
      color: black;
    }
    img {
      width: 15px;
      height: 15px;
    }
  }

  .hero-content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .hero-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        width: 24px;
        width: 24px;
        border-radius: 50%;
      }
      p {
        font-size: 13px;
        color: black;
        font-family: var(--Branding-sf-light);
      }
      .verifed {
        width: 15px;
        width: 15px;
      }
    }
    .price {
      font-size: 15px;
      font-family: var(--Branding-sf-light);
      color: black;
    }
  }
`;

const Wrap = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  width: 100%;
  padding: 50px 0;
  max-width: 320px;
  img {
    position: relative;
    z-index: 3;
    width: 100%;
    max-height: 290px;
    border-radius: 16px;
  }
`;
