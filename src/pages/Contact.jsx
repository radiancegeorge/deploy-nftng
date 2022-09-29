import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [message, setMessage] = useState("");

  const handleMailto = () => {
    if (email && name && twitter && message) {
      return `mailto:admin@nftng.com?subject=Partner Form&body=${`
      name: ${name}}\n
      email: ${email}
      twitter: ${twitter}\n`}\n
      message: ${message}\n
      `;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Wrap>
          <h1>Contact us</h1>
          <Form>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Twitter handle"
              value={twitter}
              onChange={(e) => setTwitter(e.target.value)}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              type="Submit"
              disabled={email && name && twitter && message ? false : true}
            >
              {email && name && twitter && message ? (
                <a href={handleMailto() || ""} target="_blank" rel="noreferrer">
                  Apply
                </a>
              ) : (
                "Submit"
              )}
            </button>
          </Form>
        </Wrap>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  padding: 70px 120px 8vh;
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
    cursor: pointer;
    font-family: var(--Branding-sf-medium);
  }
  @media screen and (max-width: 900px) {
    padding: 10px 20px 100px;
    height: fit-content;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: fit-content;
    height: fit-content;
    padding: 10vh 0 2vh;
  }
`;

const Wrap = styled.div`
  background-color: black;
  padding: 5vh;
  width: 100%;
  max-width: 570px;
  height: fit-content;
  margin: 0 auto;
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: var(--primary-color);
    text-transform: uppercase;
  }
  @media screen and (max-width: 900px) {
    padding: 20px;
    h1 {
      font-size: 18px;
    }
  }
`;

const Form = styled.form`
  input,
  textarea {
    padding: 10px;
    font-size: 14px;
    background-color: black;
    margin-bottom: 12px;
    border-radius: 6px;
    &::placeholder {
      font-size: 14px;
    }
  }
  textarea {
    height: 20vh;
  }
  a {
    color: black;
  }
  button {
    width: 120px;
    border-radius: 6px;
    padding: 12px 0;
    font-size: 14px;
    float: right;
  }
  @media screen and (max-width: 900px) {
    textarea,
    input {
      font-size: 12px;
      padding: 14px 8px;
      margin-bottom: 14px;
      &::placeholder {
        font-size: 12px;
      }
    }
    button {
      width: 100%;
    }
  }
`;
