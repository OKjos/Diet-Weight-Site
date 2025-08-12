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

function displayResults(results) {
    const resultsSection = document.getElementById("results");
    resultsSection.innerHTML = "";

    results.forEach(item => {
        const container = document.createElement('section');
        container.classList.add('results');
        container.innerHTML = `
            <section class="weight-header">
                <section class="img-results">
                    <img src="${item.gifUrl}" alt="${item.name}">

                    <section class="macro-container">
                        <h3>Targeted Body part: ${item.bodyParts}</h3>
                        <h2>Primary Muscle Group: ${item.targetMuscles}</h2>
                        <h2> Secondary Muscle Group: ${item.secondaryMuscles}</h2>
                    </section>
                </section>
            </section>
        `
        resultsSection.appendChild(container);
    });

}
