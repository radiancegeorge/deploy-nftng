import React from "react";
import styled from "styled-components";
import mission1 from "../../img/svg/mission-1.svg";
import mission2 from "../../img/svg/mission-2.svg";
import mission3 from "../../img/svg/mission-3.svg";
import mission4 from "../../img/svg/mission-4.svg";

const MissionSection = () => {
  return (
    <Container>
      <h2>Buzz Target</h2>
      <Wrapper>
        <div className="wrap">
          <img src={mission1} alt="" />
          <div className="desc">
            <h3>01</h3>
            <p>
              To empower the next sets of builders, creatives, & thought leaders
              from the African community.
            </p>
          </div>
        </div>

        <div className="wrap">
          <img src={mission2} alt="" />
          <div className="desc">
            <h3>02</h3>
            <p>
              Bringing NFTs & blockchain technology to the attention of the
              mainstream audience & community.
            </p>
          </div>
        </div>

        <div className="wrap">
          <img src={mission3} alt="" />
          <div className="desc">
            <h3>03</h3>
            <p>
              Creating a tight knit web3 community that will thrive off each
              other and bring value to the ecosystem.
            </p>
          </div>
        </div>

        <div className="wrap">
          <img src={mission4} alt="" />
          <div className="desc">
            <h3>04</h3>
            <p>
              Enlightening the mainstream community of the endless opportunities
              that can be created with blockchain technology & the importance of
              mass adoption.
            </p>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default MissionSection;

const Container = styled.div`
  padding: 60px 154px;

  text-align: center;
  min-height: 100%;
  h2 {
    margin: 34px 0;
    color: white;
    margin: 15px 0;
  }

  @media screen and (max-width: 900px) {
    padding: 60px 20px 30px;
    h2 {
      font-size: 16px;
      margin: 26px 0;
    }
  }
`;

const Wrapper = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 500px);
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  gap: 4vw;
  .wrap:nth-child(1),
  .wrap:nth-child(4) {
    background-color: black;
  }

  .wrap:nth-child(2),
  .wrap:nth-child(3) {
    background-color: rgba(161, 210, 131, 0.1);
  }

  .wrap:nth-child(4),
  .wrap:nth-child(3) {
    img {
      width: 400px;
      z-index: 1;
      height: 500px;
    }
  }
  .wrap {
    border-radius: 12px;
    padding: 30px 32px;
    width: 100%;
    overflow: hidden;
    z-index: 2;
    height: 600px;
    position: relative;
    img {
      position: absolute;
      width: 350px;
      z-index: 1;
      height: 440px;
      bottom: -23%;
      left: 50%;
      transform: translateX(-50%);
    }

    .desc {
      width: 100%;
      max-width: 370px;
      height: 100%;
      text-align: left;
      h3 {
        font-size: 60px;
        margin-bottom: 18px;
      }
      p {
        font-family: var(--Branding-sf-medium);
        font-size: 18px;
        color: white;
        line-height: 22px;
      }
    }
  }
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 28px;

    .wrap:nth-child(4),
    .wrap:nth-child(3) {
      img {
        width: 240px;
        z-index: 1;
        height: 290px;
      }
    }

    .wrap {
      height: 400px;
      padding: 22px 30px;
      img {
        width: 210px;
        height: 280px;
      }
      .desc {
        h3 {
          font-size: 50px;
        }
        p {
          font-size: 14px;
        }
      }
    }

    .wrap:nth-child(odd) {
      background-color: black;
    }
    .wrap:nth-child(even) {
      background-color: rgba(161, 210, 131, 0.1);
    }
  }
`;
