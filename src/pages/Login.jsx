import React from "react";
import styled from "styled-components";

import Footer from "../components/Footer";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <h1>Admin</h1>
          <div className="f-wrap">
            <div className="i-wrap">
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
            </div>
            <button>login</button>
          </div>
        </Form>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Login;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  padding: 65px 0;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.div`
  width: 520px;
  padding: 80px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 12px;
  .f-wrap {
    width: 100%;
  }
  .i-wrap {
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 100%;
  }
  h1 {
    font-size: 30px;
    font-family: var(--Branding-sf-bold);
    color: var(--primary-color);
  }
  button {
    width: 100%;
    margin-top: 30px;
    border-radius: 6px;
    height: 55px;
  }
  input {
    padding: 9px 12px;
    background: transparent;
    border-radius: 5px;
    font-size: 14px;
    font-family: var(--Branding-sf-light);
  }
`;
