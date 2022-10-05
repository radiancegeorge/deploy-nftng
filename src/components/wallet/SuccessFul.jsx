import React from "react";
import { useNavigate } from "react-router-dom/dist";
import styled from "styled-components";
import celebration1 from "../../img/svg/celebration1.svg";
import celebration2 from "../../img/svg/celebration2.svg";

const SuccessFul = () => {
  const navigate= useNavigate()
  return (
    <Container>
      <Wrapper>
        <p className="calculator">YAY!!!</p>
        <div className="img-wrap">
          <img src={celebration1} alt="" />
          <img src={celebration2} alt="" />
        </div>
        <p className="desc">Minted Successfully</p>
        <button onClick={()=>navigate('/')}>Yes, take me back</button>
      </Wrapper>
    </Container>
  );
};

export default SuccessFul;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 460px;
  padding: 60px;
  border: 1px solid #a1d283;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    background: transparent;
    border: 0;
    padding: 30px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  .calculator {
    font-size: 30px;
    color: white;
    margin-bottom: 18px;
  }
  .img-wrap {
    img {
      width: 60px;
      height: 60px;
    }
  }
  .desc {
    color: white;
    font-size: 22px;
    font-family: var(--Branding-sf-bold);
    margin: 12px 0 18px;
  }
  button {
    width: 100%;
    padding: 14px;
    border-radius: 6px;
    font-size: 14px;
  }

  @media screen and (max-width: 900px) {
    .calculator {
      font-size: 20px;
    }
    .img-wrap {
      img {
        width: 45px;
        height: 45px;
      }
    }
    .desc {
      font-size: 16px;
    }
    button {
      border-radius: 0;
    }
  }
`;
