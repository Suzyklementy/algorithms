
const frenchFlagSubmitBtn = document.getElementById('french_flag_submit');
const frenchFlagResultDisplay = document.getElementById('french_flag_result');

frenchFlagSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let input = document.getElementById('french_flag_array').value;
    input = input.replaceAll(' ', '');

    if (input.trim() == "")
    {
        frenchFlagResultDisplay.innerHTML = `Podaj dane wejściowe!`;
        return;
    }

    let array = input.split(',').map(x => parseInt(x.trim()));

    if (!array.every(x => x == 0 || x == 1 || x == 2))
    {
        frenchFlagResultDisplay.innerHTML = `Podaj tylko liczby 0, 1 lub 2 oddzielone przecinkami!`;
        return;
    }

    const sortedArray = sortByFrenchFlag(array);
    frenchFlagResultDisplay.innerHTML = `Posortowana tablica: [${sortedArray.join(', ')}]`;
});

function sortByFrenchFlag(array) 
{
    let low = 0;
    let mid = 0;
    let high = array.length - 1;

    while (mid <= high) 
    {
        if (array[mid] == 0) 
        {
            [array[low], array[mid]] = [array[mid], array[low]];
            low++;
            mid++;
        } 
        else if (array[mid] == 1) 
        {
            mid++;
        } else 
        {
            [array[mid], array[high]] = [array[high], array[mid]];
            high--;
        }
    }

    return array;
}