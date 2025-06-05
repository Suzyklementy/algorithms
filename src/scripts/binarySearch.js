
const binarySearchSubmitBtn = document.getElementById('binary_search_submit');
const binarySearchResultDisplay = document.getElementById('binary_search_result');

binarySearchSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const arrayInput = document.getElementById('binary_search_array').value.replaceAll(' ', '');
    const targetInput = document.getElementById('binary_search_target').value.trim();

    if (arrayInput == "" || targetInput == "") 
    {
        binarySearchResultDisplay.innerHTML = "Podaj tablicę i szukaną liczbę!";
        return;
    }

    let array = arrayInput.split(',').map(x => parseFloat(x.trim()));
    let target = parseFloat(targetInput);

    if (array.some(isNaN) || isNaN(target)) {
        binarySearchResultDisplay.innerHTML = "Wprowadź tylko liczby!";
        return;
    }

    const index = binarySearch(array, target);

    if (index != false) 
    {
        binarySearchResultDisplay.innerHTML = `Znaleziono ${target} na pozycji ${index}.`;
    } 
    else 
    {
        binarySearchResultDisplay.innerHTML = `Nie znaleziono ${target} w tablicy.`;
    }
});

function binarySearch(array, x) 
{
    let low = 0;
    let high = array.length - 1;

    while (low <= high) 
    {
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === x) 
        {
            return mid;
        } 
        else if (array[mid] < x) 
        {
            low = mid + 1;
        } else 
        {
            high = mid - 1;
        }
    }

    return false;
}