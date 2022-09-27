import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import life1 from "../../img/lifestyle1.jpg";
import life2 from "../../img/lifestyle2.jpg";
import life3 from "../../img/lifestyle3.jpg";

const LifeStyle = () => {
  return (
    <Container>
      <Wrapper>
        <Links>
          <div className="wrap">
            <h3>The NFT Orators</h3>
            <p>
              Creating a tight knit web3 community that will thrive off each
              other and bring value to the ecosystem.
            </p>
            <Link to="/event" className="btn-link">
              See Speakers
            </Link>
          </div>
          <div className="wrap">
            <h3>Building with Us</h3>
            <p>
              Creating a tight knit web3 community that will thrive off each
              other and bring value to the ecosystem.
            </p>
            <Link to="/event" className="btn-link">
              See Sponsors
            </Link>
          </div>
          <div className="wrap">
            <h3>The Nominess</h3>
            <p>
              Creating a tight knit web3 community that will thrive off each
              other and bring value to the ecosystem.
            </p>
            <Link to="/awards   " className="btn-link">
              See Nominees
            </Link>
          </div>
        </Links>
        <LifeStyled>
          <h3>Lifestyle</h3>
          <div className="img-wrapper">
            <img src={life1} alt="" />
            <img src={life2} alt="" />
            <img src={life3} alt="" />
          </div>
          <p>
            We have a variety of amazing stuff for attendees of the NFTNG event.
            To be a part of this spectacular, one-in-a-lifetime experience, book
            your spot
          </p>
          <Link to="/comingsoon" className="btn-link">
            Book Accomodation
          </Link>
        </LifeStyled>
      </Wrapper>
    </Container>
  );
};

export default LifeStyle;

const Container = styled.div`
  margin-bottom: 90px;
`;

const Wrapper = styled.div`
  h3 {
    font-size: 30px;
    color: white;
    font-family: var(--Branding-sf-bold);
  }
`;

const Links = styled.div`
  display: flex;
  gap: 0 5vw;
  justify-content: center;

  margin-bottom: 100px;
  .wrap {
    max-width: 300px;

    p {
      color: white;
      font-size: 14px;
      margin: 14px 0;
      font-family: var(--Branding-sf-light);
      line-height: 20px;
    }
    .btn-link {
      display: inline-block;
      text-align: center;
      font-size: 14px;
      width: 100%;
      padding: 14px 0;
      background-color: #252525;
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
    }
  }
`;

const LifeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    text-transform: uppercase;
    text-align: center;
  }

  .img-wrapper {
    display: flex;
    gap: 0 2vw;
    margin: 24px 0;
    justify-content: center;
    img {
      width: 340px;
      height: 220px;
    }
  }
  p {
    max-width: 700px;
    text-align: center;
    color: white;
    font-size: 16px;
    line-height: 35px;
    font-family: var(--Branding-sf-light);
  }
  .btn-link {
    text-align: center;
    margin-top: 40px;
    width: 100%;
    max-width: 360px;
    font-family: var(--inter);
    font-size: 16px;
    padding: 22px 0;
  }
`;
