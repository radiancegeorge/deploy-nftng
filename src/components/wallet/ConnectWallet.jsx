import React, { useState } from "react";
import styled from "styled-components";
import Wallets from "./Wallets";
import SuccessFul from "./SuccessFul";
// import GetPass from "./GetPass";
import Minting from "./Minting";

const ConnectWallet = (props) => {
  const minted=()=>{
    setContent(<SuccessFul/>)
  }
  const success=()=>{
    setContent(<Minting minted={minted}/>)
  }
  const [content,setContent]=useState(<Wallets closeTab={props.close} success={success}/>)
 
 
  return (
    <Container>
      {/* <Wallets />
      {/* {content} */}
      {/* <SuccessFul /> */}
      {/* <GetPass /> */}
      {/* <Minting /> */}
      {content}
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
