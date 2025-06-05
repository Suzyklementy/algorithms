
const polishFlagSubmitBtn = document.getElementById('polish_flag_submit');
const polishFlagResultDisplay = document.getElementById('polish_flag_result');

polishFlagSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let input = document.getElementById('polish_flag_array').value;
    input = input.replaceAll(' ', '');

    if (input.trim() == "") 
    {
        polishFlagResultDisplay.innerHTML = `Podaj dane wejściowe!`;
        return;
    }

    let array = input.split(',').map(x => parseInt(x.trim()));

    if (!array.every(x => x == 0 || x == 1)) 
    {
        polishFlagResultDisplay.innerHTML = `Podaj tylko zera i jedynki oddzielone przecinkami!`;
        return;
    }

    const sortedArray = sortByPolishFlag(array);
    polishFlagResultDisplay.innerHTML = `Posortowana tablica: [${sortedArray.join(', ')}]`;
});

function sortByPolishFlag(array) 
{
    let left = 0;
    let right = array.length - 1;

    while (left < right) 
    {
        if (array[left] == 0) 
        {
            left++;
        } 
        else if (array[right] == 1) 
        {
            right--;
        } 
        else 
        {
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;

            left++;
            right--;
        }
    }

    return array;
}