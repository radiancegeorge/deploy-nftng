import React from "react";
import styled from "styled-components";
import crown from "../../img/svg/crown.svg";
import profile from "../../img/svg/profile.svg";
import microphone from "../../img/svg/microphone.svg";
import people from "../../img/svg/people.svg";
import { Link } from "react-router-dom";

const ApplyList = () => {
  return (
    <Container>
      <Wrapper>
        <Wrap id="award">
          <div className="apply-header">
            <img src={crown} alt="" />
            <h2>
              Award <span>Nominees</span>
            </h2>
          </div>
          <p>
            The Webthree Buzz event will include an award session for reputable
            Web3 figures. Awardees must have shown evidence of driving ideas
            that are good for the Web3 space, making an impact in the web3
            community, or building/contributing to impactful web3 projects. To
            nominate yourself or someone who fits into the criteria as an
            awardee, fill this form.
          </p>
          <Link to="/apply/award" className="btn-link">
            Be a nominee
          </Link>
        </Wrap>
        <Wrap id="speaker">
          <div className="apply-header">
            <img src={microphone} alt="" />
            <h2>Speaker</h2>
          </div>
          <p>
            The Webthree Buzz event (and other NFTNG events) will entail
            informative sessions from seasoned speakers. Prospective speakers
            must have shown expertise in the respective aspects of Web3
            (including NFTs, DeFi, Gaming, Metaverse, Digital Art, Mining,
            Venture Capitalism) they will be speaking on. To nominate yourself
            or someone who fits into the criteria as a speaker, fill this form.
          </p>
          <Link to="/apply/speaker" className="btn-link">
            Be a speaker now
          </Link>
        </Wrap>
        <Wrap id="volunteer">
          <div className="apply-header">
            <img src={people} alt="" />
            <h2>Volunteer</h2>
          </div>
          <p>
            NFTNG volunteer service program is geared towards providing skillful
            Web3 individuals with a platform to sharpen their skills and gain
            positive connections. Volunteers must be skillful in any of
            protocol/ushering, media (photography, graphics & animations,
            others), technical management, content creation, or public
            relations, and be willing to contribute to NFTNG. If you would like
            to volunteer for NFTNG, kindly fill this form.
          </p>
          <Link to="/apply/volunter" className="btn-link">
            Volunteer for NFTng
          </Link>
        </Wrap>
        <Wrap id="sponsor">
          <div className="apply-header">
            <img src={profile} alt="" />
            <h2>Sponsor</h2>
          </div>
          <p>
            NFTNG seeks sponsors for its Webthree Buzz event and the development
            and implementation of its numerous utilities. To sponsor the
            Webthree Buzz event or any of NFTNG events/products, please contact
          </p>
          <Link to="/apply/sponser" className="btn-link">
            Be a sponsor now
          </Link>
        </Wrap>
        <Wrap id="partner">
          <div className="apply-header">
            <img src={profile} alt="" />
            <h2>Partner</h2>
          </div>
          <p>
            NFTNG seeks partners to form positive alliance with in the
            implementation of its mission. For more information on the
            opportunity to become a NFTNG partner, please contact
          </p>
          <Link to="/apply/partner" className="btn-link">
            Become a partner
          </Link>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default ApplyList;

const Container = styled.div`
  position: relative;
  padding: 0 120px;
  margin-bottom: 120px;
`;

const Wrapper = styled.div`
  padding-right: 15vw;
`;

const Wrap = styled.div`
  width: 100%;
  padding: 45px 30px;

  margin-bottom: 20px;
  &:nth-child(odd) {
    background-color: black;
  }
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.08);
  }

  .apply-header {
    margin: 0;
    padding: 0;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    img {
      width: 50px;
      height: 50px;
    }
  }
  h2 {
    color: var(--primary-color);
    font-size: 24px;
    text-transform: uppercase;
    span {
      color: rgba(183, 183, 183, 0.52);
    }
  }
  p {
    margin: 14px 0 24px;
    font-size: 16px;
    font-family: var(--Branding-sf-light);
    color: white;
    line-height: 27px;
    word-spacing: 2px;
  }
  button,
  .btn-link {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-family: var(--inter);
    padding: 17px 0;
    width: 100%;
    max-width: 220px;
    border-radius: 8px;
  }
`;
