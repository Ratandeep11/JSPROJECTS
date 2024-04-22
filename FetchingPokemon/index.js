async function poke(){
   
   try{
    let y=document.getElementById("input").value.toLowerCase();
    
   fetch(`https://pokeapi.co/api/v2/pokemon/${y}`)
   .then((response)=>{
    return response.json();
   })
   .then((data)=>{
    
    const sprite=data.sprites.front_default;
    const img=document.getElementById("img");
    img.src=sprite;

    img.style.display="block";});
}
catch(error){
    console.error(error);
}
}