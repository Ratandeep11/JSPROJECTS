function rollDice(){
const arr=document.getElementById("dice").value;

let value=[];
let images=[];

for(let i=0;i<arr;i++)
{
    
    const x=Math.floor(Math.random()*6+1);
    value.push(x);
    images.push(`<img src="diceimages/${x}.svg">`);

}

    document.getElementById("diceResult").textContent=`Dice :${value.join()}`;
    document.getElementById("diceImage").innerHTML=images.join(" ");
}


