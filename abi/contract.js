import { ethers } from "ethers";
import defaultProvider from "./defaultProvider";


const address = "0xDddd5A70056f3BCe354a9a4e0c539FA3e8189D01";
const abi = [
  {
    inputs: [],
    name: "info",
    outputs: [
      { internalType: "uint32", name: "smallNumber", type: "uint32" },
      { internalType: "uint256", name: "number", type: "uint256" },
      { internalType: "int256", name: "signedNumber", type: "int256" },
      { internalType: "string", name: "name", type: "string" },
      { internalType: "bool", name: "isTrue", type: "bool" },
      { internalType: "address", name: "wallet", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isTrue",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "number",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "setInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bool", name: "_isTrue", type: "bool" }],
    name: "setIsTrue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "string", name: "_name", type: "string" }],
    name: "setName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "_number", type: "uint256" }],
    name: "setNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "int256", name: "_signedNumber", type: "int256" }],
    name: "setSignedNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint32", name: "_smallNumber", type: "uint32" }],
    name: "setSmallNumber",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "_wallet", type: "address" }],
    name: "setWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "signedNumber",
    outputs: [{ internalType: "int256", name: "", type: "int256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "smallNumber",
    outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "wallet",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  }
];
const contract = new ethers.Contract(address, abi, defaultProvider);
export default contract;
