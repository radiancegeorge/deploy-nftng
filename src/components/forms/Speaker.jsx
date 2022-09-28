import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../../img/svg/arrow-left.svg";
import { useNavigate } from "react-router-dom";

const Speaker = () => {
  const navigate = useNavigate();
  const [inputFocus, setInputFocus] = useState(false);

  const onFocus = () => setInputFocus(true);
  const onBlur = () => setInputFocus(false);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [company, setConpany] = useState("");
  const [speaker, setSpeaker] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleMailto = (f) => {
    if (speaker && first && last && company && number && email) {
      return `mailto:admin@nftng.com?subject=Partner Form&body=${`firstname: ${first}\n
      lastname: ${last}\n
      company: ${company}\n
      number: +234${number}\n
      speakerBio: ${speaker}`}\n
      email: ${email}\n
      applying for: ${f}
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
            APPLY/ <span>Speaker</span>
          </h1>
          <p>
            We’ve had something brewing… It’s very exciting and worth
            anticipating. Now that the cat is out of the bag, please join us on
            our incredible journey you snooze, you lose.{" "}
          </p>
          <Form onSubmit={(e) => e.preventDefault()}>
            <LeftWrap inputFocus={inputFocus}>
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
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setConpany(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </LeftWrap>
            <RightWrap>
              <textarea
                cols="30"
                rows="10"
                placeholder="Speaker Bio"
                value={speaker}
                onChange={(e) => setSpeaker(e.target.value)}
              ></textarea>
              <p>
                Please confirm that the details entered above are your own or
                you are applying on somone else behalf
              </p>
              <button
                type="submit"
                disabled={
                  speaker && first && last && company && number && email
                    ? false
                    : true
                }
              >
                {speaker && first && last && company && number && email ? (
                  <a
                    href={handleMailto("myself") || ""}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Yes, this is me let’s continue
                  </a>
                ) : (
                  "Yes, this is me let’s continue"
                )}
              </button>
              <button
                type="submit"
                className="border-btn"
                disabled={
                  speaker && first && last && company && number && email
                    ? false
                    : true
                }
              >
                {speaker && first && last && company && number && email ? (
                  <a
                    href={handleMailto("someone else") || ""}
                    target="_blank"
                    rel="noreferrer"
                  >
                    No, I’m applying for someone
                  </a>
                ) : (
                  "No, I’m applying for someone"
                )}
              </button>
            </RightWrap>
          </Form>
        </Wrap>
      </Wrapper>
    </Container>
  );
};

export default Speaker;

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
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 70px;
  justify-content: center;
  align-items: center;
  p {
    font-size: 16px;
    margin: 20px 0;
    font-family: var(--Branding-sf-light);
    line-height: 25px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 58vw;
  height: fit-content;
  h1 {
    font-size: 20px;

    span {
      font-size: 18px;
      font-family: var(--Branding-sf-light);
    }
  }
`;

const Form = styled.form`
  display: flex;
  gap: 30px;

  input,
  textarea {
    padding: 10px;
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
    font-size: 14px;
    margin-bottom: 12px;
  }

  .border-btn {
    color: white;
    background-color: transparent;
    border: 1px solid var(--primary-color);
    a {
      color: white;
    }
    &:disabled {
      opacity: 0.4;
    }
  }
`;

const LeftWrap = styled.div`
  width: 100%;

  input {
    margin-bottom: 20px;
  }
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
`;

const RightWrap = styled.div`
  width: 100%;

  textarea {
    height: 80px;
  }
`;
