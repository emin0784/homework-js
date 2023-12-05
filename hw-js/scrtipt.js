// alert('it works')

function calc() {

let quantaty = document.getElementById('quantaty').value;
let price = document.getElementById('price').value;
let taxRate = document.getElementById('taxRate').value;
let total = document.getElementById('total').value = quantaty * price * (1+taxRate/100);   


}



