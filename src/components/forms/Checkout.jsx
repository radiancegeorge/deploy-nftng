import React, { useState } from "react";
import styled from "styled-components";

const Checkout = () => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [inputFocus, setInputFocus] = useState(false);
  const onFocus = () => setInputFocus(true);
  const onBlur = () => setInputFocus(false);

  return (
    <Container>
      <Wrapper>
        <Form inputFocus={inputFocus}>
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
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Delivery Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Checkout;

const Container = styled.div`
  padding: 0 20vw;
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  background-color: #0000004f;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;

  input,
  textarea {
    background-color: transparent;
    padding: 8px 10px;
    font-size: 14px;

    &::placeholder {
      font-size: 16px;
    }
  }

  textarea {
    height: 105px;
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
