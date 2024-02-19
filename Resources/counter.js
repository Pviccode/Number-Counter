// select the value and the buttons
const value = document.getElementById('value');
const incrementButton = document.querySelector('.increase');
const resetButton = document.querySelector('.reset');
const decrementButton = document.querySelector('.decrease');

// Variable to track count
let count = 0;

// function to handle increase in count
const handleIncrement = () => {
    count++;
    value.innerHTML = count;

    if (count > 0) {
        value.style.color = 'green';
    }
}

// function to handle decrease in count
const handleDecrement = function() {
    count--;
    value.innerHTML = count;

    if (count < 0) {
        value.style.color = 'brown';
    }
}

// function to handle reset to default value "0"
function handleReset() {
    count = 0;
    value.innerHTML = count;
    
    if (count === 0) {
        value.style.color = '#222';
    }
}

// Add click events to the buttons
incrementButton.addEventListener('click', handleIncrement);
decrementButton.addEventListener('click', handleDecrement);
resetButton.addEventListener('click', handleReset);


num1 = 8;
num2 = 10

if (num1 > num2) {
    console.log('Hello World');

} else if (num1 < num2) {
    console.log('Hello Aliens');
} else {
    console.log('Extra-terrestial bodies');
}

let foodAvailable = 'Fisherman Soup';

if (foodAvailable === 'Fisherman Soup') {
    console.log('Give me two portions of ' + foodAvailable);
} else if (foodAvailable === 'Blended Banana') {
    console.log('Give me one cup of ' + foodAvailable);
} else if (foodAvailable === 'Fried Yam') {
    console.log('Give me five pieces of ' + foodAvailable);
} else {
    console.log('Give me whatever food is available.')
}

foodAvailable = 'Shawarma';

switch(foodAvailable) {
    case 'Amala':
        console.log('I need Amala');
        break;

    case 'Pizza':
        console.log('I need Pizza');
        break;

    case 'Burger':
        console.log('I need Burger');
        break;

    default:
        console.log('Give me moi-moi');
        break;
}

let myName = 'Victory';

let favFood = ['Rice and Beans', 'Afang Soup', 'Fried Yam', 'Bread and Tea', 'Boiled Plantain', 'Jollof rice']

console.log(myName + ' likes ' + favFood[0]);