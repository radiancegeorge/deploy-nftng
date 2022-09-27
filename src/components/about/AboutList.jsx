import React from "react";
import styled from "styled-components";
import glass from "../../img/svg/glass.svg";
import people from "../../img/svg/people.svg";
import flag from "../../img/svg/flag.svg";
import twitter from "../../img/svg/twitter-white.svg";
import { coreTeam, otherTeam } from "../../data/teamData";

const AboutList = () => {
  return (
    <Container>
      <Wrapper>
        <Wrap id="mission">
          <div className="about-header">
            <img src={flag} alt="" />
            <h2>Mission</h2>
          </div>
          <p>
            Bringing together digital creators, developers, thought leaders and
            other Web3 enthusiasts in the African Space and empowering them with
            opportunities to thrive on a global scale.
          </p>
        </Wrap>
        <Wrap id="vision">
          <div className="about-header">
            <img src={glass} alt="" />
            <h2>Vision</h2>
          </div>
          <p>
            Empower the next sets of builders, creatives, and thought leaders
            from the African community. Bring NFTs and blockchain technology to
            the attention of the mainstream audience and community. Create a
            tight-knit web3 community that will thrive off each other and bring
            value to the ecosystem. Enlighten the mainstream community about the
            endless opportunities that can be created with blockchain technology
            and the importance of mass adoption.
          </p>
        </Wrap>
        <Wrap id="team">
          <div className="about-header">
            <img src={people} alt="" />
            <h2>Team</h2>
          </div>
          <p>
            Our Team consist of passionate and experienced blockchain
            enthusiasts with a shared vision of fostering Web3 adoption and
            empowering the next set of builders, creatives and thought leaders
            in the African Web3 Community. Meet our Team:
          </p>
          <TeamWrapper>
            <h2>Core Team</h2>
            <GridWrapper>
              {coreTeam.map((data) => (
                <div className="wrap" key={data.id}>
                  <img src={data.img} alt="" />
                  <div className="team-desc">
                    <p className="name">{data.name}</p>
                    <p className="role">{data.role}</p>
                  </div>
                  <a href={data.social} target="_blank" rel="noreferrer">
                    <img src={twitter} alt="" />
                  </a>
                </div>
              ))}
            </GridWrapper>
          </TeamWrapper>
          <TeamWrapper>
            <h2>Other Team</h2>
            <GridWrapper>
              {otherTeam.map((data) => (
                <div className="wrap" key={data.id}>
                  <img src={data.img} alt="" />
                  <div className="team-desc">
                    <p className="name">{data.name}</p>
                    <p className="role">{data.role}</p>
                  </div>
                  <a href={data.social} target="_blank" rel="noreferrer">
                    <img src={twitter} alt="" />
                  </a>
                </div>
              ))}
            </GridWrapper>
          </TeamWrapper>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default AboutList;

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

  .about-header {
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
    span {
      color: rgba(183, 183, 183, 0.52);
    }
  }
  p {
    margin: 14px 0 0;
    font-size: 16px;
    font-family: var(--Branding-sf-light);
    color: white;
    line-height: 27px;
    word-spacing: 2px;
  }
`;

const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
  h2 {
    color: #fff;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.2vw;

  .wrap {
    border: 1px solid var(--primary-color);
    border-radius: 8px;
    overflow: hidden;
    width: 100%;
    height: 40vh;
    position: relative;
    img {
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    a {
      position: absolute;
      right: 25px;
      z-index: 5;
      bottom: 25px;
      img {
        width: 14px;
        height: 14px;
      }
    }
  }

  .team-desc {
    position: absolute;
    z-index: 2;
    bottom: 0;
    padding: 10px 15px;
    left: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    p {
      margin: 0;
      padding: 0;
      font-family: var(--roboto);
      line-height: 18px;
    }

    .name {
      font-size: 15px;
      font-weight: 500;
    }
    .role {
      font-size: 9px;
      font-weight: 400;
    }
  }
`;
