function passwordGenerator(lowerChar,upperChar,adigit,aSymbol){
    let lower="abcdefghijklmnopqrstuvwxyz";
    let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let digits="1234567890";
    let symbol="!@#$%^&*";
    let result;
    if(lowerChar){
        result+=lower;
    }

    if(upperChar){
        result+=upper;
    }
    if(adigit){
        result+=digits;
    }
    if(aSymbol){
        result+=symbol;
    }
    let password="";
    for(let i=0;i<12;i++){
        let ind=Math.floor(Math.random()*70+1);
        password+=result[ind];
    }
    return password;

}
function generate(){

    let lowerChar=true;
    let upperChar=true;
    let adigit=true;
    let aSymbol=true;
    let StrongPassword=passwordGenerator(lowerChar,upperChar,adigit,aSymbol);
    document.getElementById("div1").textContent=StrongPassword;
}


