console.log('utilteis');
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;
}

function getTextValue(id){
  const textValue = document.getElementById(id).innerText;
  return textValue;
}