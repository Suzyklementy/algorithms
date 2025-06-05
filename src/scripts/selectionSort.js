
const selectionSortSubmitBtn = document.getElementById('selection_sort_submit');
const selectionSortResultDisplay = document.getElementById('selection_sort_result');

selectionSortSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let input = document.getElementById('selection_sort_array').value;
    input = input.replaceAll(' ', '');

    if (input == "") 
    {
        selectionSortResultDisplay.innerHTML = "Podaj liczby oddzielone przecinkami!";
        return;
    }

    let array = input.split(',').map(x => parseFloat(x.trim()));
    if (array.some(isNaN)) 
    {
        selectionSortResultDisplay.innerHTML = "Wprowadź tylko liczby!";
        return;
    }

    const sorted = selectionSort(array);
    selectionSortResultDisplay.innerHTML = `Posortowana tablica: [${sorted.join(', ')}]`;
});

function selectionSort(array) 
{
    for (let i = 0; i < array.length; i++) 
    {
        let minIndex = i;

        for (let j = i + 1; j < array.length; j++) 
        {
            if (array[j] < array[minIndex]) 
            {
                minIndex = j;
            }
        }

        let temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }

    return array;
}