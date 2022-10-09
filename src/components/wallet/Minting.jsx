import React from "react";
import styled from "styled-components";
import arrow from "../../img/svg/arrow-left.svg";
import Contract from "../../utils/contract";

const Minting = ({ minted }) => {
  const acc = sessionStorage.getItem("currentAccount");
  const { contract } = Contract();
  console.log(contract.methods);
  const mint = async () => {
    // console.log(acc);

    try {
      await contract.methods.mint(acc,1).send({ from: acc });
      minted();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Header>
        <img src={arrow} alt="" />
        <span>Back</span>
      </Header>
      <Desc>
        <h2>Minting</h2>
        <p>
          Hello Buzzer! Thank you for staying with us, we can't wait to see you
          at #TheWebThreeBuzz
        </p>
        <button style={{ margin: "auto" }} onClick={mint}>
          Mint Now
        </button>
      </Desc>
    </Container>
  );
};

export default Minting;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 570px;
  padding: 55px 60px;
  border: 1px solid #a1d283;
  @media screen and (max-width: 900px) {
    width: 330px;
    padding: 40px 26px;
  }
`;

const Header = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  text-align: center;
  color: white;
  h2 {
    font-size: 26px;
    font-family: var(--inter);
    font-weight: 700;
  }
  p {
    font-size: 16px;
    margin: 4px 0 24px;
    font-family: var(--Branding-sf-light);
    line-height: 26px;
  }
  button {
    width: 100%;
    max-width: 330px;
    font-size: 14px;
    padding: 16px;
    border-radius: 8px;
  }
  @media screen and (max-width: 900px) {
    p {
      margin-bottom: 30px;
      font-size: 14px;
    }
    button {
      width: 100%;
      border-radius: 0;
    }
  }
`;
