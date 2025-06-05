# Dokumentacja Techniczna

Strona powstała jako projekt na lekcje informatyki. Implementuje ona działanie 9 algorytmów w postaci aplikacji webowej. Każdy algorytm został zaimplementowany w osobnym pliku który posiada funkcje z działaniem algorytmu oraz przypisaną funkcje do *.addEventListener* która łączy działanie algorytmu z UI. 

## Użyte Technologie

- HTML
- CSS
- JS

## Działanie algorytmów

### Algorytm Euklidesa

```js
function euclidean(a, b) 
{
    while (b != 0) 
    {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a; // wzraca a które jest NWD jeśli b = 0
}
```

Funkcja przyjmuje parametry a i b. Jeżeli b jest różne od zera to zamienia ze sobą wartości a i b lecz b dodatkowo jest równe a modulo przez b. Powtarza aż b bedzie równe 0.
<br>

### Algorytm flagi polskiej

```js
function sortByPolishFlag(array) 
{
    let left = 0;
    let right = array.length - 1;

    while (left < right) 
    {
        if (array[left] == 0) // jeśli array[left] = 0 to zwęża tablice o 1 do przodu
        {
            left++;
        } 
        else if (array[right] == 1) // jesli array[right] = 1 to zwęża tablice o 1 w tył
        {
            right--;
        } 
        else // zamienia ze sobą arra[left] i array[right]
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
```

Funkcja przyjmuje tablice 0 i 1 i sortuje ją by zera były na początku
<br>

### Algorytm flagi francuskiej

```js
function sortByFrenchFlag(array) 
{
    let low = 0;
    let mid = 0;
    let high = array.length - 1;

    while (mid <= high) 
    {
        if (array[mid] == 0) 
        {
            // Jeśli element to 0, zamienia go z elementem na pozycji low
            [array[low], array[mid]] = [array[mid], array[low]];
            low++;
            mid++;
        } 
        else if (array[mid] == 1) 
        {
            // Przeszukuje tablice dalej - element jest ustawiony na dobrej pozycji
            mid++;
        } 
        else 
        {
            // Jeśli element to 2, zamienia go z elementem na pozycji high
            [array[mid], array[high]] = [array[high], array[mid]];
            high--;
        }
    }

    return array;
}
```

Funkcja przyjmuje tablice 0, 1 i 2 oraz sortuje ją w kolejności 0, 1, 2.
<br>

### Algorytm Sortowania Bąbelkowego

```js
function bubbleSort(array) 
{
    for (let i = 0; i < array.length; i++) 
    {
        // porównuje sąsiednie elementy i zamienia je miejscami, jeśli są w złej kolejności
        for (let j = 0; j < array.length - 1; j++) 
        {
            if (array[j] > array[j + 1]) // zamienia elementy miejscami 
            {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
```

Funkcja przyjmuje tablice liczb i sortuje je rosnąco. algorytm działa na zasadzie porównywania sąsiadujących elementów.
<br>

### Algorytm Sortowania przez wybieranie

```js
function selectionSort(array) 
{
    for (let i = 0; i < array.length; i++) 
    {
        let minIndex = i;
       
        for (let j = i + 1; j < array.length; j++) // Szuka najmniejszego elementu w nieposortowanej części tablicy
        {
            if (array[j] < array[minIndex]) 
            {
                minIndex = j; // index najmniejszego elementu
            }
        }

        // przesuwa najmniejszy element na poczatek nie posortowanej cześci
        let temp = array[minIndex];
        array[minIndex] = array[i];
        array[i] = temp;
    }

    return array;
}
```

Funkcja przyjmuje tablice liczb i sortuje je rosnąco poprzez wyszukiwanie najmniejszego elementu i przesuwnie go na początek
<br>

### Algorytm Wyszukiwania Binarnego

```js
function binarySearch(array, x) 
{
    let low = 0;                     // Początek tablicy
    let high = array.length - 1;     // Koniec tablicy

    while (low <= high) 
    {
        // Oblicza index srodka
        let mid = Math.floor((low + high) / 2);

        if (array[mid] === x) 
        {
            return mid;  // zwraca index szukanego elementu jesli jest on srodkiem
        } 
        else if (array[mid] < x) // Jeśli wartość w środku jest mniejsza niż x przeszukuje prawą połowę tablicy
        {
            low = mid + 1;
        } 
        else // Jeśli wartość w środku jest większa niż x przeszukuje lewą połowę tablicy
        {
            high = mid - 1;
        }
    }

    return false; // zwraca false jesli element nie jest w tablicy
}
```

Funkcja przyjmuje posortowaną tablice oraz szukany element. Metoda rozdziela tablice na pół i szuka elementu w częsci gdzie powinien się on znajdować.
<br>

### Algorytm Wydawania Reszty

