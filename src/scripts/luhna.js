
const luhnaSubmitBtn = document.getElementById("luhna_submit");
const luhnaResultDisplay = document.getElementById("luhna_result");

luhnaSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const input = document.getElementById("luhna_input").value.trim();
    const mode = document.getElementById('luhna_mode').value;

    if (input === "") 
    {
        luhnaResultDisplay.innerHTML = "Podaj numer!";
        return;
    }

    if (isNaN(input)) 
    {
        luhnaResultDisplay.innerHTML = "Wprowadź tylko cyfry!";
        return;
    }

    if (mode == "calculate")
    {
        const result = calculateControlNumber(input);
        luhnaResultDisplay.innerHTML = `Liczba kontrolna to ${result}, cału numer: ${input + result}`;
    }
    else
    {
        const result = validateControlNumber(input);
        luhnaResultDisplay.innerHTML = result ? "Liczba kontrolna jest poprawna" : "Liczba kontrolna jest błędna";
    }
});

function calculateControlNumber(number) 
{
    const reversed = number.split('').reverse();
    let total = 0;

    for (let i = 0; i < reversed.length; i++) 
    {
        let digit = parseInt(reversed[i]);

        if (i % 2 == 0) 
        {
            total += digit;
        } else 
        {
            let multiply = digit * 2;
            if (multiply > 9) multiply -= 9;
            total += multiply;
        }
    }

    const controlNumber = (10 - (total % 10)) % 10;
    return controlNumber;
}

function validateControlNumber(fullNumber) 
{
    const controlDigit = parseInt(fullNumber[fullNumber.length - 1]);
    const number = fullNumber.slice(0, -1).split('').reverse();
    let total = 0;

    for (let i = 0; i < number.length; i++) 
    {
        let digit = parseInt(number[i]);

        if (i % 2 == 0) 
        {
            total += digit;
        } 
        else 
        {
            let multiply = digit * 2;
            if (multiply > 9) multiply -= 9;
            total += multiply;
        }
    }

    const newControlDigit = (10 - (total % 10)) % 10;
    return controlDigit == newControlDigit;
}