function getInputValueById(inputFieldId ){
    const inputFiled = document.getElementById(inputFieldId);
    const inputFieldValueString = inputFiled.value ;
    const inputFieldValueNumber = parseFloat(inputFieldValueString);
    inputFiled.value = '';
    return inputFieldValueNumber;
}

function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
}
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

