import React from "react";
import styled from "styled-components";
import { Container } from "./Home";
import arrow from "../img/svg/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import FaqList from "../components/faq/FaqList";
import QuickLinks from "../components/faq/QuickLists";
import Footer from "../components/Footer";

const Faq = () => {
  const navigate = useNavigate();
  return (
    <FaqStyled>
      <div className="back" onClick={() => navigate(-1)}>
        <img src={arrow} alt="" />
        <p>Back</p>
      </div>
      <div className="header">
        <h1>
          FAQ<span>s</span>
        </h1>
      </div>
      <FaqList />
      <QuickLinks />
      <Footer />
    </FaqStyled>
  );
};

export default Faq;

const FaqStyled = styled(Container)`
  position: relative;
  padding-bottom: 50px;
  .header {
    margin-top: 70px;
    margin-bottom: 32px;
    padding: 0 7vw;
    text-transform: uppercase;
    color: white;
    h1 {
      font-size: 36px;
      span {
        text-transform: lowercase;
      }
    }
  }
  .back {
    position: absolute;
    top: 90px;
    left: 20px;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
    cursor: pointer;
    display: none;
  }
  @media screen and (max-width: 900px) {
    .back {
      display: flex;
    }
    .header {
      margin-bottom: 28px;
      padding: 0 20px;
      text-transform: uppercase;
      color: white;
      h1 {
        font-size: 18px;
      }
    }
  }
`;
