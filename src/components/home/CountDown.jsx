import React, { useState } from "react";
import styled from "styled-components";
import celebration from "../../img/svg/celebration1.svg";
import { Link } from "react-router-dom";
import { useCountdown } from "../../utils/useCountdown";
import ConnectWallet from "../wallet/ConnectWallet";

const CountDown = () => {
  const { days, hours, mins, secs } = useCountdown();
  const [wallet,setWallet]=useState(false)
  return (
    <Container>
      <Wrapper>
       {wallet && <ConnectWallet close={()=>setWallet(!wallet)}/>}
        <TimeWrap>
          <p>
            <span className="days">{days}</span>:
            <span className="hours">{hours}</span>:
            <span className="mins">{mins}</span>:
            <span className="sec">{secs}</span>
          </p>
        </TimeWrap>
        <button onClick={()=>setWallet(true)} className="btn-link">
          Mint NftNg Pass
          <img src={celebration} alt="" />
        </button>
      </Wrapper>
    </Container>
  );
};

export default CountDown;

const Container = styled.div`
  width: 100%;
  padding: 70px 0 40px;
  @media screen and (max-width: 900px) {
    padding-top: 30px;
  }
`;

const Wrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button,
  .btn-link {
    margin-top: 60px;
    font-size: 15px;
    width: 460px;
    font-family: var(--inter);
    font-weight: 700;
    padding: 20px 0;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    img {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (max-width: 900px) {
    padding: 0 20px;
    width: 100%;
    align-items: center;
    button,
    .btn-link {
      margin-top: 40px;
      font-size: 12px;
      width: 100%;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const TimeWrap = styled.div`
  color: white;

  p {
    font-size: 64px;
    font-family: var(--inter);
    font-weight: 700;
    letter-spacing: 6px;
  }
  span {
    position: relative;
  }
  span::before {
    position: absolute;
    font-size: 10px;
    bottom: -7px;
    letter-spacing: 3px;
    left: 50%;
    text-transform: uppercase;
    transform: translateX(-50%);
  }
  .hours::before {
    content: "Hours";
  }
  .mins::before {
    content: "Minutes";
  }
  .days::before {
    content: "Days";
  }
  .sec::before {
    content: "Second";
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 37px;
    }
    span::before {
      font-size: 6px;
    }
  }
`;
