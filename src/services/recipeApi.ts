import { Recipe, SearchResult } from '../types/Recipe';

// Mock data for demonstration
const mockSearchResults: SearchResult[] = [
  {
    id: 1,
    title: "Creamy Chicken Alfredo Pasta",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
    readyInMinutes: 30,
    servings: 4
  },
  {
    id: 2,
    title: "Classic Beef Burger with Fries",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400",
    readyInMinutes: 25,
    servings: 2
  },
  {
    id: 3,
    title: "Fresh Garden Salad",
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=400",
    readyInMinutes: 15,
    servings: 2
  },
  {
    id: 4,
    title: "Chocolate Chip Cookies",
    image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=400",
    readyInMinutes: 45,
    servings: 24
  },
  {
    id: 5,
    title: "Grilled Salmon with Vegetables",
    image: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=400",
    readyInMinutes: 20,
    servings: 4
  },
  {
    id: 6,
    title: "Homemade Pizza Margherita",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400",
    readyInMinutes: 40,
    servings: 6
  }
];

const mockRecipeDetails: { [key: number]: Recipe } = {
  1: {
    id: 1,
    title: "Creamy Chicken Alfredo Pasta",
    image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600",
    readyInMinutes: 30,
    servings: 4,
    summary: "A rich and creamy chicken alfredo pasta that's perfect for a cozy dinner. This restaurant-quality dish features tender chicken pieces and perfectly cooked pasta in a velvety parmesan cream sauce.",
    extendedIngredients: [
      { id: 1, name: "fettuccine pasta", original: "12 oz fettuccine pasta", amount: 12, unit: "oz" },
      { id: 2, name: "chicken breast", original: "1 lb boneless chicken breast, sliced", amount: 1, unit: "lb" },
      { id: 3, name: "heavy cream", original: "1 cup heavy cream", amount: 1, unit: "cup" },
      { id: 4, name: "parmesan cheese", original: "1 cup grated parmesan cheese", amount: 1, unit: "cup" },
      { id: 5, name: "butter", original: "4 tbsp butter", amount: 4, unit: "tbsp" },
      { id: 6, name: "garlic", original: "3 cloves garlic, minced", amount: 3, unit: "cloves" },
      { id: 7, name: "salt and pepper", original: "Salt and pepper to taste", amount: 1, unit: "to taste" }
    ],
    analyzedInstructions: [{
      name: "",
      steps: [
        { number: 1, step: "Cook fettuccine according to package instructions until al dente. Reserve 1 cup pasta water before draining." },
        { number: 2, step: "Season chicken with salt and pepper. In a large skillet, cook chicken over medium-high heat until golden brown and cooked through, about 6-8 minutes per side." },
        { number: 3, step: "Remove chicken and set aside. In the same pan, melt butter and sauté minced garlic for 1 minute until fragrant." },
        { number: 4, step: "Pour in heavy cream and bring to a gentle simmer. Add parmesan cheese and whisk until smooth and creamy." },
        { number: 5, step: "Return chicken to the pan and add cooked pasta. Toss everything together, adding pasta water as needed for consistency." },
        { number: 6, step: "Serve immediately with extra parmesan cheese and freshly ground black pepper." }
      ]
    }]
  },
  2: {
    id: 2,
    title: "Classic Beef Burger with Fries",
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=600",
    readyInMinutes: 25,
    servings: 2,
    summary: "Juicy beef patties grilled to perfection and served with crispy golden fries. This classic American comfort food is perfect for lunch or dinner.",
    extendedIngredients: [
      { id: 1, name: "ground beef", original: "1 lb ground beef (80/20)", amount: 1, unit: "lb" },
      { id: 2, name: "hamburger buns", original: "2 hamburger buns", amount: 2, unit: "buns" },
      { id: 3, name: "potatoes", original: "2 large potatoes, cut into fries", amount: 2, unit: "large" },
      { id: 4, name: "cheese slices", original: "2 slices of cheese", amount: 2, unit: "slices" },
      { id: 5, name: "lettuce", original: "Lettuce leaves", amount: 1, unit: "handful" },
      { id: 6, name: "tomato", original: "1 tomato, sliced", amount: 1, unit: "tomato" },
      { id: 7, name: "onion", original: "1 onion, sliced", amount: 1, unit: "onion" }
    ],
    analyzedInstructions: [{
      name: "",
      steps: [
        { number: 1, step: "Preheat grill or skillet to medium-high heat. Cut potatoes into fry shapes and soak in cold water." },
        { number: 2, step: "Form ground beef into 2 patties, season with salt and pepper. Make a small indent in the center." },
        { number: 3, step: "Cook fries in oil heated to 350°F until golden brown and crispy, about 4-5 minutes." },
        { number: 4, step: "Grill burgers for 4-5 minutes per side, adding cheese in the last minute if desired." },
        { number: 5, step: "Toast buns lightly on the grill. Assemble burgers with lettuce, tomato, onion, and your favorite condiments." },
        { number: 6, step: "Serve hot with crispy fries and enjoy!" }
      ]
    }]
  },
  3: {
    id: 3,
    title: "Fresh Garden Salad",
    image: "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=600",
    readyInMinutes: 15,
    servings: 2,
    summary: "A vibrant and healthy garden salad packed with fresh vegetables and a light vinaigrette dressing. Perfect as a side dish or light meal.",
    extendedIngredients: [
      { id: 1, name: "mixed greens", original: "4 cups mixed salad greens", amount: 4, unit: "cups" },
      { id: 2, name: "cherry tomatoes", original: "1 cup cherry tomatoes, halved", amount: 1, unit: "cup" },
      { id: 3, name: "cucumber", original: "1 cucumber, sliced", amount: 1, unit: "cucumber" },
      { id: 4, name: "red onion", original: "1/4 red onion, thinly sliced", amount: 0.25, unit: "onion" },
      { id: 5, name: "olive oil", original: "3 tbsp olive oil", amount: 3, unit: "tbsp" },
      { id: 6, name: "balsamic vinegar", original: "2 tbsp balsamic vinegar", amount: 2, unit: "tbsp" },
      { id: 7, name: "feta cheese", original: "1/2 cup crumbled feta cheese", amount: 0.5, unit: "cup" }
    ],
    analyzedInstructions: [{
      name: "",
      steps: [
        { number: 1, step: "Wash and dry all vegetables thoroughly. Arrange mixed greens in a large salad bowl." },
        { number: 2, step: "Add halved cherry tomatoes, sliced cucumber, and thin red onion slices to the greens." },
        { number: 3, step: "In a small bowl, whisk together olive oil and balsamic vinegar. Season with salt and pepper." },
        { number: 4, step: "Drizzle the dressing over the salad and toss gently to combine." },
        { number: 5, step: "Top with crumbled feta cheese and serve immediately for the freshest taste." }
      ]
    }]
  },
  4: {
    id: 4,
    title: "Chocolate Chip Cookies",
    image: "https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg?auto=compress&cs=tinysrgb&w=600",
    readyInMinutes: 45,
    servings: 24,
    summary: "Classic homemade chocolate chip cookies that are crispy on the outside and chewy on the inside. Perfect for any occasion!",
    extendedIngredients: [
      { id: 1, name: "all-purpose flour", original: "2 1/4 cups all-purpose flour", amount: 2.25, unit: "cups" },
      { id: 2, name: "butter", original: "1 cup butter, softened", amount: 1, unit: "cup" },
      { id: 3, name: "brown sugar", original: "3/4 cup brown sugar", amount: 0.75, unit: "cup" },
      { id: 4, name: "white sugar", original: "1/2 cup white sugar", amount: 0.5, unit: "cup" },
      { id: 5, name: "eggs", original: "2 large eggs", amount: 2, unit: "large" },
      { id: 6, name: "vanilla extract", original: "2 tsp vanilla extract", amount: 2, unit: "tsp" },
      { id: 7, name: "chocolate chips", original: "2 cups chocolate chips", amount: 2, unit: "cups" }
    ],
    analyzedInstructions: [{
      name: "",
      steps: [
        { number: 1, step: "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper." },
        { number: 2, step: "In a large bowl, cream together softened butter and both sugars until light and fluffy." },
        { number: 3, step: "Beat in eggs one at a time, then add vanilla extract. Mix until well combined." },
        { number: 4, step: "Gradually blend in flour, baking soda, and salt. Stir in chocolate chips." },
        { number: 5, step: "Drop rounded tablespoons of dough onto prepared baking sheets, spacing 2 inches apart." },
        { number: 6, step: "Bake for 9-11 minutes or until golden brown. Cool on baking sheet for 2 minutes before removing." }
      ]
    }]
  },
  5: {
    id: 5,
    title: "Grilled Salmon with Vegetables",
    image: "https://images.pexels.com/photos/1516415/pexels-photo-1516415.jpeg?auto=compress&cs=tinysrgb&w=600",
    readyInMinutes: 20,
    servings: 4,
    summary: "Perfectly grilled salmon fillets served with a colorful array of seasonal vegetables. A healthy and delicious meal that's ready in just 20 minutes.",
    extendedIngredients: [
      { id: 1, name: "salmon fillets", original: "4 salmon fillets (6 oz each)", amount: 4, unit: "fillets" },
      { id: 2, name: "zucchini", original: "2 zucchini, sliced", amount: 2, unit: "zucchini" },
      { id: 3, name: "bell peppers", original: "2 bell peppers, cut into strips", amount: 2, unit: "peppers" },
      { id: 4, name: "asparagus", original: "1 lb asparagus, trimmed", amount: 1, unit: "lb" },
      { id: 5, name: "olive oil", original: "1/4 cup olive oil", amount: 0.25, unit: "cup" },
      { id: 6, name: "lemon", original: "2 lemons, juiced", amount: 2, unit: "lemons" },
      { id: 7, name: "herbs", original: "Fresh herbs (dill, parsley)", amount: 1, unit: "handful" }
    ],
    analyzedInstructions: [{
      name: "",
      steps: [
        { number: 1, step: "Preheat grill to medium-high heat. Pat salmon fillets dry and season with salt and pepper." },
        { number: 2, step: "Toss vegetables with olive oil, salt, and pepper. Place in a grill basket or on foil." },
        { number: 3, step: "Grill vegetables for 8-10 minutes, turning occasionally until tender and lightly charred." },
        { number: 4, step: "Grill salmon skin-side down for 4-5 minutes, then flip and cook 3-4 minutes more." },
        { number: 5, step: "Drizzle with fresh lemon juice and garnish with chopped herbs before serving." },
        { number: 6, step: "Serve immediately with the grilled vegetables on the side." }
      ]
    }]
  },
  6: {
    id: 6,
    title: "Homemade Pizza Margherita",
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=600",
    readyInMinutes: 40,
    servings: 6,
    summary: "Authentic Italian pizza margherita with homemade dough, fresh tomato sauce, mozzarella cheese, and fresh basil. Simple ingredients, amazing flavor!",
    extendedIngredients: [
      { id: 1, name: "pizza dough", original: "1 lb pizza dough (homemade or store-bought)", amount: 1, unit: "lb" },
      { id: 2, name: "crushed tomatoes", original: "1 cup crushed tomatoes", amount: 1, unit: "cup" },
      { id: 3, name: "fresh mozzarella", original: "8 oz fresh mozzarella, sliced", amount: 8, unit: "oz" },
      { id: 4, name: "fresh basil", original: "Fresh basil leaves", amount: 1, unit: "handful" },
      { id: 5, name: "olive oil", original: "2 tbsp extra virgin olive oil", amount: 2, unit: "tbsp" },
      { id: 6, name: "garlic", original: "2 cloves garlic, minced", amount: 2, unit: "cloves" },
      { id: 7, name: "parmesan cheese", original: "1/4 cup grated parmesan", amount: 0.25, unit: "cup" }
    ],
    analyzedInstructions: [{
      name: "",
      steps: [
        { number: 1, step: "Preheat oven to 500°F (260°C). If using a pizza stone, place it in the oven while preheating." },
        { number: 2, step: "Roll out pizza dough on a floured surface to your desired thickness." },
        { number: 3, step: "Mix crushed tomatoes with minced garlic, olive oil, salt, and pepper for the sauce." },
        { number: 4, step: "Spread sauce evenly over dough, leaving a 1-inch border for the crust." },
        { number: 5, step: "Add sliced mozzarella and a sprinkle of parmesan cheese on top." },
        { number: 6, step: "Bake for 10-12 minutes until crust is golden and cheese is bubbly. Top with fresh basil before serving." }
      ]
    }]
  }
};

