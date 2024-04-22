
let isRunning=true;
let x;
let count=0;
let second=0;
let minutes=0;
    
function start(){
    if(isRunning){
   
   
    x=setInterval(()=>{count
        if(count==100){
            second++;
            count=0;
            
        }
        if(second==60){
            minutes++;
        }
        second=String(second).padStart(2,'0');
        minutes=String(minutes).padStart(2,'0');
        count=String(count).padStart(2,'0');
    document.getElementById("stopwatch-container").textContent=`${minutes}:${second}:${count}`;
    count++;
    }
    ,10)}
}
function stop(){
    // isRunning=false;
    clearInterval(x);
}
function reset(){
    second=0;
    minutes=0;
count=0;
    document.getElementById("stopwatch-container").textContent="00:00:00";
}