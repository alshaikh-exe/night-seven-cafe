import {drinks, customers, drinkGuide} from "./data.js";

/*-------------------------------- Variables --------------------------------*/
let currentMixingIngredients = [];

let drinkReady = false;

let night = 1;

let points = 0;

let customersLeft = 0;

let maxNights = 7;

let pointsRequired = [5, 6, 7, 8, 9, 12, 15];

let energy = 0;

let charm = 0;

let intuition = 0;

let randomIndex = Math.floor(Math.random() * customers.length);

let currentCustomer = customers[randomIndex];

let currentIndex = 0;

let servedCustomers = [];

/*------------------------ Cached Element References ------------------------*/
const currentNight = document.querySelector("#title");

const currentGoal = document.querySelector("#goal");

const mixingIngredients = document.querySelectorAll(".mixing-slot");

const mixingButton = document.querySelector("#mix-btn");

const clearButton = document.querySelector("#clear-btn");

const serveButton = document.querySelector("#serve-btn");

const ingredients = document.querySelectorAll(".ingredient");

const drinkSlot = document.querySelector("#drink-slot");

const customer = document.querySelector("#customer");

const customerName = document.querySelector("#customer-name");

const dialogue = document.querySelector("#dialogue");

const energyBar = document.querySelector(".energy-bar-blocks");

const charmBar = document.querySelector(".charm-bar-blocks");

const intuitionBar = document.querySelector(".intuition-bar-blocks");

const drinkGuideName = document.querySelector(".dropdown-drink-name");

const drinkGuideIcon = document.querySelector(".dropdown-drink-icon");

const drinkGuideMood = document.querySelector(".mood");

const drinkGuideContent = document.querySelector(".dropdown-drink-description");

const drinkGuideNext = document.querySelector("#next");

const drinkGuidePrevious = document.querySelector("#previous");

const resultScreen = document.querySelector("#result-screen");

const message = document.querySelector("#result-message");

const nextButton = document.querySelector("#result-next");

const retryButton = document.querySelector("#result-retry");

const resetButton = document.querySelector("#reset");


/*----------------------------- Event Listeners -----------------------------*/
ingredients.forEach((ingredient) => {
    ingredient.addEventListener("click", () => {

        const ingredientName = ingredient.id;

        currentMixingIngredients.unshift(ingredientName);
        if (currentMixingIngredients.length > 4) {
            currentMixingIngredients.pop();
        }

        for (let i = 0; i < 4; i++) {
            mixingIngredients[i].innerText = currentMixingIngredients[i] || "";
        }

        if (currentMixingIngredients.length === 4) {
            previewDrink();
        }

        console.log(`current mix: ${currentMixingIngredients}`);
    });
});


mixingButton.addEventListener("click", handleMix);

clearButton.addEventListener("click", handleClear);

serveButton.addEventListener("click", handleServe);

nextButton.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    night++;
    startNight();
    });

retryButton.addEventListener("click", () => {
    resultScreen.classList.add("hidden");
    startNight();
    });

resetButton.addEventListener("click", resetGame);


/*-------------------------------- Functions --------------------------------*/
function startNight() {
    points = 0;
    drinkReady = false;
    servedCustomers = [];
    handleClear();
    rollDice();
    displayNightProgress();
    displayNewCustomer();

    console.log(`You rolled a ${energy} for energy!`);
    console.log(`You rolled a ${charm} for charm!`);
    console.log(`You rolled a ${intuition} for intuition!`);
}

function displayNightProgress() {
    currentNight.innerText = `Night: ${night}`;
    currentGoal.innerText = `Goal: ${points}/${pointsRequired[night -1]}`;
}

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

    for (let i = 0; i < mixingIngredients.length; i++) {
        mixingIngredients[i].innerText= "";
    }
    currentMixingIngredients = [];
};

function handleClear() {
    currentMixingIngredients = [];
    for (let i = 0; i < mixingIngredients.length; i++) {
        mixingIngredients[i].innerText= "";
    }
    drinkSlot.innerText= "";
    drinkReady = false;
};

function handleServe() {
   const drinkName = drinkSlot.innerText;
    if (!drinkReady) {
        console.log("You need to mix the drink first!");
        return;
    } 

    if (drinkName === currentCustomer.drink) {
        if (charm < 4)
        {
            points += 1;
        }
        else if (charm >= 4 && charm <= 6) {
            points += 2;
        }
        else {
            points += 3;
        }

        dialogue.innerText = currentCustomer.success;
        console.log(`You served a ${drinkName} which is the right drink!`);
    }

    else {
        dialogue.innerText = currentCustomer.fail;
        console.log(`You served the customer a ${drinkName} which is the wrong drink!`);
    }

    customersLeft--;
    displayNightProgress();
    drinkReady = false;
    handleClear();
    if (customersLeft > 0) {
        displayNewCustomer();
    }
    else {
        checkNightStatus();
    }
};

function previewDrink() {
    const sortedCurrentMixingIngredients = [...currentMixingIngredients].sort();

    for (const drink of drinks) {

    const sortedIngredients = [...drink.ingredients].sort();

        if (String(sortedCurrentMixingIngredients) === String(sortedIngredients)) {
            drinkSlot.innerText = drink.name;
            return;
        }
    }
    
    drinkSlot.innerText = "Mystery Drink";
};

