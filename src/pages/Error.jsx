import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import notFound from "../img/svg/not-found.svg";
import oppBuzz from "../img/svg/opp-buzz.svg";
import comingSoon from "../img/svg/coming-soon.svg";
import Footer from "../components/Footer";

const Error = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Container>
      {location.pathname === "/opps-buzz" ? (
        <Wrapper>
          <img className="img-buzz" src={oppBuzz} alt="" />
          <p className="buzz">
            Opps you are not <br />
            <span>Buzz</span> Listed
          </p>
        </Wrapper>
      ) : location.pathname === "/coming-soon" ? (
        <Wrapper>
          <img src={comingSoon} alt="" />
          <p className="coming-soon">
            <span>COMING</span> SOON!
          </p>
        </Wrapper>
      ) : (
        <Wrapper>
          <img src={notFound} alt="" />
          <p>Seems what you are looking for is not here</p>
        </Wrapper>
      )}

      <Footer />
    </Container>
  );
};

export default Error;

const Container = styled.div`
  padding: 0 0 65px;
  position: relative;
  color: var(--primary-color);
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    padding-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  padding-top: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 460px;
  width: 100%;
  justify-content: center;

  img {
    width: 100%;
  }
  .img-buzz {
    max-width: 300px;
  }
  p {
    margin-top: 40px;
    font-size: 24px;
    color: white;
    text-align: center;

    font-family: var(--Branding-sf-bold);
    span {
      color: #a1d283;
    }
  }
  .coming-soon {
    font-size: 40px;
    font-family: var(--Neue-Helvetica-heavy);
  }

  .buzz {
    margin-top: 30px;
    font-size: 30px;
    font-family: var(--Neue-Helvetica-heavy);
  }

  @media screen and (max-width: 900px) {
    padding: 20vh 20px 0;
    img {
      max-width: 300px;
    }
    .img-buzz {
      width: 250px;
    }
    p {
      font-size: 16px;
    }
    .coming-soon {
      font-size: 28px;
    }
    .buzz {
      font-size: 22px;
    }
  }
`;
