
const makingChangeSubmitBtn = document.getElementById('making_change_submit');
const makingChangeResultDisplay = document.getElementById('making_change_result');

makingChangeSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const amountInput = document.getElementById('making_change_amount').value.replaceAll(' ', '');
    const denominationsInput = document.getElementById('making_change_array').value.trim();

    if (amountInput === "" || denominationsInput === "") 
    {
        makingChangeResultDisplay.innerHTML = "Podaj kwotę i nominały!";
        return;
    }

    const amount = parseFloat(amountInput);
    const denominations = denominationsInput.split(',').map(x => parseFloat(x.trim()));
    denominations.sort((a, b) => b - a);
    
    if (isNaN(amount) || denominations.some(isNaN)) 
    {
        makingChangeResultDisplay.innerHTML = "Wprowadź tylko poprawne liczby!";
        return;
    }

    const change = makeChange(amount, denominations);
    makingChangeResultDisplay.innerHTML = `Wydana reszta: [${change.join(', ')}]`;
});

function makeChange(amount, denominations) 
{
    const change = [];

    for (let i = 0; i < denominations.length; i++) 
    {
        while (amount >= denominations[i]) 
        {
            amount -= denominations[i];
            change.push(denominations[i]);
        }
    }

    return change;
}