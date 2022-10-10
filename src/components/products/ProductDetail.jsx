import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import arrow from "../../img/svg/arrow-left.svg";
import shopCart from "../../img/svg/shopping-cart.svg";
import Cart from "./Cart";
import { useNavigate, useLocation, Navigate, Link } from "react-router-dom";
import MerchandiseSection from "./MerchandiseSection";
// import CheckoutForm from "../forms/CheckoutForm";
import Checkout from "./Checkout";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [cartValue, setCartValue] = useState([]);

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
        <div className="nav">
          {pathname === "/products/merchandise" ? (
            <h1>
              Products/ <span>merchandise</span>
            </h1>
          ) : (
            <h1>Your cart</h1>
          )}

          <Link to="/products/cart">
            <div className="cart">
              <img src={shopCart} alt="" />
              {cartValue.length ? (
                <p>{cartValue.length} item added to your cart</p>
              ) : null}
            </div>
          </Link>
        </div>
        {pathname === "/products/merchandise" ? (
          <MerchandiseSection
            checkAvailability={checkAvailability}
            handleAddToCart={handleAddToCart}
            cartValue={cartValue}
          />
        ) : pathname === "/products/cart" ? (
          <Cart cart={cartValue} />
        ) : pathname === "/products/checkout" ? (
          <Checkout />
        ) : (
          <Navigate to="/not-found" />
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ProductDetail;

const Container = styled.div`
  padding: 10vh 5vw 8vh;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  background-color: #252525;

  .back {
    position: absolute;
    cursor: pointer;
    top: 18vh;
    left: 5vw;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
  }
  @media screen and (max-width: 900px) {
    height: fit-content;
    padding: 10vh 0 8vh;
    .back {
      top: 10vh;
      left: 20px;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 14vh 0;
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

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
        color: var(--primary-color);
        font-family: var(--Branding-sf-medium);
        width: 160px;
        font-size: 14px;
      }
    }
  }
  h1 {
    font-size: 24px;
    text-transform: uppercase;
    width: 100%;
    span {
      font-size: 20px;
      text-transform: lowercase;
      font-family: var(--Branding-sf-light);
      color: var(--primary-color);
    }
  }
  @media screen and (max-width: 900px) {
    margin: 5vh 0;
    padding: 0 20px;
    .nav {
      .cart {
        padding: 8px;
        img {
          width: 20px;
          height: 20px;
        }
        p {
          font-size: 10px;
          width: 80px;
        }
      }
    }
    h1 {
      font-size: 18px;
      span {
        font-size: 14px;
      }
    }
  }
`;
