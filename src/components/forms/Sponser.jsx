import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../img/svg/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const Sponser = () => {
  const navigate = useNavigate();
  const [inputFocus, setInputFocus] = useState(false);

  const onFocus = () => setInputFocus(true);
  const onBlur = () => setInputFocus(false);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [company, setConpany] = useState("");
  const [website, setWebsite] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleMailto = () => {
    if (website && first && last && company && number && email) {
      return `mailto:momohkingsley@nftng.com?subject=Sponser Form&body=${`firstname: ${first}\n
      lastname: ${last}}\n
      company: ${company}\n
      number: +234${number}`}\n
      Website: ${website}\n
      email: ${email}
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
            APPLY/ <span>Sponsor</span>
          </h1>
          <p>
            We’ve had something brewing… It’s very exciting and worth
            anticipating. Now that the cat is out of the bag, please join us on
            our incredible journey you snooze, you lose.{" "}
          </p>
          <Form onSubmit={(e) => e.preventDefault()} inputFocus={inputFocus}>
            <div className="name">
              <input
                type="text"
                placeholder="First Name"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
              />
              <input
                type="text"
                placeholder="Last Name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
              />
            </div>
            <input
              placeholder="Company name/project"
              value={company}
              onChange={(e) => setConpany(e.target.value)}
            />
            <input
              placeholder="Website of company/project"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
            <div className="number">
              <span>+234</span>
              <input
                type="text"
                placeholder="Enter phone number"
                onFocus={onFocus}
                onBlur={onBlur}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              disabled={
                website && first && last && company && number && email
                  ? false
                  : true
              }
            >
              {website && first && last && company && number && email ? (
                <a href={handleMailto() || ""} target="_blank" rel="noreferrer">
                  Submit
                </a>
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default Sponser;

const Container = styled.div`
  padding: 90px 120px 8vh;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
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
  p {
    font-size: 14px;
    margin: 16px 0;
    font-family: var(--Branding-sf-light);
    line-height: 25px;
  }
  @media screen and (max-width: 900px) {
    p {
      font-size: 12px;
      line-height: 18px;
    }
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 570px;
  height: fit-content;
  margin: 0 auto;
  h1 {
    font-size: 20px;
    span {
      font-size: 18px;
      font-family: var(--Branding-sf-light);
    }
  }
`;

const Form = styled.form`
  .name {
    display: flex;
    gap: 12px;
  }

  .number {
    display: flex;
    align-items: center;
    border: ${(p) =>
      p.inputFocus
        ? "1px solid rgba(185, 243, 149, 0.6)"
        : "1px solid rgba(161, 210, 131, 0.34)"};
    height: fit-content;
    margin-bottom: 12px;
    padding: 0 9px;
    border-radius: 6px;
    transition: all 0.3s ease-in;
    span {
      display: inline-block;
      font-size: 16px;
      font-family: var(--Branding-sf-medium);
    }
    input {
      border: none;
      margin: 0;
    }
  }
  input {
    padding: 12px;
    font-size: 14px;
    margin-bottom: 12px;
    border-radius: 6px;
    &::placeholder {
      font-size: 16px;
    }
  }
  button {
    width: 100%;
    border-radius: 6px;
    padding: 12px 0;
    font-size: 18px;
    a {
      color: black;
    }
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

    .number {
      border-radius: 0;
    }
  }
`;
