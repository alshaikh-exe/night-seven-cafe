
const drinks = [
    {
    name: "Moonflower Veil",
    ingredients: ["lavender", "jasmine", "oat-milk", "rosewater"],
    icon: "lavender"
    },
    {
    name: "Sunshine Shot",
    ingredients: ["oat-milk", "vanilla", "honeycomb", "cinnamon"],
    icon: "cream-white"
    },
    {
    name: "Ash & Thorns",
    ingredients: ["cinnamon", "licorice-root", "rosewater", "charcoal"],
    icon: "brown"
    },
    {
    name: "Floral Garden",
    ingredients: ["sakura", "rosewater", "mint", "honeycomb"],
    icon: "pink"
    },
    {
    name: "Midnight Ember",
    ingredients: ["charcoal", "cinnamon", "matcha", "mint"],
    icon: "black"
    },
    {
    name: "Bitter Comfort",
    ingredients: ["mint", "matcha", "lavender", "licorice-root"],
    icon: "green"
    }
];

const customers = [
    {
        name: "Zoe",
        mood: "happy",
        type: "person",
        drink: "Sunshine Shot",
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
        drink: "Moonflower Veil",
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
        drink: "Ash & Thorns",
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
        drink: "Floral Garden",
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
        drink: "Bitter Comfort",
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
        drink: "Midnight Ember",
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
        drink: "Midnight Ember",
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
        drink: "Sunshine Shot",
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
        drink: "Moonflower Veil",
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
        drink: "Bitter Comfort",
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
        drink: "Ash & Thorns",
        lowIntuition: "...",
        medIntuition: "do not speak to me.",
        highIntuition: "I hate everything and everyone!",
        success: "I take that back.",
        fail: "#$/!@."
    },
];

const drinkGuide = [
    {
        drink: "Sunshine Shot",
        customerMood: "Works best for happy customers",
        icon: "cream-white",
        recipe: "1x Oat Milk, 1x Vanilla, 1x Honeycomb & 1x Cinnamon ",
    },
    {
        drink: "Moonflower Veil",
        customerMood: "Works best for sad customers",
        icon: "lavender",
        recipe: "1x Lavender, 1x Jasmine, 1x Oat-milk & 1x Rosewater",
    },
    {
        drink: "Ash & Thorns",
        customerMood: "Works best for angry customers",
        icon: "brown",
        recipe: "1x Charcoal, 1x Cinnamon, 1x Licorice Root & 1x Rosewater",
    },
    {
        drink: "Floral Garden",
        customerMood: "Works best for fearful customers",
        icon: "pink",
        recipe: "1x Sakura, 1x Rosewater, 1x Mint & 1x Honeycomb",
    },
    {
        drink: "Bitter Comfort",
        customerMood: "Works best for disgusted customers",
        icon: "green",
        recipe: "1x Matcha, 1x Matcha, 1x Licorice Root & 1x Lavender",
    },
    {
        drink: "Midnight Ember",
        customerMood: "Works best for surprised customers",
        icon: "black",
        recipe: "1x Charcoal, 1x Cinnamon, 1x Matcha & 1x Mint"
    }
];

export {drinks, customers, drinkGuide};