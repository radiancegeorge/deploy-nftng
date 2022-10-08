import Web3 from 'web3'


const contractObj= require('./contract.json')

const Contract=()=>{
  const web3 = new Web3(window.ethereum)
  const contract= new web3.eth.Contract(contractObj.abi,contractObj.contractAddress)
//    console.log(contract);
  return {contract}
}

export default Contract;