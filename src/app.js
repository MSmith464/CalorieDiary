console.log("Hello World!");

const apiName = 'API signup';
const apiID = '2d1ec81e';
const apiKey = '836d96fcf21461eaa22cd298d896dd07'

// calorie controller

//food api
async function getFood(food) {
    const result = await
        fetch (`https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=${apiID}&app_key=${apiKey}`);
    const data = await result.json();
    // console.log(data);
    console.log(data.hints[0].food.nutrients.ENERC_KCAL);
};

//UI Controller
let DOMstrings = {
    foodItem: '.food__item',
    addButton: '.add__btn'
}

function getInput() {
    const item = document.querySelector('.food__item').value;
    console.log(item);
    return item;
}



//App Controller
let setupEventListeners = function() {
    document.querySelector('.add__btn').addEventListener('click', addItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13){
            addItem();
        }
    });
}

function addItem() {
    let input, newItem;

    input = getInput();

    getFood(input);


    // 1. Get new item entry

    // 2. Add item to calorie controller

    // 3. Display item and calorie count

    // 4. clear fields

};

setupEventListeners();