// Add your Spoonacular API key here
const API_KEY = 'YOUR_SPOONACULAR_API_KEY';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const searchRecipes = async (query: string): Promise<SearchResult[]> => {
  // If no API key is provided, return mock data
  if (!API_KEY || API_KEY === 'YOUR_SPOONACULAR_API_KEY') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Filter mock results based on query
    const filtered = mockSearchResults.filter(recipe =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    );
    
    return filtered.length > 0 ? filtered : mockSearchResults.slice(0, 4);
  }

  try {
    const response = await fetch(
      `${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${encodeURIComponent(query)}&number=12&addRecipeInformation=true`
    );
    
    if (!response.ok) {
      throw new Error('Failed to search recipes');
    }
    
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Recipe search error:', error);
    // Fallback to mock data on error
    return mockSearchResults.slice(0, 4);
  }
};

export const getRecipeDetails = async (id: number): Promise<Recipe> => {
  // If no API key is provided, return mock data
  if (!API_KEY || API_KEY === 'YOUR_SPOONACULAR_API_KEY') {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const mockRecipe = mockRecipeDetails[id];
    if (mockRecipe) {
      return mockRecipe;
    }
    
    // Return a generic recipe if ID not found in mock data
    return mockRecipeDetails[1];
  }

  try {
    const response = await fetch(
      `${BASE_URL}/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
    );
    
    if (!response.ok) {
      throw new Error('Failed to get recipe details');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Recipe detail error:', error);
    // Fallback to mock data on error
    return mockRecipeDetails[1];
  }
};