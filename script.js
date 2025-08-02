const searchBtn = document.getElementById('search-button');
const searchFoodInput = document.getElementById('search-input');
const resultContainer = document.getElementById('result-container');



























































// searchBtn.addEventListener('click', performSearch);
// searchFoodInput.addEventListener('keydown', function (event) {
//     if (event.key === "Enter") {
//         performSearch();
//     }
// });

// async function performSearch() {
//     const query = searchFoodInput.value.trim();
//     const response = await fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(query)}&api_key=EZP7B3xRD88QmIaeLKsozrgfqG9N3Z6tRLtQikrG`);
//     const data = await response.json();

//     let html = "";
//     if (data.foods) {
//         data.foods.forEach(food => {
//             html += `
//                 <section class="food-item">
//                     <h3>${food.description}</h3>
//                     <button class="show-macros-btn" data-id="${food.fdcId}">Show Macros</button>
//                     <div class="macros" id="macros-${food.fdcId}"></div>
//                 </section>
//             `;
//         });
//     } else {
//         html = "Sorry not found";
//     }

//     resultContainer.innerHTML = html;
// }

// // ✅ Use event delegation
// document.addEventListener('click', async function (event) {
//     if (!event.target.classList.contains('show-macros-btn')) return;

//     const fdcId = event.target.getAttribute('data-id');
//     const macroDiv = document.getElementById(`macros-${fdcId}`);
//     if (!macroDiv) {
//         console.error(`macroDiv not found for id macros-${fdcId}`);
//         return;
//     }

//     const { protein } = await getFoodDetails(fdcId);
//     const amount = protein?.value || 'N/A';

//     macroDiv.innerHTML = `<p>Protein: ${amount}g</p>`;
// });

// async function getFoodDetails(fdcId) {
//     const response = await fetch(`https://api.nal.usda.gov/fdc/v1/food/${fdcId}?api_key=EZP7B3xRD88QmIaeLKsozrgfqG9N3Z6tRLtQikrG`);
//     const data = await response.json();

//     const nutrients = data.foodNutrients || [];
//     const protein = nutrients.find(n => n.nutrientName === 'Protein');

//     return { protein };
// }
