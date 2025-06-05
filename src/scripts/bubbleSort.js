
const bubbleSortSubmitBtn = document.getElementById('bubble_sort_submit');
const bubbleSortResultDisplay = document.getElementById('bubble_sort_result');

bubbleSortSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let input = document.getElementById('bubble_sort_array').value;
    input = input.replaceAll(' ', '');

    console.log(input);

    if (input.trim() == "") 
    {
        bubbleSortResultDisplay.innerHTML = `Podaj liczby oddzielone przecinkami!`;
        return;
    }

    let array = input.split(',').map(x => parseFloat(x.trim()));

    if (array.some(isNaN)) 
    {
        bubbleSortResultDisplay.innerHTML = `Wprowadź tylko liczby!`;
        return;
    }

    const sortedArray = bubbleSort(array);
    bubbleSortResultDisplay.innerHTML = `Posortowana tablica: [${sortedArray.join(', ')}]`;
});

function bubbleSort(array) 
{
    for (let i = 0; i < array.length; i++) 
    {
        for (let j = 0; j < array.length - 1; j++) 
        {
            if (array[j] > array[j + 1]) 
            {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    return array;
}