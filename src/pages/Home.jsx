import React from "react";
import HomeHeroSection from "../components/home/HomeHeroSection";
import CountDown from "../components/home/CountDown";
import MissionSection from "../components/home/MissionSection";
import Video from "../components/home/Video";
import LifeStyle from "../components/home/LifeStyle";
import FaqSection from "../components/home/FaqSection";
// import Sponsers from "../components/home/Sponsers";
import Footer from "../components/Footer";
import styled from "styled-components";
// import ConnectWallet from "../components/wallet/ConnectWallet";
import ScrollToTop from "../components/home/ScrollToTop";

const Home = () => {
  return (
    <Container id="home">
      <HomeHeroSection />
      <CountDown />
      <Video />
      <MissionSection />
      <LifeStyle />
      <FaqSection />
      {/* <Sponsers /> */}
      <ScrollToTop />
      <Footer />
      {/* <ConnectWallet /> */}
    </Container>
  );
};

export default Home;

export const Container = styled.section`
  padding: 65px 0;
  position: relative;
  color: var(--primary-color);
  width: 100%;
  overflow-x: hidden;
`;
