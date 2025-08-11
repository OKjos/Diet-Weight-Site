const searchBtn = document.getElementById('search-button');
const searchFoodInput = document.getElementById('search-input');
const API_KEY = '07fcd47b30a04526abc96d3cd6680460';

 searchBtn.addEventListener('click', recipeSearch);
 searchFoodInput.addEventListener('keydown', function (event) {
     if (event.key === "Enter") {
         recipeSearch();
     }
 });




async function recipeSearch() {
    const userInput = searchFoodInput.value.trim();



    const searchUrl =  `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(userInput)}&addRecipeInstructions=true&addRecipeNutrition=true&number=20&apiKey=${API_KEY}`;
    const searchResponse = await fetch(searchUrl);
    const searchData = await searchResponse.json();




    recipeDetailsSection = document.getElementById('result-container');
    recipeDetailsSection.innerHTML = '';



    searchData.results.forEach(async (recipe) => {
        const infoResponse = await fetch(`https://api.spoonacular.com/recipes/${recipe.id}/information?includeNutrition=true&apiKey=${API_KEY}`);
        const infoData = await infoResponse.json();

        const getMacro = (name) => {
            const nutrient = infoData.nutrition?.nutrients?.find(n => n.name === name);
            return nutrient ? `${nutrient.amount} ${nutrient.unit}` : 'N/A';
        };       


        const recipeHTML = `
            <section class="result-header">
                <h2 class="result-name">${infoData.title}</h2>

                <section class="img-results">
                    <img src="${infoData.image}" alt="${infoData.title}">

                    <section class="macro-container">
                    <h2>Macros</h2>
                    <h3>Carbs: ${getMacro("Carbohydrates")}</h3>
                    <h3>Fat: ${getMacro("Fat")}</h3>
                    <h3>Protein: ${getMacro("Protein")}</h3>
                    </section>
                </section>
            </section>
        `;

        recipeDetailsSection.innerHTML += recipeHTML;
    });
}


function pickDay() {
    const optionsSelect = document.getElementById('select-options-id');
    const day = document.getElementById('day').value;
    const monday = document.getElementById('monday').value;
    const tuesday = document.getElementById('tuesday').value;
    const wednesday = document.getElementById('wednesday').value;
    const thursday = document.getElementById('thursday').value;
    const friday = document.getElementById('friday').value;
    const saturday = document.getElementById('saturday').value;
    const sunday = document.getElementById('sunday').value;

    console.log(optionsSelect.value);
}




let result = document.getElementById("daily-total-container");

function testForThis() {
    let carbsEl = document.querySelector("[data-carb]");
    let fatEl = document.querySelector("[data-fat]");
    let proteinEl = document.querySelector("[data-pro]");

    let jsonData = JSON.stringify({
        carbs: carbsEl ? carbsEl.getAttribute("data-carb") : null,
        fat: fatEl ? fatEl.getAttribute("data-fat") : null,
        protein: proteinEl ? proteinEl.getAttribute("data-pro") : null
    });

    console.log(jsonData);
    result.innerHTML = jsonData;
}

testForThis();

