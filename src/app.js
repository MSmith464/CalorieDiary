console.log("Hello World!");


const apiName = 'API signup';
const apiID = '2d1ec81e';
const apiKey = '836d96fcf21461eaa22cd298d896dd07'

// calorie controller

let data = {
    allItems:{
        items: [],
    },
    total: 0
    
};

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
    numItems: '.num__items',
    itemsContainer: '.item-list',
    dateLabel: '.date'
}

function getInput() {
    foodData = {
        foodItem: document.querySelector(DOMstrings.foodItem).value,
        amount: parseInt(document.querySelector(DOMstrings.numItems).value),
    }
    return (foodData);
}

function displayItems(item, cals) {

    //Add new item to list
    let html, element, newHtml;

    element = DOMstrings.itemsContainer;

    html = '<div class="items__container"><div class="item">%Example item%</div><div class="amount">%Amt% cal <ion-icon style="margin-left: 1em" name="trash-outline"></ion-icon></div></div>';

    newHtml = html.replace('%Example item%', item.foodItem);
    newHtml = newHtml.replace('%Amt%', cals);

    document.querySelector(element).insertAdjacentHTML("beforeend",newHtml);
}

function displayDate(){
    let now, today, months, year, month;

    now = new Date();
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    today = now.getDate()
    month = now.getMonth();
    year = now.getFullYear()

    document.querySelector(DOMstrings.dateLabel).textContent = `${months[month]} ${today}, ${year}`;
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
        getFood(input.foodItem).then(calories =>{
            console.log(`The amount of calories in your ${input.foodItem} is ${calories}`);
            displayItems(input, calories);
        });
        
    }else {
        alert("Please enter a food item and an amount.")
    }

     // 2. Add item to calorie controller

    // 3. Display item and calorie count

    // 4. clear fields

};
displayDate();
setupEventListeners();

