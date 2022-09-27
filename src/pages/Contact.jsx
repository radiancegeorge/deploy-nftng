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
          <p>For inquiries, kindly fill this form</p>
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
    cursor: pointer;
    font-family: var(--Branding-sf-medium);
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
    margin: 3px 0 20px;
    font-family: var(--Branding-sf-light);
    line-height: 25px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 570px;
  height: fit-content;
  margin: 0 auto;
  h1 {
    font-size: 24px;
    color: var(--primary-color);
    text-transform: uppercase;
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
  input,
  textarea {
    padding: 10px;
    font-size: 14px;
    margin-bottom: 12px;
    border-radius: 6px;
    &::placeholder {
      font-size: 14px;
    }
  }
  textarea {
    height: 175px;
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
`;
