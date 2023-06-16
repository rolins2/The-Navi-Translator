var btntr = document.querySelector("#btn");
var txtin = document.querySelector("#txtar");
var out = document.querySelector("#outp")


btntr.addEventListener("click",function clickEventHandler(){
    console.log("Button clicked")

   var txtinp = txtin.value;
    console.log(txtin.value)
    //alert("You entered "+txtinp);
    out.innerText = txtinp;

})