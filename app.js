var btntr = document.querySelector("#btn");
var txtin = document.querySelector("#txtar");
var out = document.querySelector("#outp");
var serverUrl = "https://api.funtranslations.com/translate/navi.json";


btntr.addEventListener("click",function clickEventHandler(){
    console.log("Button clicked")

   var txtinp = txtin.value;
  //  console.log(txtin.value)
    //alert("You entered "+txtinp);
   // out.innerText = txtinp;
//    fetch(getTranslation(txtinp)).then(respons => response.json()).then(json =>
//     {
//         var translatedText = json.contents.translated;
//         console.log(translatedText);
//         out.innerText = translatedText
//     }).catch(errorHandler)

// })

fetch(getTranslation(txtinp)).then(response => response.json()).then(json =>


    {
        var translatedText = json.contents.translated;
        console.log(translatedText)
        out.innerText=translatedText;
    }).catch(errorHanler)




})


function errorHanler(error){
    console.log("Error Occured",error)
    alert("Something went wrong try again later");
}

function getTranslation(text)
{
    return serverUrl + "?" + "text=" +text
}
