
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
        name: "August",
        mood: "happy",
        type: "person",
        drink: "Sunshine Shot",
        lowIntuition: "Haha... did you say something? I was just enjoying the air.",
        medIntuition: "Sometimes I pretend the cups can talk. Is that weird?",
        highIntuition: "I'm craving grandma's cookies. But this place makes up for it!",
        success: "That's amazing, you always get it right!",
        fail: "It's okay I guess... just not what i was hoping for",
        portrait: "/assets/customers/August.png"
    },
    {
        name: "Cassian",
        mood: "sad",
        type: "person",
        drink: "Moonflower Veil",
        lowIntuition: "Whatever you're saying... it's not going to fix anything",
        medIntuition: "I'm used to people walking past me. You didn't",
        highIntuition: "I'm tired of pretending I'm okay",
        success: "This helps more than I can say... thank you.",
        fail: "This made my day worse... thanks anyway.",
        portrait: "/assets/customers/Cassian.png"
    },
    {
        name: "Celeste",
        mood: "happy",
        type: "person",
        drink: "Sunshine Shot",
        lowIntuition: "Try not to stare darling. It's impolite.",
        medIntuition: "Even beauty fades. But I like the way you see me",
        highIntuition: "There's a part of me that's still young and free. You noticed her.",
        success: "You do know how to spoil a lady.",
        fail: "Oh... that's not quite what I needed, darling.",
        portrait: "assets/customers/Celeste.png"
    },
    {
        name: "Clara",
        mood: "angry",
        type: "person",
        drink: "Ash & Thorns",
        lowIntuition: "If you don't know what you're doing, don't pretend you do.",
        medIntuition: "There's too much noise in this place. I came for quiet",
        highIntuition: "I act like I don't care but I do and it's infuriating!",
        success: "Well... I suppose that wasn't terrible.",
        fail: "Hmph, I've had better from a vending machine.",
        portrait: "assets/customers/Clara.png"
        
    },
    {
        name: "Dorian",
        mood: "angry",
        type: "person",
        drink: "Ash & Thorns",
        lowIntuition: "Speak up. Or better yet, don't.",
        medIntuition: "The world's a mess. You think a drink can fix it?",
        highIntuition: "What do you know about life? #$*@!.",
        success: "...You're lucky this worked.",
        fail: "This? You call this a drink?",
        portrait: "assets/customers/Dorian.png"

    },
    {
        name: "Elias",
        mood: "surprised",
        type: "person",
        drink: "Midnight Ember",
        lowIntuition: "Uh... what just happened?",
        medIntuition: "I didn't think today would end up here, but here we are.",
        highIntuition: "Surprise me!.",
        success: "Huh. That was different. But... good.",
        fail: "Weird choice...",
        portrait: "assets/customers/Elias.png"
    },
    {
        name: "Elowen",
        mood: "sad",
        type: "person",
        drink: "Moonflower Veil",
        lowIntuition: "Do you think people can just... disappear?",
        medIntuition: "I'm fine. Really. I said I'm fine.",
        highIntuition: "I wish someone would just run away with me.",
        success: "That was comforting...",
        fail: "Oh... no, I don't think I like this",
        portrait: "assets/customers/Elowen.png"
    },
    {
        name: "Emrys",
        mood: "disgusted",
        type: "person",
        drink: "Bitter Comfort",
        lowIntuition: "Ugh, this better not be sweet.",
        medIntuition: "I want something sharp. Something that bites back.",
        highIntuition: "I feel gross... can your brew fix that?",
        success: "You actually impressed me. That's rare.",
        fail: "Ugh. That made it worse, not better",
        portrait: "assets/customers/Emrys.png"
    },
    {
        name: "Iris",
        mood: "happy",
        type: "person",
        drink: "Sunshine Shot",
        lowIntuition: "Oh, I was just daydreaming about something lovely.",
        medIntuition: "Sometimes I smile so people don't worry.",
        highIntuition: "I wanted someone to see past my looks. You almost did!",
        success: "You made this just for me, didn't you?",
        fail: "It's pretty, but it's not… me.",
        portrait: "assets/customers/Iris.png"
    },
    {
        name: "Jude",
        mood: "fearful",
        type: "person",
        drink: "Floral Garden",
        lowIntuition: "I-I don't know what to say... sorry...",
        medIntuition: "Something feels wrong. It's like something's coming.",
        highIntuition: "I'm scared all the time. I just want to feel still.",
        success: "I... think I needed this. Thank you.",
        fail: "I... I can't drink this.",
        portrait: "assets/customers/Jude.png"
    },
    {
        name: "Lena",
        mood: "surprised",
        type: "person",
        drink: "Midnight Ember",
        lowIntuition: "Oh! Wait, were you saying something? I spaced out.",
        medIntuition: "This day turned sideways, help me steady it.",
        highIntuition: "Today's been full of strange little surprises, like this place!",
        success: "Ooooh! You nailed it!",
        fail: "Hmm... nope. I thought it would feel different.",
        portrait: "assets/customers/Lena.png"
    },
    {
        name: "Mara",
        mood: "fearful",
        type: "person",
        drink: "Floral Garden",
        lowIntuition: "Heh. You think you know me? You don't know stress, pfft adorable.",
        medIntuition: "There are things I've seen that I'll never unsee.",
        highIntuition: "My head feels fuzzy, I need to breathe...",
        success: "Heh... you're good. Scary good.",
        fail: "Sweetheart... not every puzzle fitts, hmm?",
        portrait: "assets/customers/Mara.png"
    },
    {
        name: "Noah",
        mood: "fearful",
        type: "person",
        drink: "Floral Garden",
        lowIntuition: "Um... h-hey...",
        medIntuition: "You're nice... I'm not used to being complimented",
        highIntuition: "When I drink warm things, I pretend someone's hugging me.",
        success: "Better than a blanket... I like it.",
        fail: "It tastes weird. Won't have that again.",
        portrait: "assets/customers/Noah.png"
    },
    {
        name: "Rowan",
        mood: "angry",
        type: "person",
        drink: "Ash & Thorns",
        lowIntuition: "You're wasting both our time, get to work.",
        medIntuition: "People always want to argue with me. You didn't. Smart.",
        highIntuition: "I need to cool off. Don't make me say that twice.",
        success: "Hmph. Alright. I'll give you that one.",
        fail: "I don't have time for this nonsense.",
        portrait: "assets/customers/Rowan.png"
    },
    {
        name: "Silas",
        mood: "happy",
        type: "person",
        drink: "Sunshine Shot",
        lowIntuition: "Ooo look! There's a raven outside! Did you see it?",
        medIntuition: "I like ice cream! or chocolate. Chocolate is nice",
        highIntuition: "Your brew gives me the best sugar rushes!",
        success: "Cooool! Thank you!",
        fail: "Bleh! That was disgusting!",
        portrait: "assets/customers/Silas.png"
    },
    {
        name: "Thorne",
        mood: "surprised",
        type: "person",
        drink: "Moonflower Veil",
        lowIntuition: "You're observant... but not enough",
        medIntuition: "Most people don't ask questions. You almost did.",
        highIntuition: "You saw past the act. Not many do.",
        success: "You read between the lines. Impressive",
        fail: "Close... but not close enough",
        portrait: "assets/customers/Thorne.png"
    },
    {
        name: "Vera",
        mood: "sad",
        type: "person",
        drink: "Moonflower Veil",
        lowIntuition: "hmm? What did you say?",
        medIntuition: "You remind me of someone... someone I loved dearly.",
        highIntuition: "I'm ruminating, bring me back to the present.",
        success: "This tastes like memory. Painful... but right.",
        fail: "No. That only made it heavier.",
        portrait: "assets/customers/Vera.png"
    },
    {
        name: "Wren",
        mood: "sad",
        type: "person",
        drink: "Midnight Ember",
        lowIntuition: "Haha-oh, I forgot what I was saying. Silly me!",
        medIntuition: "I laugh too much... so I don't... nevermind.",
        highIntuition: "You saw the crack in my smile, didn't you?",
        success: "Haha... you got me. That's just what I needed.",
        fail: "Oh, sweetie... it's alright, I'm used to being let down.",
        portrait: "assets/customers/Wren.png"
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
        recipe: "1x Matcha, 1x Mint, 1x Licorice Root & 1x Lavender",
    },
    {
        drink: "Midnight Ember",
        customerMood: "Works best for surprised customers",
        icon: "black",
        recipe: "1x Charcoal, 1x Cinnamon, 1x Matcha & 1x Mint"
    }
];

export {drinks, customers, drinkGuide};