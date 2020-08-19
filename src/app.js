console.log("Hello World!");


const apiName = 'API signup';
const apiID = '2d1ec81e';
const apiKey = '836d96fcf21461eaa22cd298d896dd07'

// calorie controller
function calculateCalories() {

}

//food api
async function getFood(food) {
    let cals;

    try {
        const result = await
            fetch (`https://api.edamam.com/api/food-database/v2/parser?ingr=${food}&app_id=${apiID}&app_key=${apiKey}`);

        //parse the json data    
        const data = await result.json();
        console.log(data.hints[0].food.nutrients.ENERC_KCAL);
        cals = (data.hints[0].food.nutrients.ENERC_KCAL);

        cals = cals.toFixed(2);
        return cals;
    }catch(error){
        console.log(error);
    }
};

//UI Controller
let DOMstrings = {
    foodItem: '.food__item',
    addButton: '.add__btn',
    numItems: '.num__items'
}

function getInput() {
    foodData = {
        foodItem: document.querySelector(DOMstrings.foodItem).value,
        amount: parseInt(document.querySelector(DOMstrings.numItems).value)
    }
    return (foodData);
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
    let input, calories, newItem;


    // 1. Get new item entry
    input = getInput();

    if (input.foodItem !== "" && input.amount > 0){
        getFood(input.foodItem).then(calories =>
            console.log(`The amount of calories in your ${input.foodItem} is ${calories}`));
    }else {
        alert("Please enter a food item and an amount.")
    }


    

    // 2. Add item to calorie controller

    // 3. Display item and calorie count

    // 4. clear fields

};

setupEventListeners();

