function rock(element){
    let y=document.getElementById("computer");
    let p=document.getElementById("computerPick")
    const x=Math.floor(Math.random()*3+1);

    if(element==="rock"&&x==1||element=="paper"&&x==2||element=="scissor"&&x==3){
        if(x==1)
        p.textContent="Computer Choice Rock";
    if(x==2){
        p.textContent="Computer choice Paper";
    }
    if(x==3){
        p.textContent="Computer choice Scissor";
    }
        y.textContent="Game Tie";

    }
    else if(element==="rock"&&x==3||element==="paper"&&x==1||element==="scissor"&&x==2){
        if(x==1)
        p.textContent="Computer Choice Rock";
    if(x==2){
        p.textContent="Computer choice: Paper";
    }
    if(x==3){
        p.textContent="Computer choice :Scissor";
    }
        y.textContent=" Great Job You Won";
    }
    else{
        if(x==1)
        p.textContent="Computer Choice: Rock";
    if(x==2){
        p.textContent="Computer choice :Paper";
    }
    if(x==3){
        p.textContent="Computer choice :Scissor";
    }
        y.textContent="You Lost ";

    }


}