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
mintNFT("HIFI YATCH",300,100)

listNFTs();

getTotalSupply();
