const amountOne = document.getElementById("amount-one");
const amountTwo = document.getElementById("amount-two");
const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');



function updateResult(e) {
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;
    fetch(`https://v6.exchangerate-api.com/v6/59a6940ee912541802c53fbd/latest/${currOne}`)
    .then(res => res.json())
    .then(data => {
        const rates = data.conversion_rates[currTwo];
        rate.innerHTML= `1 ${currOne} = ${rates} ${currTwo}`;
        amountTwo.value=(amountOne.value/rates).toFixed(3);
    });
}

//Event Listeners
amountOne.addEventListener('input', updateResult);
amountTwo.addEventListener('input', updateResult);
currencyOne.addEventListener('change', updateResult);
currencyTwo.addEventListener('change', updateResult);

swap.addEventListener('click', () => {
    const tempVal = amountTwo.value;
    amountTwo.value = amountOne.value;
    amountOne.value = tempVal;
    updateResult();
})