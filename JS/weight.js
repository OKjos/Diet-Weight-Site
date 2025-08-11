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
}
