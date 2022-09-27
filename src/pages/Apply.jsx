import React from "react";
import { Container } from "./Home";
import styled from "styled-components";
import ApplyList from "../components/apply/ApplyList";
import QuickLinks from "../components/apply/QuickLinks";
import Footer from "../components/Footer";

const Apply = () => {
  return (
    <ApplyStyled>
      <div className="header">
        <h1>Apply</h1>
      </div>
      <ApplyList />
      <Footer />
      <QuickLinks />
    </ApplyStyled>
  );
};

export default Apply;

const ApplyStyled = styled(Container)`
  position: relative;
  padding-bottom: 70px;
  .header {
    margin-top: 70px;
    margin-bottom: 40px;
    padding: 0 120px;
    text-transform: uppercase;
    color: white;
    h1 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 900px) {
    .header {
      margin-top: 28px;
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
