/*-------------------------------- Constants --------------------------------*/
const drinks = [
    {
    name: "Lavender Rain",
    ingredients: ["lavender", "lavender", "black-tea", "milk"],
    },
    {
    name: "Honey Bloom",
    ingredients: ["honey", "honey", "peach", "matcha"],
    },
    {
    name: "Ember Shot",
    ingredients: ["espresso", "espresso", "cinnamon", "charcoal"],
    },
    {
    name: "Dream Fog",
    ingredients: ["oat-milk", "vanilla", "vanilla", "cinnamon"],
    },
    {
    name: "Stardust Cloud",
    ingredients: ["matcha", "vanilla", "oat-milk", "honey"],
    },
    {
    name: "Mint Revival",
    ingredients: ["mint", "black-tea", "charcoal", "mint"],
    }
];


/*-------------------------------- Variables --------------------------------*/
let currentMixingIngredients = [];
let drinkReady = false;


/*------------------------ Cached Element References ------------------------*/
const mixingIngredients = document.querySelectorAll(".mixing-slot");

const mixingButton = document.querySelector("#mix-btn");

const clearButton = document.querySelector("#clear-btn");

const serveButton = document.querySelector("#serve-btn");

const ingredients = document.querySelectorAll(".ingredient");

const drinkSlot = document.querySelector("#drink-slot");


/*----------------------------- Event Listeners -----------------------------*/
ingredients.forEach((ingredient) => {
    ingredient.addEventListener("click", () => {

        const ingredientName = ingredient.id;

        currentMixingIngredients.unshift(ingredientName);
        if (currentMixingIngredients.length > 4) {
            currentMixingIngredients.pop();
        }

        for (i = 0; i < 4; i++) {
            mixingIngredients[i].innerText = currentMixingIngredients[i] || "";
        }

        if (currentMixingIngredients.length === 4) {
            previewDrink();
        }

        console.log(`added: ${ingredientName}`);
        console.log(`current mix: ${currentMixingIngredients}`);
    });
});


mixingButton.addEventListener("click", handleMix);

clearButton.addEventListener("click", handleClear);

serveButton.addEventListener("click", handleServe);


/*-------------------------------- Functions --------------------------------*/
function handleMix() {
    const sortedCurrentMixingIngredients = [...currentMixingIngredients].sort();

    for (const drink of drinks) {
        const sortedIngredients = [...drink.ingredients].sort();

        if (String(sortedCurrentMixingIngredients) === String(sortedIngredients)) {
        drinkSlot.innerText = drink.name;
        drinkReady = true;
        break;
        }
    }
        if (!drinkReady) {
        drinkSlot.innerText = "Mystery Drink"; 
        drinkReady = true;
        }

    for (i = 0; i < mixingIngredients.length; i++) {
        mixingIngredients[i].innerText= "";
    }
    currentMixingIngredients = [];
}

function handleClear() {
    currentMixingIngredients = [];
    for (i = 0; i < mixingIngredients.length; i++) {
        mixingIngredients[i].innerText= "";
    }
    drinkSlot.innerText= "";
    drinkReady = false;
}

function handleServe() {
    drinkName = drinkSlot.innerText;
    if (!drinkReady) {
        console.log("You need to mix the drink first!");
    } 
    else {
        console.log(`You served the customer a ${drinkName}!`);
    }
    drinkReady = false;
    handleClear();
    }

function previewDrink() {
    const sortedCurrentMixingIngredients = [...currentMixingIngredients].sort();

    for (const drink of drinks) {

    const sortedIngredients = [...drink.ingredients].sort();

        if (String(sortedCurrentMixingIngredients) === String(sortedIngredients)) {
            drinkSlot.innerText = drink.name;
            return;
        }
        else {
            drinkSlot.innerText = "Mystery Drink";
            return;
        }
    }
}


