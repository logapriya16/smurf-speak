var btnTranslate = document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var txtoutput= document.querySelector("#txt-output");
//serverURL
var serverURL="https://api.funtranslations.com/translate/pirate.json"
function TranslationURL(text){
    return serverURL+"?"+"text="+text //input

}
function erroHandler(error)
{
    console.log("error occured",error)
    alert("Something Went wrong with server ! Try after sometime ")

}
//processing
function clickHandler(){
var inputText = txtInput.value
fetch(TranslationURL(inputText))
.then(response => response.json())//response is converted to json
.then(json=> {
    //the translated part is taken from the contents and strored in the variable
    var translatedText = json.contents.translated;
    txtoutput.innerText=translatedText;//output
})
.catch(erroHandler)
};

btnTranslate.addEventListener("click",clickHandler())


