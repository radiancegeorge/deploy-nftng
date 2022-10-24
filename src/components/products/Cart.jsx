import React from "react";
import styled from "styled-components";
import CartValue from "./CartValue";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart }) => {
  const navigate = useNavigate();

  console.log(cart);
  return (
    <Container>
      {cart.length ? (
        <Wrapper>
          <LeftWrap>
            {/* <CartValue />
            <CartValue /> */}{
              cart?.map(item=>{
                <CartValue item={item}/>
              })
            }
          </LeftWrap>
          <RightWrap>
            <div className="summary">
              <p className="value">Cart Summary</p>
              <hr />
              <div className="s-desc">
                <div className="sub-desc">
                  <p>Subtotal</p>
                  <p className="label">Delivery fees not included yet.</p>
                </div>
                <p className="value">NGN30,000</p>
              </div>
              <button onClick={() => navigate("/products/checkout")}>
                Checkout (NGN30,000)
              </button>
            </div>
          </RightWrap>
        </Wrapper>
      ) : (
        <Message>
          <div className="m-wrap">
            <p>
              You have no item in your cart kindly add some item from the merch
              section
            </p>
            <button onClick={() => navigate("/products/merchandise")}>
              Add items
            </button>
          </div>
        </Message>
      )}
    </Container>
  );
};

export default Cart;

const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  @media screen and (max-width: 900px) {
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8vw;
  justify-content: space-between;
  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftWrap = styled.div`
  display: flex;
  background-color: black;
  padding: 30px;
  width: 100%;
  flex-direction: column;
  gap: 30px;
  @media screen and (max-width: 900px) {
    background-color: transparent;
    padding: 0;
  }
`;

const RightWrap = styled.div`
  .value {
    font-size: 18px;
    font-family: var(--Branding-sf-bold);
    color: var(--primary-color);
  }
  .summary {
    width: 400px;
    padding: 30px;
    background-color: #00000042;

    hr {
      border: 1px solid #ffffff0d;
      margin: 12px 0 20px;
    }
  }
  .s-desc {
    display: flex;
    justify-content: space-between;
  }
  .sub-desc {
    display: flex;
    flex-direction: column;
    gap: 12px;
    p {
      font-size: 14px;
      font-family: var(--Branding-sf-medium);
    }
    .label {
      font-size: 12px;
      font-family: var(--Branding-sf-light);
    }
  }
  button {
    margin-top: 20px;
    width: 100%;
    font-size: 14px;
    padding: 16px;
  }
  @media screen and (max-width: 900px) {
    .summary {
      width: 100%;
      padding: 26px 22px;
    }
    hr {
      margin: 10px 0 18px;
    }

    .value {
      font-size: 14px;
    }

    .sub-desc {
      p {
        font-size: 12px;
      }
    }
    button {
      font-size: 14px;
    }
  }
`;

const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  .m-wrap {
    width: 100%;
    margin: 0 10vw;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.31);
    gap: 30px;
    text-align: center;

    p {
      color: var(--primary-color);
      max-width: 400px;
      font-size: 16px;
      font-family: var(--inter);
    }
    button {
      width: 210px;
      font-size: 13px;
      padding: 16px;
    }
  }
`;
