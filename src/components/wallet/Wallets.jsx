import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Contract from "../../utils/contract";

import close from "../../img/svg/green-close-circle.svg";
import metamask from "../../img/wallet/metamask.png";
import walletConnect from "../../img/wallet/WalletConnect.png";
import trezor from "../../img/wallet/Bitcoin Trezor.png";
import coinbase from "../../img/wallet/coinbase.png";
import WalletConnectProvider from '@walletconnect/web3-provider'
import Web3 from "web3";
import { useNavigate } from "react-router-dom";

const Wallets = ({success,closeTab,finished}) => {
  const provider = new WalletConnectProvider({
    // rpc: {
    //   '0xfa2': 'https://rpc.testnet.fantom.network',
    // },
    // rpc: {
    //   '0x1' : 'https://mainnet.infura.io/v3/45b5a21bfa5b4429af59109069821ed3'
    // }
    // rpc: {
    //   56: "https://bsc-dataseed1.binance.org",
    // }
    // infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
    infuraId: "45b5a21bfa5b4429af59109069821ed3",
  })
  const [web3,setWeb3]=useState()
  // const []
  const [walletType,setWalletType]=useState()
  const {contract}=Contract()
  const navigate=useNavigate()
  const connectWithMetamask=async()=>{
      setWeb3(new Web3(window.ethereum))
      
      try {
        const acc= await window.ethereum.enable()
        console.log(acc);
        const isBuzzListed = await contract.methods.isBuzzlisted(acc[0]).call()
        
        console.log(contract);
        if(isBuzzListed){
              
           try {
            const hasReedemed = await contract.methods.hasRedeemed(acc[0]).call()
            if(hasReedemed){
              finished()
            }
            else{
              success()
            }

            sessionStorage.setItem('currentAccount',acc[0])
           
           } catch (error) {
            console.log(error);
           }
          
            
         
         

          //  success()
        }
        else navigate('/opps-buzz')
      } catch (error) {
        console.log(error);
      }
  }


  const connectWallet=async()=>{
    if(walletType==='walletConnect'){
    
        try {
          await provider.enable()
          console.log("enable", provider)
          // if (provider.chainId === 1) {
            // console.log("guyyy")
            sessionStorage.setItem('currentAccount', provider.accounts[0])
            
            console.log(contract);

           
    
          setWeb3(new Web3(provider))
          provider.on("connect", (accounts) => {
            console.log("account?", accounts)
          })
          // Subscribe to accounts change
          provider.on('accountsChanged', (accounts) => {
            console.log(accounts)
            sessionStorage.setItem('currentAccount', accounts[0])
            // setCurrentAccount(localStorage.getItem('currentAccount'))
            console.log("account was set>>>", localStorage.getItem('currentAccount'))
          })
    
       
          // Subscribe to session disconnection
          provider.on('disconnect', (code, reason) => {
            console.log(code, reason)
          })
        } catch (err) {
          console.log(err)
        }
      }
      if(walletType==='metamask'|| walletType==='coinBase'){
        // delete window.ethereum

        if(window.ethereum){
           connectWithMetamask()  
        }
        else console.log('Install Metamask')
      }
  
  }

  useEffect(()=>{
     connectWallet()
  },[walletType])

  return (
    <Wrapper>
      <div className="header">
        <p>Connect Wallet</p>
        <img onClick={closeTab} src={close} alt="" />
      </div>
      <Grid>
        <div onClick={()=>setWalletType('metamask')} className="wrap">
          <img src={metamask} alt="" />
          <p>Metamask</p>
        </div>
        <div onClick={()=>setWalletType('walletConnect')} className="wrap">
          <img src={walletConnect} alt="" />
          <p>WalletConnect</p>
        </div>
        {/* <div className="wrap">
          <img src={trezor} alt="" />
          <p>Trezor</p>
        </div> */}
        <div onClick={()=>setWalletType('coinBase')} className="wrap">
          <img src={coinbase} alt="" />
          <p>Coinbase Wallet</p>
        </div>
      </Grid>
    </Wrapper>
  );
};

export default Wallets;

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
