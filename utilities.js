/**
 * common shared functions
 */

// getting history element
const historyCard = document.getElementById("historyData");

// get date
const date = new Date();


function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    return parseFloat(inputValue);
}

function getTextValue (id){
    const textValue = document.getElementById(id).innerText;
    return parseFloat(textValue);
}

function getInnerText(id){
    return `BDT Donated For ${document.getElementById(id).innerText}`;
}

