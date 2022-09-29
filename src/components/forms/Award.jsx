import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../img/svg/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const Award = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [communityNumber, setCommunityNumber] = useState("");
  const [twitter, setTwitter] = useState("");
  const [discord, setDiscord] = useState("");
  const [website, setWebsite] = useState("");

  const handleMailto = () => {
    if (name && communityNumber && twitter && discord && website) {
      return `mailto:admin@nftng.com?subject=Partner Form&body=${`
      DAO: ${name}\n
      Community Number: ${communityNumber}\n
      Twitter: ${twitter}`}\n
      Discord: ${discord}
      Website: ${website}\n
      `;
    }
  };
  return (
    <Container>
      <div className="back" onClick={() => navigate(-1)}>
        <img src={arrow} alt="" />
        <p>Back</p>
      </div>
      <Wrapper>
        <Wrap>
          <h1>
            APPLY/ <span>Award</span>
          </h1>
          <Form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Name of the DAO*"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="How many Community Members do you have?*"
              value={communityNumber}
              onChange={(e) => setCommunityNumber(e.target.value)}
            />
            <input
              placeholder="Twitter Link*"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
            <input
              placeholder="Discord Link*"
              value={discord}
              onChange={(e) => setDiscord(e.target.value)}
            />
            <input
              placeholder="Website*"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <button
              type="submit"
              disabled={
                name && communityNumber && twitter && discord && website
                  ? false
                  : true
              }
            >
              {name && communityNumber && twitter && discord && website ? (
                <a href={handleMailto() || ""} target="_blank" rel="noreferrer">
                  Apply
                </a>
              ) : (
                "Apply"
              )}
            </button>
          </Form>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default Award;

const Container = styled.div`
  padding: 90px 120px 8vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #252525;

  .back {
    position: absolute;
    top: 18vh;
    left: 9vw;
    display: flex;
    align-items: center;
    gap: 5px;
    color: var(--primary-color);
    font-size: 16px;
    font-family: var(--Branding-sf-medium);
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    padding: 140px 20px 100px;
    height: fit-content;
    .back {
      top: 10vh;
      left: 20px;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 570px;
  height: fit-content;
  margin: 0 auto;
  h1 {
    font-size: 20px;
    margin-bottom: 20px;
    span {
      font-size: 18px;
      font-family: var(--Branding-sf-light);
    }
  }
`;

const Form = styled.form`
  input {
    padding: 12px;
    font-size: 16px;
    margin-bottom: 12px;
    border-radius: 6px;
    &::placeholder {
      font-size: 16px;
    }
  }
  a {
    color: black;
  }
  button {
    width: 100%;
    border-radius: 6px;
    padding: 10px 0;
    font-size: 18px;
  }
  @media screen and (max-width: 900px) {
    input {
      font-size: 12px;
      padding: 14px 8px;
      margin-bottom: 14px;
      border-radius: 0;
      &::placeholder {
        font-size: 12px;
      }
    }
    button {
      width: 100%;
    }
  }
`;
