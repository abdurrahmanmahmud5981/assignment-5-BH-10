/**
 * common shared functions
 */


function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    return parseFloat(inputValue);
}

function getTextValue (id){
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);
}

