
const number=document.getElementById("input-elements")
function addNum(input){

    if(input=='='){
      
        number.value=eval(number.value);
    }
    else
    number.value+=input;

}
function clearInput(){
    number.value="";
}