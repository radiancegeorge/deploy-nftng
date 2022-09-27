import React from "react";
import styled from "styled-components";
import { Container } from "./Home";
import FaqList from "../components/faq/FaqList";
import QuickLinks from "../components/faq/QuickLists";
import Footer from "../components/Footer";

const Faq = () => {
  return (
    <FaqStyled>
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
`;
