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

const customers = [
    {
        name: "Zoe",
        mood: "happy",
        type: "person",
        drink: "Honey Bloom",
        lowIntuition: "...",
        medIntuition: "I don't want this to end!",
        highIntuition: "I'm in the best mood today!",
        success: "Let's keep spreading the kindess!",
        fail: "Isn't that a buzzkill..."
    },
    {
        name: "Alex",
        mood: "sad",
        type: "person",
        drink: "Lavender Rain",
        lowIntuition: "...",
        medIntuition: "Everything feels a bit... dim.",
        highIntuition: "I feel so down.",
        success: "That's exactly what I needed.",
        fail: "It didn't reach me."
    },
    {
        name: "Quinn",
        mood: "angry",
        type: "person",
        drink: "Ember Shot",
        lowIntuition: "...",
        medIntuition: "Everything's going wrong!",
        highIntuition: "I'm furious and I don't know what to do with it!",
        success: "That hit like fire in my chest.",
        fail: "Pfft, You call this a shot?"
    },
    {
        name: "Jack",
        mood: "fearful",
        type: "person",
        drink: "Dream Fog",
        lowIntuition: "...",
        medIntuition: "It's been hard to breathe lately.",
        highIntuition: "I'm feelin anxious and I need to relax.",
        success: "That calmed my nerves!",
        fail: "It made it worse."
    },
    {
        name: "Jessica",
        mood: "disgusted",
        type: "person",
        drink: "Mint Revival",
        lowIntuition: "...",
        medIntuition: "Everything is just so... ugh.",
        highIntuition: "I need to feel like a bubble bath.",
        success: "Just Right!",
        fail: "I think I'm going to be sick..."
    },
    {
        name: "Ryan",
        mood: "surprised",
        type: "person",
        drink: "Honey Bloom",
        lowIntuition: "...",
        medIntuition: "Today's been interesting to say the least.",
        highIntuition: "Throw something wild at me I'm here for it!",
        success: "Whoa... I didn't see that coming.",
        fail: "That was boring."
    }
];

const drinkGuide = [
    {
        drink: "Honey Bloom",
        customerMood: "happy",
        icon: "",
        recipe: "2 of honey, 1 of peach & 1 of matcha",
    },
    {
        drink: "Lavender Rain",
        customerMood: "sad",
        icon: "",
        recipe: "2 of lavender, 1 of black tea & 1 of milk",
    },
    {
        drink: "Ember Shot",
        customerMood: "angry",
        icon: "",
        recipe: "2 of espresso, 1 of cinnamon & 1 of charcoal",
    },
    {
        drink: "Dream Fog",
        customerMood: "fearful",
        icon: "",
        recipe: "1 of oat milk, 2 of vanilla & 1 of cinnamon",
    },
    {
        drink: "Mint Revival",
        customerMood: "disgusted",
        icon: "",
        recipe: "2 of mint, 1 of black tea & 1 of charcoal",
    },
    {
        drink: "Stardust Cloud",
        customerMood: "surprised",
        icon: "",
        recipe: "1 of matcha, 1 of oat milk, 1 of vanilla & 1 of honey",
    }
];



/*-------------------------------- Variables --------------------------------*/
let currentMixingIngredients = [];

let drinkReady = false;

let night= 1;

let points= 0;

let energy = 0;

let charm = 0;

let intuition = 0;

let randomIndex = Math.floor(Math.random() * customers.length);

let randomNumber = Math.floor((Math.random() * 6) + 1);

let currentCustomer = customers[randomIndex];

let currentIndex = 0;

/*------------------------ Cached Element References ------------------------*/
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
};

function handleClear() {
    currentMixingIngredients = [];
    for (i = 0; i < mixingIngredients.length; i++) {
        mixingIngredients[i].innerText= "";
    }
    drinkSlot.innerText= "";
    drinkReady = false;
};

function handleServe() {
    drinkName = drinkSlot.innerText;
    if (!drinkReady) {
        console.log("You need to mix the drink first!");
        return;
    } 

    if (drinkName === currentCustomer.drink) {
        dialogue.innerText = currentCustomer.success;
        console.log(`You served a ${drinkName} which is the right drink!`);
    }

    else {
        dialogue.innerText = currentCustomer.fail;
        console.log(`You served the customer a ${drinkName} which is the wrong drink!`);
    }

    drinkReady = false;
    handleClear();
    displayNewCustomer();
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
    dialogue.innerText = currentCustomer.highIntuition;
};

