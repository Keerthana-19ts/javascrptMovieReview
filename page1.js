document.addEventListener('DOMContentLoaded', () => {
    const searchBox = document.getElementById('search-box');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('results-container');

    searchButton.addEventListener('click', () => {
        const searchTerm = searchBox.value;
        // Simulate fetching movie data (replace with actual API call)
        const results = searchMovies(searchTerm);
        displayResults(results);
    });

    function searchMovies(term) {
        // Replace with actual API call or data source lookup
        // This is a placeholder
        return [
            { title: 'Movie Title 1', year: 2020 },
            { title: 'Movie Title 2', year: 2022 },
        ];
    }

    function displayResults(movies) {
        resultsContainer.innerHTML = ''; // Clear previous results
        movies.forEach(movie => {
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('movie-result');
            resultDiv.innerHTML = `<h3>${movie.title}</h3><p>Year: ${movie.year}</p>`;
            resultsContainer.appendChild(resultDiv);
        });
    }
});