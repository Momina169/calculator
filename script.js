function show(val){
    document.getElementById("output").value +=val;
}
function clearScreen(){
    document.getElementById("output").value = null;
}
function calculate(){
    var a= document.getElementById("output").value;
    var b= eval(a);
    document.getElementById("output").value = b;   
  
}
//Enter Button 
var input = document.getElementById("output");
input.addEventListener("keypress", function(event) {
if (event.key === "Enter") {
event.preventDefault();
document.getElementById("enter").click();
}
});