```js
function makeChange(amount, denominations) 
{
    const change = []; // Reszta do wydania

    for (let i = 0; i < denominations.length; i++) 
    {
        while (amount >= denominations[i]) // Odejmuje obecny nominał od kwoty dopuki nie jest on od niej wiekszy
        {
            amount -= denominations[i];
            change.push(denominations[i]); // Dodaje nominał do reszty
        }
    }

    return change; // Zwracamy tablicę z resztą
}
```

Funkcja przyjmuje kwote do wydania oraz możliwe nominały (posortowane malejąco), działa na zasadzie dodania do tablicy reszty najwiekszego nominału nie wiekszego od kwoty i odjecia jego od niej. Powtarza proces aż kwota bedzie zerem i zwraca reszte. 
<br>

### Algorytm Szyfru Cezara

Algorytm ten posiada możliwość szyfrowania i odszyfrowania. Każda funkcja przyjmuje tekst oraz klucz

```js
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // dostępne znaki które można szyfrować
```

```js
function encrypt(text, key) 
{
    let encryptedText = "";

    for (let i = 0; i < text.length; i++) 
    {
        const letter = text[i];
        const index = letters.indexOf(letter);

        if (index != -1) // sprawdza czy znak można zaszyfrować
        {
            let newIndex = (index + key); // index zaszyfrowanego znaku
            if (newIndex > letters.length) // jeśli index wychodzi poza tablice liczb
            {
                newIndex =  newIndex - letters.length // cofa sie do początku tabeli
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
```

Szyfrowanie działa na zasadzie zamieniania liter w alfabecie do przodu o podany klucz np. a = d jeśli key = 3

```js
function decrypt(text, key) 
{
    let decryptedText = "";

    for (let i = 0; i < text.length; i++) 
    {
        const letter = text[i];
        const index = letters.indexOf(letter);

        if (index != -1) // sprawdza czy znak można odszyfrować
        {
            let newIndex = (index - key); // index zaszyfrowanego znaku
            if (newIndex < 0) // jeśli index wychodzi poza tablice liczb
            {
                newIndex = newIndex + letters.length; // cofa sie do końca tabeli
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
```

Odszyfrowanie działa na zasadzie zamieniania liter w alfabecie do tyłu o podany klucz np. d = a jeśli key = 3
<br>

### Algorytm Luhna

Algorytm ten pozwala na obliczanie liczby kontrolnej dla numeru oraz jej walidowanie.

```js
function calculateControlNumber(number) 
{
    const reversed = number.split('').reverse(); // odwraca numer
    let total = 0;

    for (let i = 0; i < reversed.length; i++) 
    {
        let digit = parseInt(reversed[i]);

        // podwaja każdy nieparzysty index i dodaje go do sumy
        if (i % 2 == 0) 
        {
            total += digit;
        } 
        else 
        {
            let multiply = digit * 2;
            if (multiply > 9) multiply -= 9; // odejmuje 9 jesli wynik jest wiekszy od 9
            total += multiply;
        }
    }

    const controlNumber = (10 - (total % 10)) % 10; // oblicza cyfre kontrolną
    return controlNumber;
}
```

Funkcja przyjmuje numer bez liczby kontrolnej i oblicza ją. oblicza ja poprzez podwojenie co 2 liczby (jesli wynik jest wiekszy od 9 odejmuje 9). Dodaje do sumy podwojone oraz nie podwojone liczby i liczy ile brakuje by liczba dzieliła sie przez 10 - brakująca liczba to liczba kontrolna.

```js
function validateControlNumber(fullNumber) 
{
    const controlDigit = parseInt(fullNumber[fullNumber.length - 1]);
    const number = fullNumber.slice(0, -1).split('').reverse(); // numer bez liczby kontrolnej
    let total = 0;

    for (let i = 0; i < number.length; i++) 
    {
        let digit = parseInt(number[i]);

        // podwaja każdy nieparzysty index i dodaje go do sumy
        if (i % 2 == 0) 
        {
            total += digit;
        } 
        else 
        {
            let multiply = digit * 2;
            if (multiply > 9) multiply -= 9; // odejmuje 9 jesli wynik jest wiekszy od 9
            total += multiply;
        }
    }

    const newControlDigit = (10 - (total % 10)) % 10; // oblicza cyfre kontrolną
    return controlDigit == newControlDigit; // zwraca true jesli orginalna liczba kontrolna jest równa tej obliczonej na nowo, jeśli nie zwraca false
}
```

<br><br>

> [!IMPORTANT]
> Powysza dokumentacja obejmuje jedynie funkcje działania czystego algorytmu bez połączenia go ze stroną.

Funkcja przyjmuje numer z liczbą kontrolną. Działa na zasadzie obliczania jej na nowo (oblicza ją z numeru bez liczby kontrolnej). Oblicza ją tak samo jak w 1 przypadku. Na koniec porównuje orginalną liczbe kontrolną z tą nowo obliczoną. Jeśli liczby sa takie same to znaczy że numer jest prawidłowy (zwraca true), jeśli liczby są inne to znaczy że numer jest fałszywy (zwraca false).
