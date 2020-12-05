var translateInput = document.querySelector("#translateInput")
var transBtn = document.querySelector("#translateButton");
var translateOutput = document.querySelector("#translateOutput");

var url = "	https://api.funtranslations.com/translate/shakespeare.json";

function getTransUrl(input) {
    return url + "?" + "text=" + input
}

function clickHandler() {
    var txtInput = translateInput.value;
    fetch(getTransUrl(txtInput))
        .then(response => response.json)
        .then(json => {
            var translatedText = json.contents.translated;
            translateOutput.innerHTML = translatedText;
        })
        .catch(errorHandler)

};

function errorHandler(error) {

    console.log("Error occured", error)
    alert("Server down, try  after some time :")
}
transBtn.addEventListener("click", clickHandler)