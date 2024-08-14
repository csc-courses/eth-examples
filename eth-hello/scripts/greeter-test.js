// scripts/hello-test.js
// author: bjr
// last-update: 9 aug 2024
//     14 aug 2024

// file out this value from the output of the deploy script
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

async function main () {
  const deployedContractAddress = CONTRACT_ADDRESS;
  const HelloWorld = await ethers.getContractFactory('HelloWorld');
  const helloWorld = await HelloWorld.attach(deployedContractAddress);

  var owner ; // = await helloWorld.getOwner();
  var greeting = await helloWorld.getGreeting();
  console.log(`owner: ${owner}\ngreeting:${greeting}`);
  
  await helloWorld.setGreeting('Hello Moon!');
  greeting = await helloWorld.getGreeting();
  console.log(`greeting:${greeting}`);  
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


