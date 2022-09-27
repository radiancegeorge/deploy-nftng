import React from "react";
import styled from "styled-components";
import celebration from "../../img/svg/celebration1.svg";
import { Link } from "react-router-dom";

const CountDown = () => {
  return (
    <Container>
      <Wrapper>
        <TimeWrap>
          <p>
            <span className="days">00</span>:<span className="hours">00</span>:
            <span className="mins">00</span>:<span className="sec">00</span>
          </p>
        </TimeWrap>
        <Link to="/comingsoon" className="btn-link">
          Mint NftNg Pass
          <img src={celebration} alt="" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default CountDown;

const Container = styled.div`
  width: 100%;
  padding: 70px 0 40px;
  @media screen and (max-width: 900px) {
    padding-top: 40px;
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
    button,
    .btn-link {
      font-size: 12px;
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
