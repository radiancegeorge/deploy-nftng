import React from "react";
import styled from "styled-components";
import lightCart from "../../img/svg/light-cart-wrapped.svg";
import darkCart from "../../img/svg/dark-cart-wrapped.svg";

const Merch = ({ image, data, onAdd, checkAvailability, admin }) => {
  const added = checkAvailability();
  return (
    <Container image={image}>
      <Wrapper>
        <Cart>
          <img src={added ? darkCart : lightCart} alt="" />
        </Cart>
        <div className="content">
          <div className="desc">
            <p className="name">{data.name}</p>
            <p className="price">${data.price}</p>
          </div>
          <button onClick={() => onAdd(data)}>
            {admin ? "Edit" : "Add to Cart"}
          </button>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Merch;

const Container = styled.div`
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    ${(p) => `url("${p.image}")`};
  height: 50vh;
  border: 1px solid var(--primary-color);
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 900px) {
    height: 380px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  .content {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
  .desc {
    font-family: var(--roboto);
    line-height: 25px;
    .name {
      font-size: 20px;
      font-weight: 500;
    }
    .price {
      font-size: 12px;
      color: var(--primary-color);
      font-weight: 700;
    }
  }
  button {
    font-size: 12px;
    padding: 10px;
  }
  @media screen and (max-width: 900px) {
    height: 380px;
  }
`;

const Cart = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  img {
    width: 30px;
    height: 30px;
  }
`;
