function update(){
    let date=new Date();
    let hours=date.getHours().toString().padStart(2,0);
    let minutes=date.getMinutes().toString().padStart(2,0);
    let second=date.getSeconds().toString().padStart(2,0);
    let time=`${hours}:${minutes}:${second}`;
    document.getElementById("clock-container").textContent=time;
}
setInterval(update,1000);
