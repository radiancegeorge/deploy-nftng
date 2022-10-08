import React, { useState } from "react";
import styled from "styled-components";
import cloth from "../../img/svg/cloth.svg";
import money from "../../img/svg/money.svg";
import { Link } from "react-router-dom";
import GetPass from "../wallet/GetPass";

const ProductLists = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Container>
        {toggle && (
          <ToggleWrap>
            <GetPass handler={() => setToggle(false)} />
          </ToggleWrap>
        )}

        <Wrapper>
          <Wrap id="sponsor">
            <div className="apply-header">
              <img src={cloth} alt="" />
              <h2>Merchandise</h2>
            </div>
            <p>
              The NFTNG merchandise is a collection of merch (T-shirts, Hoodies,
              Stickers, Button pins and Caps) representing the African culture,
              the rich way of life of the people and the creativity present in
              the African Web3 Space. With these merch, users can proudly
              symbolize their membership of both the NFTNG and African Web3
              Communities. Holders of the NFTNG pass get early priority access
              to the merchandise at discounted prices.
            </p>
            <Link to="/coming-soon" className="btn-link">
              Get merch
            </Link>
          </Wrap>
          <Wrap id="sponsor">
            <div className="apply-header">
              <img src={money} alt="" />
              <h2>Get Pass</h2>
            </div>
            <p>
              The NFTNG pass is the main utility of the NFTNG Project. This pass
              grants holders exclusive access to the Webthree Buzz event (first
              of its kind exclusive web3 event holding in Lagos, Nigeria in
              November, 2022) and other events by NFTNG. The pass also gives
              holders priority access to NFTNG Merchandise at discounted prices.
              Furthermore, it affords holders early access to other
              products/utilities by the NFTNG team.
            </p>
            <button onClick={() => setToggle(true)}>Get pass</button>
          </Wrap>
        </Wrapper>
      </Container>
    </>
  );
};

export default ProductLists;

const Container = styled.div`
  position: relative;
  padding: 0 12vw;
  margin-bottom: 150px;
  @media screen and (max-width: 900px) {
    margin-bottom: 60px;
    padding: 0 20px;
  }
`;

const Wrapper = styled.div``;
const ToggleWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100%;
  padding: 45px 30px;

  margin-bottom: 20px;
  &:nth-child(odd) {
    background-color: black;
  }
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .apply-header {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  h2 {
    color: var(--primary-color);
    font-size: 24px;
    span {
      color: rgba(183, 183, 183, 0.52);
    }
  }
  p {
    margin: 14px 0 24px;
    font-size: 16px;
    font-family: var(--Branding-sf-light);
    color: white;
    line-height: 27px;
    word-spacing: 2px;
  }
  button,
  .btn-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: var(--inter);
    padding: 17px 0;
    width: 100%;
    max-width: 220px;
    border-radius: 8px;
  }
  @media screen and (max-width: 900px) {
    padding: 38px 20px 20px;
    margin-bottom: 28px;
    .apply-header {
      img {
        width: 34px;
        height: 34px;
      }
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      line-height: 22px;
    }

    .btn-link,
    button {
      max-width: 100%;

      border-radius: 0;
    }
  }
`;
