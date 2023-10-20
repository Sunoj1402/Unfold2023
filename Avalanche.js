const { Avalanche, BinTools, Buffer, AVMAPI, KeyChain, AVMTx, AVMAPIBase } = require("avalanche");
const AVAX_IP = "FUJI_C_CHAIN_API_URL"; // Replace with Fuji C-Chain API URL
const AVAX_PHRASE = "YOUR_MNEMONIC"; // Replace with your mnemonic phrase
const contractABI = require("./build/contracts/HelloWorld.json").abi; // Replace with your ABI

const ava = new Avalanche(AVAX_IP, 443, "https");
const xchain = ava.X;
const cchain = ava.C;

async function deployHelloWorld() {
  const keyChain = avm.keyChain();

  const addressBuffer = keyChain.makeKey();

  // Convert addressBuffer to a human-readable address
  const address = xchain.addressFromBuffer(addressBuffer);
  console.log(`Deployer Address: ${address}`);

  // Use your contract ABI and bytecode
  const contract = cchain.buildBaseTx(
    0,
    "C",
    1,
    "hello-world-contract-data", // Replace with your contract data
    contractABI
  );

  const unsignedTx = xchain.buildBaseTx(
    1000000, // Amount of AVAX to send
    "AVAX",
    0,
    [address],
    [address]
  );

  // Sign and send the contract and transaction
  const signedTx = keyChain.signTx(unsignedTx);
  const txID = await xchain.issueTx(signedTx);

  console.log(`Transaction ID: ${txID}`);
}

deployHelloWorld();
