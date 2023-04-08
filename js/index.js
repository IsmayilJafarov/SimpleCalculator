const inputANode = document.querySelector('.input-a');
const inputBNode = document.querySelector('.input-b');
const resultNode = document.querySelector('.btn-result');
const selectOperationNode = document.querySelector('.select-operation');
const outputNode = document.querySelector('.output');

resultNode.addEventListener('click', function() {
    const a = Number(inputANode.value);
    const b = Number(inputBNode.value);
    const operations = selectOperationNode.value;
    const result = calculate ({a, b,operations,})
    outputNode.innerHTML = result
})
