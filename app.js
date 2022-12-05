

const btnTranslate = document.querySelector("#click");


var txtInput = document.querySelector("#txt-Input");


var outputDiv = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslation(text) {
  return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("error occured", error);
}

function clickEventHandler() {
  
  var inputText = txtInput.value;


  fetch(getTranslation(inputText))
    .then((response) => response.json())
    .then((json) => {
      var finalText = json.contents.translated;
      outputDiv.innerText = finalText;
    })
    
    .catch(errorHandler);
}



btnTranslate.addEventListener("click", clickEventHandler);