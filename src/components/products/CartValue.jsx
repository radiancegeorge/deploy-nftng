import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CartContext } from "../../hooks/context";
import img from "../../img/Jacob.png";

const CartValue = ({item}) => {
  // console.log(item);
  const [quantity,setQuantity]=useState(1)

  const {handleAddToCart}=useContext(CartContext)
  return (
    <Container>
      <div className="remove" style={{cursorType:'pointer'}} onClick={()=>handleAddToCart(item)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.61462 17.6821H12.2941C16.1936 17.6821 17.7534 16.1223 17.7534 12.2228V7.54333C17.7534 3.6438 16.1936 2.08398 12.2941 2.08398H7.61462C3.71509 2.08398 2.15527 3.6438 2.15527 7.54333V12.2228C2.15527 16.1223 3.71509 17.6821 7.61462 17.6821Z"
            stroke="#A1D283"
            strokeWidth="1.16986"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5564 7.58232C12.8562 7.41074 11.1404 7.32495 9.43243 7.32495C8.41855 7.32495 7.40467 7.37954 6.39859 7.48093L5.35352 7.58232"
            stroke="#A1D283"
            strokeWidth="1.16986"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.16895 7.06745L8.27813 6.39673C8.35612 5.91318 8.41851 5.54663 9.28421 5.54663H10.6256C11.4913 5.54663 11.5537 5.92878 11.6317 6.39673L11.7409 7.05965"
            stroke="#A1D283"
            strokeWidth="1.16986"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.4567 7.64453L13.1213 12.7919C13.0667 13.5952 13.0199 14.2191 11.5927 14.2191H8.30929C6.88206 14.2191 6.83526 13.5952 6.78067 12.7919L6.44531 7.64453"
            stroke="#A1D283"
            strokeWidth="1.16986"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="label">Remove</span>
      </div>
      <Wrapper>
        <div className="img-wrap">
          <img src={item.images[0].url} alt="" />
          <span>{item.name}</span>
        </div>
        <div className="detail">
          <div className="name">
            <p className="label">Merch Name</p>
            <p className="value">{item.name}</p>
          </div>
          <div className="amount">
            <p className="label">Amount</p>
            <p className="value">NGN{item.price}</p>
          </div>
          <div className="values">
            <Sizes>
              <p className="label">Size Guide</p>
              <div className="sizes-wrap">
              {
                item.sizes.map(size=>(
                  <div className="select">
                  <label htmlFor={size}>{size}</label>
                  <input type="radio" name="" value={size} />
                </div>
                ))
              }  
              
              </div>
            </Sizes>
            <Quantity>
              <p className="label">Quantity</p>
              <div className="counter">
                <svg onClick={()=>setQuantity(quantity=>quantity>0?quantity-1:handleAddToCart(item))}
                  width="26"
                  height="27"
                  viewBox="0 0 26 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.394531"
                    y="0.800537"
                    width="25.3661"
                    height="25.3661"
                    rx="12.6831"
                    fill="white"
                    fillOpacity="0.15"
                  />
                  <line
                    x1="8.06348"
                    y1="12.8937"
                    x2="18.0919"
                    y2="12.8937"
                    stroke="white"
                    strokeWidth="1.17982"
                  />
                </svg>

                <div className="count">
                  <span>{quantity}</span>
                </div>

                <svg onClick={()=>setQuantity(quantity=>quantity+1)}
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.725586"
                    y="0.800537"
                    width="25.3661"
                    height="25.3661"
                    rx="12.6831"
                    fill="#A1D283"
                  />
                  <line
                    x1="13.6807"
                    y1="8.46948"
                    x2="13.6807"
                    y2="18.498"
                    stroke="black"
                    strokeWidth="1.17982"
                  />
                  <line
                    x1="8.39453"
                    y1="13.0158"
                    x2="18.423"
                    y2="13.0158"
                    stroke="black"
                    strokeWidth="1.17982"
                  />
                </svg>
              </div>
            </Quantity>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default CartValue;

const Container = styled.div`
  position: relative;
  .remove {
    position: absolute;
    top: 35px;
    right: 35px;
    display: flex;
    align-items: center;
    gap: 5px;
    span {
      font-size: 14px;
      margin: 0;
    }
    svg {
      width: 14px;
      height: 14px;
    }
  }
  .img-wrap {
    width: 135px;
    height: 190px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 10%;
      font-size: 10px;
      font-family: var(--roboto);
      font-weight: 500;
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .label {
    font-size: 12px;
    margin-bottom: 4px;
    font-family: var(--Branding-sf-light);
  }
  .value {
    font-size: 18px;
    font-family: var(--Branding-sf-bold);
    color: var(--primary-color);
  }

  .values {
    display: flex;
    align-items: center;
    gap: 50px;
  }
  @media screen and (max-width: 900px) {
    padding: 20px;
    background-color: black;
    height: 330px;
    .remove {
      top: 20px;
      right: 20px;
    }
    .img-wrap {
      width: 75px;
      height: 110px;
      span {
        font-size: 5px;
      }
    }
    .value {
      font-size: 14px;
    }
    .values {
      position: absolute;
      justify-content: space-between;
      bottom: 20px;
      left: 20px;
    }
  }
`;

const Wrapper = styled.div`
  border: 1px solid var(--primary-color);
  display: flex;
  padding: 35px;
  gap: 25px;
  @media screen and (max-width: 900px) {
    margin-top: 30px;
    padding: 15px;
    gap: 12px;
  }
`;

const Sizes = styled.div`
  input {
    display: none;
  }
  .sizes-wrap {
    display: flex;
    gap: 5px;
    margin-top: 5px;
  }

  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 30px;
    border: 1px solid #a1d28338;
    font-size: 8px;
  }
  @media screen and (max-width: 900px) {
    .sizes-wrap {
      display: grid;
      grid-template-columns: repeat(2, auto);
      grid-template-rows: repeat(2, auto);
    }
  }
`;

const Quantity = styled.div`
  .counter {
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .count {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 30px;
    font-size: 10px;
    font-family: var(--Branding-sf-light);
    border: 1px solid var(--primary-color);
  }
  svg {
    width: 25px;
    height: 25px;
  }
`;
