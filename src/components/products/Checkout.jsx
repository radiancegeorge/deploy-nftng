import React, { useContext } from "react";
import styled from "styled-components";
import jacob from "../../img/Jacob.png";
import { useNavigate } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";
import { CartContext } from "../../hooks/context";


const Checkout = () => {

  const {total,order}=useContext(CartContext)
   console.log(order);
  const navigate = useNavigate();
  const paystack= new PaystackPop()
  const testkey='pk_test_f111edd46517cecd2a5879f3466ceb851a7f48d9'
  const initiateTransaction=()=>{
    paystack.newTransaction({
      amount: order?.totalAmount *100,
      email: order.email,
      key: testkey,
      metadata: {
        "orderId":order.id
    },
       onSuccess:()=>navigate("/products/successful")
    })
  }
  return (
    <Container>
      <Wrapper>
        <LeftWrapper>
          <Address>
            <span>edit</span>
            <h2>Address Details</h2>

            <div className="detail">
              <p>{order?.firstName + " " + order?.lastName}</p>
              <p>
                {order?.address} {order?.state}
                <p>{order?.phoneNumber}</p>
              </p>
              <p>{order?.email}</p>
            </div>
          </Address>
          <Summary>
            <div className="s-wrap">
              <p>Subtotal</p>
              <span>N{total}</span>
            </div>
            <div className="s-wrap">
              <p>Delivery fee</p>
              <span>N{order.deliveryFee}</span>
            </div>
            <div className="s-wrap">
              <p>Discount</p>
              <span className="discount">N{order?.discountToken}</span>
            </div>
            <hr />
            <div className="s-wrap">
              <p>Total</p>
              <span>N{order?.totalAmount}</span>
            </div>
            <button onClick={() => initiateTransaction()}>
              Confirm to pay
            </button>
          </Summary>
        </LeftWrapper>
        <RigthWrapper>
          <h2>Your Orders (4 items)</h2>
          <RightWrap>
            <div className="r-wrap">
              <div className="img-wrap">
                <img src={jacob} alt="" />
              </div>
              <div className="r-desc">
                <p>NftNg Hoodies</p>
                <p>NGN 5000</p>
                <p>Qty: 1</p>
              </div>
            </div>
            <div className="r-wrap">
              <div className="img-wrap">
                <img src={jacob} alt="" />
              </div>
              <div className="r-desc">
                <p>NftNg Hoodies</p>
                <p>NGN 5000</p>
                <p>Qty: 1</p>
              </div>
            </div>
          </RightWrap>
          <button onClick={() => navigate("/products/cart")}>
            Modify cart
          </button>
        </RigthWrapper>
      </Wrapper>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8vw;
  p {
    font-family: var(--Branding-sf-light);
    font-size: 16px;
  }

  @media screen and (max-width: 900px) {
    gap: 0;
    flex-direction: column-reverse;
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
  @media screen and (max-width: 900px) {
    background-color: rgba(9, 9, 9, 1);
    border: none;
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
  @media screen and (max-width: 900px) {
    background-color: rgba(9, 9, 9, 1);
  }
`;

const RigthWrapper = styled.div`
  width: 50%;
  padding: 32px 26px;
  height: fit-content;
  background-color: rgba(0, 0, 0, 0.26);
  h2 {
    font-size: 18px;
    color: var(--primary-color);
    font-family: var(--Branding-sf-bold);
    margin-bottom: 28px;
  }
  button {
    margin-top: 18px;
    width: 100%;
    padding: 18px;
    background-color: transparent;
    color: var(--primary-color);
    font-size: 14px;
    border: 1px solid var(--primary-color);
    border-radius: 8px;
  }
  @media screen and (max-width: 900px) {
    width: 100%;
    margin-bottom: 28px;
    background-color: rgba(9, 9, 9, 1);
  }
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  .r-wrap {
    display: flex;
    gap: 26px;
  }
  .img-wrap {
    width: 80px;
    height: 110px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .r-desc {
    display: flex;
    flex-direction: column;
    gap: 10px;
    p:nth-child(1) {
      font-size: 14px;
    }

    p:nth-child(2),
    p:nth-child(3) {
      font-size: 12px;
    }

    p:nth-child(1),
    p:nth-child(2) {
      font-family: var(--Branding-sf-bold);
    }

    p:nth-child(2) {
      color: var(--primary-color);
    }
  }
`;
