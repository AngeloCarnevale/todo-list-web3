import { ethers } from "ethers";
import contract from "../../build/contracts/TodoList.json";

const contractAddress = "0xbb216872B8E6aA640e39d048B082B3616943E0D1";
const { abi } = contract;

//@ts-ignore
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

export const taksContract = new ethers.Contract(contractAddress, abi, signer);
