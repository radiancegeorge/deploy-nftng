import React from "react";
import styled from "styled-components";
import { Container } from "./Home";
import ProductLists from "../components/products/ProductLists";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <AboutStyled>
      <div className="header">
        <h1>PRODUCTS</h1>
      </div>
      <ProductLists />
      <Footer />
    </AboutStyled>
  );
};

export default Products;

const AboutStyled = styled(Container)`
  position: relative;
  padding-bottom: 70px;
  .header {
    margin-top: 70px;
    margin-bottom: 40px;
    padding: 0 12vw;
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
