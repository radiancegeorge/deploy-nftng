import React from "react";
import styled from "styled-components";
import Slider from "./Slider";
import green from "../../img/svg/green.svg";
import orange from "../../img/svg/orange.svg";
import mouse from "../../img/svg/mouse.svg";
import arrow from "../../img/svg/arrow-down.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const HomeHeroSection = () => {
  return (
    <Container>
      <Mouse>
        <img src={mouse} alt="" className="bounce" />
        <div className="arrow-wrap">
          <span>Scroll down</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </Mouse>
      <BlurImg>
        <img src={green} alt="" className="green" />
        <img src={orange} alt="" className="orange1" />
        <img src={orange} alt="" className="orange2" />
      </BlurImg>
      <Wrapper>
        <Header>
          <p className="calculator">The 1ST Annual NFT Industry Event</p>
          <h1>
            <span>THE</span> WEBTHREE <span>BUZZ.</span>
          </h1>
          <p className="sub">Let’s Touch Grass Together</p>
        </Header>
        <Slider />
        <p className="hero-desc">
          We’ve had something brewing!
          <br />
          It’s very exciting and worth anticipating. Now that the cat is out of
          the bag, please join us on our incredible journey. You snooze, you
          lose!
        </p>
        <Link to="/about" className="btn-link">
          Learn more about NFTNg
        </Link>
        <div className="down">
          <span>Scroll down</span>
          <img src={arrow} alt="" className="bounce" />
        </div>
      </Wrapper>
    </Container>
  );
};

export default HomeHeroSection;

const Container = styled.div`
  text-align: center;
  padding: 0;
  display: flex;
  flex-direction: row-reverse;
  text-align: left;
  position: relative;
  z-index: 2;
  height: calc(100vh - 65px);
  overflow: hidden;

  .bounce {
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-12px);
    }
    60% {
      transform: translateY(-8px);
    }
  }
`;

const BlurImg = styled.div`
  display: none;
  .green {
    position: absolute;
    top: 40%;
    left: 44%;
    width: 400px;
    height: 500px;
    z-index: -1;
    opacity: 14%;
    filter: blur(45px);
  }
  .orange1 {
    position: absolute;
    top: 40%;
    left: 40%;
    width: 440px;
    height: 390px;
    z-index: -2;
    opacity: 14%;
    filter: blur(45px);
  }
  .orange2 {
    position: absolute;
    top: 40%;
    left: 3%;
    width: 440px;
    height: 390px;
    z-index: -3;
    opacity: 14%;
    filter: blur(45px);
  }
  @media screen and (min-width: 600px) {
    display: block;
  }
`;

const Mouse = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  img {
    width: 18px;
  }

  .arrow-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    span {
      color: white;
      font-size: 14px;
      font-family: var(--Branding-sf-medium);
    }

    svg {
      width: 11px;
    }
  }
  @media screen and (min-width: 900px) {
    display: flex;
  }
`;

const Wrapper = styled.div`
  padding-top: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;

  .hero-desc,
  .sub {
    font-size: 16px;
    font-family: var(--Branding-sf-light);
    color: white;
  }
  .hero-desc {
    margin: 3vh 0;
    max-width: 700px;
  }
  .btn-link {
    font-size: 16px;
    padding: 14px;
  }
  .down {
    display: none;
    font-size: 13px;
    color: white;
    margin-top: 38px;
    font-family: var(--Branding-sf-medium);
    display: none;
    position: absolute;
    bottom: 80px;

    align-items: center;
  }
  @media screen and (max-width: 900px) {
    .down {
      display: flex;
      gap: 4px;
    }
    .btn-link {
      font-size: 14px;
    }
    .hero-desc,
    .sub {
      font-size: 14px;
    }
    .hero-desc {
      margin: 3vh 15px;
    }
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .calculator {
    font-size: 22px;
  }
  h1 {
    font-size: 6.5vh;
    font-family: var(--Neue-Helvetica-heavy);
    margin: 12px 0;
    span {
      color: white;
    }
  }

  @media screen and (max-width: 900px) {
    .calculator {
      font-size: 12px;
    }
    h1 {
      font-size: 24px;
      max-width: 300px;
    }
  }
`;
