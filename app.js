let btnTranslate = document.querySelector("#btn-translate");

let textInput = document.querySelector("#text-area");

let textOutput = document.querySelector("#output");

let url = "https://api.funtranslations.com/translate/pig-latin.json";

function geturl(text) {
  modUrl = url + "?text=" + text;
  return modUrl;
}
function errorHandler(error) {
  console.log("error ocurred: " + error);
  alert("something wrong with server, Try after some time.");
}

function clickHandler() {
  let text = textInput.value;

  fetch(geturl(text))
    .then((response) => response.json())
    .then((json) => (textOutput.innerText = json.contents.translated))
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickHandler);
