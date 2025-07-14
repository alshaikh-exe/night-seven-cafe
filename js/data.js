
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
        highIntuition: "I'm feeling anxious and I need to relax.",
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
        drink: "Stardust Cloud",
        lowIntuition: "...",
        medIntuition: "Today's been interesting to say the least.",
        highIntuition: "Throw something wild at me I'm here for it!",
        success: "Whoa... I didn't see that coming.",
        fail: "That was boring."
    },
    {
        name: "Abood",
        mood: "surprised",
        type: "person",
        drink: "Stardust Cloud",
        lowIntuition: "...",
        medIntuition: "I didn't expect today to go the way it did.",
        highIntuition: "I'm ready for anything, shock me!",
        success: "Whoa... that was COOOL!.",
        fail: "That was underwhelming..."
    },
    {
        name: "Hussain",
        mood: "happy",
        type: "person",
        drink: "Honey Bloom",
        lowIntuition: "...",
        medIntuition: "Isn't the world sunshine & rainbows?",
        highIntuition: "I've been smiling for an hour now.",
        success: "You just made this day even better!",
        fail: "Well... that's one way to wipe a smile away."
    },
    {
        name: "Ali",
        mood: "sad",
        type: "person",
        drink: "Lavender Rain",
        lowIntuition: "...",
        medIntuition: "I feel so cold and distant...",
        highIntuition: "Throw something wild at me I'm here for it!",
        success: "I feel warm!.",
        fail: "That was boring."
    },
    {
        name: "Fatima",
        mood: "disgusted",
        type: "person",
        drink: "Mint Revival",
        lowIntuition: "...",
        medIntuition: "I need something... refreshing.",
        highIntuition: "I need something to cleanse my palette!",
        success: "Spot on!.",
        fail: "that was horrible."
    },
    {
        name: "Zainab",
        mood: "angry",
        type: "person",
        drink: "Ember Shot",
        lowIntuition: "...",
        medIntuition: "do not speak to me.",
        highIntuition: "I hate everything and everyone!",
        success: "I take that back.",
        fail: "#$/!@."
    },
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

export {drinks, customers, drinkGuide};