import React from "react";
import styled from "styled-components";
import close from "../img/svg/green-close-circle.svg";
import metamask from "../img/wallet/metamask.png";
import walletConnect from "../img/wallet/WalletConnect.png";
import trezor from "../img/wallet/Bitcoin Trezor.png";
import coinbase from "../img/wallet/coinbase.png";

const ConnectWallet = () => {
  return (
    <Container>
      <Wrapper>
        <div className="header">
          <p>Connect Wallet</p>
          <img src={close} alt="" />
        </div>
        <Grid>
          <div className="wrap">
            <img src={metamask} alt="" />
            <p>Metamask</p>
          </div>
          <div className="wrap">
            <img src={walletConnect} alt="" />
            <p>WalletConnect</p>
          </div>
          <div className="wrap">
            <img src={trezor} alt="" />
            <p>Trezor</p>
          </div>
          <div className="wrap">
            <img src={coinbase} alt="" />
            <p>Coinbase Wallet</p>
          </div>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default ConnectWallet;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--inter);

  @media screen and (max-width: 900px) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: #252525;
    padding: 0 15px 60px;
  }
`;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 460px;
  border-radius: 29px;
  padding: 28px;
  border: 1px solid #a1d283;

  .header {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #fff;
    font-weight: 700;
    margin-bottom: 26px;
    display: flex;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
    }
  }
  @media screen and (max-width: 900px) {
    border-radius: 0;
    .header {
      font-size: 14px;
      margin-bottom: 34px;
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 22px 18px;
  .wrap {
    width: 100%;
    height: 110px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border-radius: 8px;
    cursor: pointer;

    img {
      width: 38px;
      height: 35px;
      object-fit: contain;
    }
    p {
      color: black;
      font-size: 16px;
      font-weight: 400;
    }
  }
  @media screen and (max-width: 900px) {
    gap: 30px 14px;
    .wrap {
      height: 82px;
      img {
        width: 28px;
        height: 26px;
      }
      p {
        font-size: 12px;
      }
    }
  }
`;
