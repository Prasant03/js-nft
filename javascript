/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/
//create a variable to hold your NFT'S
const NFTs=[]

function mintNFT (_Name,_Val,_Supply) {
const NFT={
"name": _Name,
"value": _Val,
"supply" : _Supply,
}

NFTs.push(NFT)

console.log("minted "+ _Name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
for( i=0;i<NFTs.length;i++){
console.log("\n\n"+"Name: "+NFTs[i].name)
console.log("Value: "+NFTs[i].value)
console.log("Total Supply: "+NFTs[i].supply+"\n")
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("Total NFTs: "+NFTs.length)
}

// call your functions below this line
mintNFT("Bored Ape",5000,5);
mintNFT("HIFI YATCH",300,100);
mintNFT("prash" ,2000,200);

listNFTs();

getTotalSupply();
