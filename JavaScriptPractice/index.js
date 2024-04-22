const box=document.getElementById('mybutton');
const img=document.getElementById('myimg');
box.addEventListener('click',(e)=>{
    if(img.style.display==="block"){

        box.textContent="show";
        img.style.display='none';
    }
    else{
        box.textContent="hide";
        img.style.display="block";
    }
})