function displayCustomer() {
    customerName.innerText = currentCustomer.name;
    if (customersLeft > 0) {
        if (intuition <=3) {
            dialogue.innerText = currentCustomer.lowIntuition;
        }
        else if (intuition >= 4 && intuition < 6) {
            dialogue.innerText = currentCustomer.medIntuition;
        }
        else {
            dialogue.innerText = currentCustomer.highIntuition;
        }
    }
    
};

function displayNewCustomer() {

    let newCustomer;
    
    do {
    randomIndex = Math.floor(Math.random() * customers.length);
    newCustomer= customers[randomIndex];
    } while (servedCustomers.includes(newCustomer.name));
    
        currentCustomer = newCustomer;
        servedCustomers.push(currentCustomer.name);

    displayCustomer();
};

function rollDice() {

energy = Math.floor((Math.random() * 6) + 1);

    if (energy <= 3) {
        energyBar.innerHTML= `
            <div class="bar-block energy-bar-filled"></div>
            <div class="bar-block energy-bar-empty"></div> 
            <div class="bar-block energy-bar-empty"></div>
            `;
        customersLeft = 5;
    }       

    else if (energy >= 4 && energy < 6) {
    energyBar.innerHTML= `
            <div class="bar-block energy-bar-filled"></div>
            <div class="bar-block energy-bar-filled"></div> 
            <div class="bar-block energy-bar-empty"></div>
            `;
        customersLeft = 7;
    }

    else if (energy === 6) {
    energyBar.innerHTML= `
            <div class="bar-block energy-bar-filled"></div>
            <div class="bar-block energy-bar-filled"></div> 
            <div class="bar-block energy-bar-filled"></div>
            `;
        customersLeft = 9;
    }

charm = Math.floor((Math.random() * 6) + 1);

    if (charm <= 3) {
    charmBar.innerHTML= `
            <div class="bar-block charm-bar-filled"></div>
            <div class="bar-block charm-bar-empty"></div> 
            <div class="bar-block charm-bar-empty"></div>
            `;
    }

    else if (charm >= 4 && charm < 6) {
    charmBar.innerHTML= `
            <div class="bar-block charm-bar-filled"></div>
            <div class="bar-block charm-bar-filled"></div> 
            <div class="bar-block charm-bar-empty"></div>
            `;
    }

    else if (charm === 6) {
    charmBar.innerHTML= `
            <div class="bar-block charm-bar-filled"></div>
            <div class="bar-block charm-bar-filled"></div> 
            <div class="bar-block charm-bar-filled"></div>
            `;
    }

intuition  = Math.floor((Math.random() * 6) + 1);

    if (intuition <= 3) {
    intuitionBar.innerHTML= `
            <div class="bar-block intuition-bar-filled"></div>
            <div class="bar-block intuition-bar-empty"></div> 
            <div class="bar-block intuition-bar-empty"></div>
            `
            return;
    }

    else if (intuition >= 4 && intuition < 6) {
    intuitionBar.innerHTML= `
            <div class="bar-block intuition-bar-filled"></div>
            <div class="bar-block intuition-bar-filled"></div> 
            <div class="bar-block intuition-bar-empty"></div>
            `
            return;
    }

    else if (intuition === 6) {
    intuitionBar.innerHTML= `
            <div class="bar-block intuition-bar-filled"></div>
            <div class="bar-block intuition-bar-filled"></div> 
            <div class="bar-block intuition-bar-filled"></div>
            `;
            return;
    }
};

function displayDropdownGuide(currentIndex) {
    if (currentIndex >= 0 && currentIndex < drinkGuide.length) {
        drinkGuideName.innerText = drinkGuide[currentIndex].drink;
        drinkGuideIcon.innerText = drinkGuide[currentIndex].icon;
        drinkGuideMood.innerText = drinkGuide[currentIndex].customerMood;
        drinkGuideContent.innerText = drinkGuide[currentIndex].recipe;
    }
};

function nextPage() {
    drinkGuideNext.addEventListener("click", () => {
        if (currentIndex < drinkGuide.length - 1) {
        currentIndex += 1;
        displayDropdownGuide(currentIndex);
        }
        else {
            console.log("You are at the end of the recipe book!")
        }
    });
};

function previouspage() {
    drinkGuidePrevious.addEventListener("click", () => {
        if (currentIndex > 0)  {
        currentIndex -= 1;
        displayDropdownGuide(currentIndex);
        }
        else {
            console.log("You are at the start of the recipe book!")
        }
        });
};

function checkNightStatus() {
    const target = pointsRequired[night - 1];
    console.log(`Checking status, Points: ${points}, Target: ${pointsRequired}`);
    if (points >= target) {
        displayResultScreen("success");
    }
    else {
        displayResultScreen("fail");
    }
};

function displayResultScreen(status) {
    console.log("Displaying Result Screen...")

    resultScreen.classList.remove("hidden");

if (status === "success") {
    message.innerText = `Night ${night} Complete!`;
    nextButton.disabled = false;
    retryButton.disabled = true;
}
else {
    message.innerText = "Try Again!";
    nextButton.disabled = true;
    retryButton.disabled = false;
}
};

function resetGame() {
    night = 1;
    points = 0;
    currentMixingIngredients = [];
    drinkReady = false;

    energyBar.innerHTML = "";
    charmBar.innerHTML = "";
    intuitionBar.innerHTML = "";

    dialogue.innerText = "";
    drinkSlot.innerText = "";

    if (resultScreen) {
        resultScreen.classList.add("hidden");
    }

    startNight();
}

startNight();


displayDropdownGuide(currentIndex);

nextPage();
previouspage();



