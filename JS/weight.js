const weightBtn = document.getElementById('weight-button');
const searchExercise = document.getElementById('weight-input');

weightBtn.addEventListener('click', exerciseSearch);
searchExercise.addEventListener('keydown', function (event) {
    if (event.key === "Enter") {
        exerciseSearch();
    }
});

async function exerciseSearch() {
    const userInput = searchExercise.value.trim();

    const exerciseURL = `https://www.exercisedb.dev/api/v1/bodyparts/${userInput}/exercises?offset=0&limit=10`;
    const exerciseResponse = await fetch(exerciseURL);
    const exerciseData = await exerciseResponse.json();

    
    console.log(exerciseData)

    displayResults(exerciseData.data);
}


document.addEventListener('DOMContentLoaded', () => {
    const resultsSection = document.getElementById('results');
    
    //open popup
    resultsSection.addEventListener('click', (e) => {
        const addBtn = e.target.closest('.add-btn');

        if (addBtn) {
            const muscleContainer = addBtn.closest('.muscle-container');
            const popup = muscleContainer.querySelector('.popup');
            popup.classList.add('open-Popup');
        }
    });

    //close popup
    document.addEventListener('click', (e) => {
        const closeBtn = e.target.closest('.close-btn');

        if (closeBtn) {
            const muscleContainer = closeBtn.closest('.muscle-container');
            const popup = muscleContainer.querySelector('.popup');
            popup.classList.remove('open-Popup');
        }
    });
});

function displayResults(results) {
    const resultsSection = document.getElementById("results");
    resultsSection.innerHTML = "";



    results.forEach(item => {
        const container = document.createElement('section');
        container.classList.add('results');

        container.innerHTML = `
            <section class="weight-header">
                <section class="img-results">
                    <img class="gif-results" src="${item.gifUrl}" alt="${item.name}">
                    <section class="muscle-container">
                        <h3>${item.bodyParts[0].charAt(0).toUpperCase() + item.bodyParts[0].slice(1)}</h3>
                        <h2>Primary Muscle Group: ${item.targetMuscles[0].charAt(0).toUpperCase() + item.targetMuscles[0].slice(1)}</h2>
                        <h2> Secondary Muscle Group: ${item.secondaryMuscles[0].charAt(0).toUpperCase() + item.secondaryMuscles.join(', ').slice(1)}</h2>
                        <button class="add-btn">Add</button>
                        <section class="popup">
                        <h2>Add to routine</h2>
                        <select id="routine-options-id" class="routine-options" onchange="pickDay()">
                            <option id="day" value="none" selected>Pick day</option>
                            <option id="monday" value="monday">Monday</option>
                            <option id="tuesday" value="tuesday">Tuesday</option>
                        </select>
                        <button id="close-Popup" class="close-btn">Ok</button>
                    </section>
                    </section>
                </section>
            </section>
        `
        resultsSection.appendChild(container);
    });
}
