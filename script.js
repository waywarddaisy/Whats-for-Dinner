
const recipeZero = {
    name: 'Charcuterie',
    categories: ['fastAndEasy', 'no-cook', 'dinner'],
    ingredients: ['assorted crackers', ' salami', ' thinly shaved meat you enjoy', ' dried fruit you enjoy', ' brie', ' boursin cheese', ' smoked gouda', ' grapes', ' green olives', ' hummus or other veggie dip', ' carrot sticks', ' red bell pepper slices', ' strawberries or other fruit you enjoy', ' lettuce', ' cornichons', 'roasted nuts'],
    instructions: 'Make a pretty arrangement out of all of the above, pairing things that taste good together',
   
};

const recipeOne = {
    name: 'Tuna and Carrot Salad on Croissant Bread',
    categories: ['fastAndEasy', 'no-cook', 'dinner'],
    ingredients: ['(3 cans) white albacore tuna', '(3 tbsp) mayonaise', '(3) green onions', '(1/4 cup) flat-leaf parsley', 
    '(1/4 cup) dill', '(1 tbsp) capers', '(3 tbsp) whole-grain mustard', '( 2 lemons worth) lemon zest', '(pinch) cayenne pepper', '(1.5 cups) julienned carrots', 
    '(2 tbsp) lemon juice', '(4) croissants or croissant bread', '(1/4 cup) olive oil'],
    instructions: 'Mix together tuna, mayo, 1 tbsp mustard, green onions, dill, capers, half lemon zest, cayenne, salt and pepper. Set aside to make carrot salad. Mix carrots, lemon juice, parsley, 2 tbsp mustard, olive oil, salt and pepper. Build sandwiches with tuna, carrots and croissants',
   
};

const recipeTwo = {
    name: 'Tacos with Black Beans',
    categories: ['fastAndEasy','dinner'],
    ingredients: ['(1lb) ground beef (you can sub with salmon or precooked chicken)', 'corn tortillas', '(1 cup) shredded cheddar cheese or cotija', '(2) limes', '(1) onion', ' cilantro', ' shredded lettuce or cabbage',
'(2 cans) black beans', '(2) tomatoes', '(3 tsp) olive oil', ' (1) clove garlic', 'oregano'],
    instructions: 'Chop onion (reserve 1/4 for toppings). Put a little bit of Add olive oil to the pan on low and cook onions until transluscent. Add garlic and oregano until fragrant. Drain beans and cook in pan with onions for at least 20 mins adding salt and pepper as needed. Cook beef until brown, with salt and pepper. While meat cooks shred cheese, chop tomatos, shred lettuce and cut limes. Warm tortillas on open flame and serve when everythign is ready. For my taco I like meat first, then cheese, then tomato, lettuce and chopped cilantro and lime. Beans on the side',
    };

const recipeThree = {
    name: 'Chicken Quesadillas with Pico de Gallo',
    categories: ['fastAndEasy', 'dinner'],
    ingredients: ['butter for the pan', 'flour tortillas', 'shredded cheddar cheese', 'pre-cooked chicken pieces', '(1) tomato', '(1/4) onion', 'cilantro', '(2) limes', '(1) avocado diced'],
    instructions: 'Make Pico de Gallo first by combining all chopped veggies and adding salt to taste. Put a small amount of butter on the pan so the torilla does not stick. Cook tortillas with cheese and chicken pieces inside. Serve with Pico de gallo and any other salsa you would like',   
    };
const recipeFour = {
    name: 'Pizza and Salad',
    categories: ['baked','dinner'],
    ingredients: ['(3 3/4 cups) flour', '(1 tbsp) dry active yeast', '(1 tbsp) salt', '(1 tbsp) sugar', '(1 1/3 cups) warm water', '(3 tbsp) olive oil', '(1/2 cup) tomato sauce', '(1/4 cup) tomato paste', '(3) garlic cloves', '(1 tbsp) oregano', '(1/2 tbsp) thyme','(1 tsp) rosemary', '(1 tbsp) basil', 'pepperoni', '(2 logs) mozarella in water', '(1-3/4 cups) grated parmesan', '(4 cups) arugula', '(2) tomatoes', '(1/4 cup) pepperoncinis', '(1) lemon', '(1/4) onion' ],
    instructions: 'Put warm water in mixing bowl and add yeast. Let dissolve for a few mins before adding salt, sugar and flour. Mix in mixer intil mostly combined and add olive oil. Add more flour as needed. Coat bowl with olive oil and roll dough around in it before covering with a wet cloth and letting rise for an hour. Mix all ingredients for tomato sauce together. Preheat oven to 475 and roll out dough onto sheet pan. Spread tomato sauce onto ddough and cover with mozarella, pepperoni and parmesan. Bake pizza at 475 for 20-25 mins or until done. Create salad with arugula, tomatoes, onion and pepperoncinis and a viniagrette with equal parts lemon juice and olive oil with salt and pepper. Feel free to add whatever other veggies are on hand ',
    };
const recipeFive = {
    name: 'Fig, Bacon and Brie Sandwiches',
    categories: ['fastAndEasy', 'dinner'],
    ingredients: ['(1) baguette', '(1 package) bacon', 'arugula', 'fig jam', 'brie cheese'],
    instructions: 'Cook bacon. Cut open baguette and spread with fig jam topped with bacon, brie slices and stuffed with arugula. Cut into portions ',
    };


const whatsForDinner = ()=> {
    let randomNum = Math.floor(Math.random() * 6); 
    switch(randomNum){
    case 0: 
    return console.log('Dinner Tonight will be ' + recipeZero.name + '. Here is what you need to know. Ingredients: '+ recipeZero.ingredients + 
    '. Instructions: ' + recipeZero.instructions + '. Bon Appetit!');
        break;
    case 1: 
    return console.log('Dinner Tonight will be ' + recipeOne.name + '. Here is what you need to know. Ingredients: '+ recipeOne.ingredients + 
    '. Instructions: ' + recipeOne.instructions + '. Bon Appetit!');
        break;
    case 2:
    return console.log('Dinner Tonight will be ' + recipeTwo.name + '. Here is what you need to know. Ingredients: '+ recipeTwo.ingredients + 
    '. Instructions: ' + recipeTwo.instructions + '. Bon Appetit!');
        break;
    case 3: 
    return console.log('Dinner Tonight will be ' + recipeThree.name + '. Here is what you need to know. Ingredients: '+ recipeThree.ingredients + 
    '. Instructions: ' + recipeThree.instructions + '. Bon Appetit!');
        break;
    case 4:
    return console.log('Dinner Tonight will be ' + recipeFour.name + '. Here is what you need to know. Ingredients: '+ recipeFour.ingredients + 
    '. Instructions: ' + recipeFour.instructions + '. Bon Appetit!');
        break;
    case 5: 
    return console.log('Dinner Tonight will be ' + recipeFive.name + '. Here is what you need to know. Ingredients: '+ recipeFive.ingredients + 
    '. Instructions: ' + recipeFive.instructions + '. Bon Appetit!');
        break;
    }

};

whatsForDinner();