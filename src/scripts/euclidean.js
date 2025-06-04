
const submitBtn = document.getElementById('euclidean_submit');
const resultDisplay = document.getElementById('euclidean_result');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const a = document.getElementById('euclidean_a').value;
    const b = document.getElementById('euclidean_b').value;

    if (a == "" || b == "")
    {
        resultDisplay.innerHTML = `Podaj A i B`;
        return
    }

    const result = euclidean(a, b);
    resultDisplay.innerHTML = `NWD wynosi: ${result}`;
});

function euclidean(a, b) 
{
    while (b !== 0) 
    {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}
