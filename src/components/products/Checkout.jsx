import React from "react";
import styled from "styled-components";

const Checkout = () => {
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Address>
            <span>edit</span>
            <h2>Address Details</h2>

            <div className="detail">
              <p>Adeyemo Nelson</p>
              <p>
                1b Adeyemi Ikorodu, Atisbo, Lagos
                <p>+2347058946099</p>
              </p>
              <p>steve32@gmail.com</p>
            </div>
          </Address>
          <Summary>
            <div className="s-wrap">
              <p>Subtotal</p>
              <span>N45,000</span>
            </div>
            <div className="s-wrap">
              <p>Delivery fee</p>
              <span>N5,000</span>
            </div>
            <div className="s-wrap">
              <p>Discount</p>
              <span className="discount">N5,000</span>
            </div>
            <hr />
            <div className="s-wrap">
              <p>Total</p>
              <span>N45,000</span>
            </div>
            <button>Confirm to pay</button>
          </Summary>
        </LeftWrapper>
        <RigthWrapper>
          <h2>Your Orders (4 items)</h2>
        </RigthWrapper>
      </Wrapper>
    </Container>
  );
};

export default Checkout;

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  gap: 8vw;
  p {
    font-family: var(--Branding-sf-light);
    font-size: 16px;
  }
`;

const LeftWrapper = styled.div`
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

const Address = styled.div`
  padding: 40px 32px;
  width: 100%;
  border: 1px solid var(--primary-color);
  position: relative;

  h2,
  span {
    font-size: 13px;
    font-family: var(--Branding-sf-bold);
    text-transform: uppercase;
  }
  span {
    position: absolute;
    top: 40px;
    right: 32px;
    cursor: pointer;
    text-transform: capitalize;
    color: var(--primary-color);
  }

  .detail {
    margin-top: 13px;
    display: flex;
    flex-direction: column;
    gap: 13px;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
  padding: 40px 32px;
  hr {
    border-color: rgba(161, 210, 131, 0.15);
  }
  .s-wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    p,
    span {
      font-size: 18px;
    }
    span {
      font-family: var(--Branding-sf-bold);
    }

    .discount {
      color: var(--primary-color);
    }
  }
  button {
    margin-top: 30px;
    font-size: 13px;
    padding: 16px;
    border-radius: 10px;
  }
`;

const RigthWrapper = styled.div`
  width: 50%;
  padding: 32px 26px;
  background-color: rgba(0, 0, 0, 0.26);
  h2 {
    font-size: 18px;
    color: var(--primary-color);
    font-family: var(--Branding-sf-bold);
    margin-bottom: 28px;
  }
`;
