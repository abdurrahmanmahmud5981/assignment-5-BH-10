/**
 * common shared functions
 */

// getting history element
const historyCard = document.getElementById("historyData");

// get date
const date = new Date();


function getInputValueById(id) {
    return parseFloat( document.getElementById(id).value);
}

function getTextValue (id){
    return parseFloat(document.getElementById(id).innerText);
}

function getInnerText(id){
    return `BDT Donated For ${document.getElementById(id).innerText}`;
}

