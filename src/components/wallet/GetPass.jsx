import React from "react";
import styled from "styled-components";
import opensea from "../../img/openseas.png";
import close from "../../img/svg/close-circle-white.svg";

const GetPass = ({ handler }) => {
  return (
    <Wrapper>
      <div className="top">
        <p>NFTPass Here</p>
        <img src={close} alt="" onClick={handler} />
      </div>
      <div className="opensea">
        <a
          href="https://opensea.io/collection/nftng-pass"
          target="_blank"
          rel="noreferrer"
        >
          <img src={opensea} alt="" />
        </a>
      </div>
    </Wrapper>
  );
};

export default GetPass;

const Wrapper = styled.div`
  width: 460px;
  height: 320px;
  padding: 34px 28px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--primary-color);
  background-color: rgba(0, 0, 0, 0.6);
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

  @media screen and (max-width: 900px) {
    height: 260px;
    width: 320px;
    padding: 22px;
    p {
      font-size: 14px;
    }
    .top {
    }
    .opensea {
      margin-top: 20px;
    }
  }
`;
