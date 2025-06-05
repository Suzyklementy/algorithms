
const caesarsCodeSubmitBtn = document.getElementById('caesars_code_submit');
const caesarsCodeResultDisplay = document.getElementById('caesars_code_result');

caesarsCodeSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const text = document.getElementById('caesars_code_text').value.trim();
    const keyInput = document.getElementById('caesars_code_key').value;
    const mode = document.getElementById('caesars_code_mode').value;

    if (text == "" || keyInput == "") 
    {
        caesarsCodeResultDisplay.innerHTML = "Podaj tekst i klucz!";
        return;
    }

    const key = parseInt(keyInput);
    if (isNaN(key)) 
    {
        caesarsCodeResultDisplay.innerHTML = "Klucz musi być liczbą!";
        return;
    }

    if(mode == "encrypt")
    {
        const result = encrypt(text, key);
        caesarsCodeResultDisplay.innerHTML = `zaszyfrowany tekst: ${result}`;
    }
    else
    {
        const result = decrypt(text, key);
        caesarsCodeResultDisplay.innerHTML = `Odszyfrowany tekst: ${result}`;
    }
});

const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encrypt(text, key) 
{
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) 
    {
        const letter = text[i];
        const index = letters.indexOf(letter);

        if (index != -1) 
        {
            let newIndex = (index + key);
            if (newIndex > letters.length)
            {
                newIndex =  newIndex - letters.length
            }

            encryptedText += letters[newIndex];
        } 
        else 
        {
            encryptedText += letter;
        }
    }

    return encryptedText;
}

function decrypt(text, key) 
{
    let decryptedText = "";

    for (let i = 0; i < text.length; i++) 
    {
        const letter = text[i];
        const index = letters.indexOf(letter);

        if (index != -1) 
        {
            let newIndex = (index - key);
            if (newIndex < 0) 
            {
                newIndex = newIndex + letters.length;
            }
                
            decryptedText += letters[newIndex];
        } 
        else 
        {
            decryptedText += letter;
        }
    }

    return decryptedText;
}