function displayNewCustomer() {
    randomIndex = Math.floor(Math.random() * customers.length);
    currentCustomer = customers[randomIndex];
    displayCustomer();
};

function rollDice() {

energy = Math.floor((Math.random() * 6) + 1);

    if (energy === 1 || energy === 2) {
        energyBar.innerHTML= `
            <div class="bar-block energy-bar-filled"></div>
            <div class="bar-block energy-bar-empty"></div> 
            <div class="bar-block energy-bar-empty"></div>
            `;
    }       

    else if (energy === 3 || energy === 4) {
    energyBar.innerHTML= `
            <div class="bar-block energy-bar-filled"></div>
            <div class="bar-block energy-bar-filled"></div> 
            <div class="bar-block energy-bar-empty"></div>
            `;
    }

    else if (energy === 5 || energy === 6) {
    energyBar.innerHTML= `
            <div class="bar-block energy-bar-filled"></div>
            <div class="bar-block energy-bar-filled"></div> 
            <div class="bar-block energy-bar-filled"></div>
            `;
    }

charm = Math.floor((Math.random() * 6) + 1);

    if (charm === 1 || charm === 2) {
    charmBar.innerHTML= `
            <div class="bar-block charm-bar-filled"></div>
            <div class="bar-block charm-bar-empty"></div> 
            <div class="bar-block charm-bar-empty"></div>
            `;
    }

    else if (charm === 3 || charm === 4) {
    charmBar.innerHTML= `
            <div class="bar-block charm-bar-filled"></div>
            <div class="bar-block charm-bar-filled"></div> 
            <div class="bar-block charm-bar-empty"></div>
            `;
    }

    else if (charm === 5 || charm === 6) {
    charmBar.innerHTML= `
            <div class="bar-block charm-bar-filled"></div>
            <div class="bar-block charm-bar-filled"></div> 
            <div class="bar-block charm-bar-filled"></div>
            `;
    }

intuition  = Math.floor((Math.random() * 6) + 1);

    if (intuition === 1 || intuition === 2) {
    intuitionBar.innerHTML= `
            <div class="bar-block intuition-bar-filled"></div>
            <div class="bar-block intuition-bar-empty"></div> 
            <div class="bar-block intuition-bar-empty"></div>
            `
            return;
    }

    else if (intuition === 3 || intuition === 4) {
    intuitionBar.innerHTML= `
            <div class="bar-block intuition-bar-filled"></div>
            <div class="bar-block intuition-bar-filled"></div> 
            <div class="bar-block intuition-bar-empty"></div>
            `
            return;
    }

    else if (intuition === 5 || intuition === 6) {
    intuitionBar.innerHTML= `
            <div class="bar-block intuition-bar-filled"></div>
            <div class="bar-block intuition-bar-filled"></div> 
            <div class="bar-block intuition-bar-filled"></div>
            `;
            return;
    }
}

function displayDropdownGuide(currentIndex) {
    if (currentIndex >= 0 && currentIndex < drinkGuide.length) {
        drinkGuideName.innerText = drinkGuide[currentIndex].drink;
        drinkGuideIcon.innerText = drinkGuide[currentIndex].icon;
        drinkGuideMood.innerText = drinkGuide[currentIndex].customerMood;
        drinkGuideContent.innerText = drinkGuide[currentIndex].recipe;
    }
}

function nextPage() {
    drinkGuideNext.addEventListener("click", () => {
        if (currentIndex < drinkGuide.length - 1) {
        currentIndex += 1;
        drinkGuide[currentIndex];
        displayDropdownGuide(currentIndex);
        }
        else {
            console.log("You are at the end of the recipe book!")
        }
    });
}

function previouspage() {
    drinkGuidePrevious.addEventListener("click", () => {
        if (currentIndex > 0)  {
        currentIndex -= 1;
        drinkGuide[currentIndex];
        displayDropdownGuide(currentIndex);
        }
        else {
            console.log("You are at the start of the recipe book!")
        }
        });
}


rollDice();
console.log(`You rolled a ${energy} for energy!`);
console.log(`You rolled a ${charm} for charm!`);
console.log(`You rolled a ${intuition} for intuition!`);

displayCustomer();

displayDropdownGuide(currentIndex);

nextPage();
previouspage();







