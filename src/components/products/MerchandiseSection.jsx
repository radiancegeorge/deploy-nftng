import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import arrow from "../../img/svg/arrow-left.svg";
import shopCart from "../../img/svg/shopping-cart.svg";
import jacob from "../../img/Jacob.png";
import Merch from "./Merch";
import { useNavigate } from "react-router-dom";
import { merchsData } from "../../data/merchsData";

const MerchandiseSection = () => {
  const [cartValue, setCartValue] = useState([]);

  const navigate = useNavigate();

  const handleAddToCart = (data) => {
    const exist = cartValue.some((d) => d.id === data.id);
    if (exist) {
      setCartValue(cartValue.filter((d) => d !== data));
    } else {
      setCartValue([...cartValue, data]);
    }
  };

  const checkAvailability = (val) => {
    return cartValue.some((arrVal) => val === arrVal);
  };

  return (
    <Container>
      <div className="back" onClick={() => navigate(-1)}>
        <img src={arrow} alt="" />
        <p>Back</p>
      </div>
      <Wrapper>
        <Wrap>
          <div className="nav">
            <h1>
              Products/ <span>merchandise</span>
            </h1>
            <div className="cart">
              <img src={shopCart} alt="" />
              {cartValue.length ? (
                <p>{cartValue.length} item added to your cart</p>
              ) : null}
            </div>
          </div>
          <GridWrapper>
            {merchsData.map((data) => (
              <Merch
                onAdd={handleAddToCart}
                key={data.id}
                image={jacob}
                data={data}
                checkAvailability={checkAvailability}
              />
            ))}
          </GridWrapper>
        </Wrap>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default MerchandiseSection;

const Container = styled.div`
  padding: 10vh 5vw 8vh;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  width: 100%;
  min-height: 100vh;
  background-color: #252525;

  .back {
    position: absolute;
    top: 18vh;
    left: 5vw;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 14vh 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100%;
  height: fit-content;
  margin: 0 auto;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart {
      width: fit-content;
      padding: 11px;
      display: flex;
      gap: 12px;
      justify-content: center;
      align-items: center;
      background-color: #a1d2832e;
      border-radius: 23px;
      img {
        width: 24px;
        height: 24px;
      }
      p {
        font-family: var(--Branding-sf-medium);
        font-size: 14px;
      }
    }
  }
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    span {
      font-size: 20px;
      font-family: var(--Branding-sf-light);
      color: var(--primary-color);
    }
  }
`;

const GridWrapper = styled.div`
  margin-top: 30px;
  padding: 40px 60px;
  background-color: #0000004f;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto);
  gap: 0 30px;
`;
