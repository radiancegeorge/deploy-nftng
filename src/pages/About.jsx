import React from "react";
import styled from "styled-components";
import AboutList from "../components/about/AboutList";
import Footer from "../components/Footer";
import QuickLinks from "../components/about/QuickLinks";
import { Container } from "./Home";

const About = () => {
  return (
    <Contaoner>
      <div className="header">
        <h1>ABOUT US</h1>
      </div>
      <AboutList />
      <Footer />
      <QuickLinks />
    </Contaoner>
  );
};

export default About;

const Contaoner = styled(Container)`
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
`;
