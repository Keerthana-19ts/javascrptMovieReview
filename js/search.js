function displayMovies(movies) {
    const container = document.getElementById("movie-card-container");
    container.innerHTML = ""; // Clear previous content

    if (movies.length === 0) {
        container.innerHTML = "<p style='color: white;'>No movies found.</p>"; // Show message if no movies match
        return;
    }

    movies.forEach(movie => {
        const card = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${movie.imageURL}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.plot}</p>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function searchMovie() {
    const query = document.getElementById("search-box").value.toLowerCase();
    const movies = JSON.parse(localStorage.getItem("movies")) || [];
    
    const container = document.getElementById("movie-card-container");
    container.innerHTML = ""; // Clear previous content

    // Check if the query is empty
    if (query === "") {
        container.innerHTML = "<p style='color: white;'>Please enter a movie name.</p>"; // Show prompt to enter a movie name
        return;
    }

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));

    if (filteredMovies.length === 0) {
        container.innerHTML = "<p style='color: white;'>No movies found.</p>"; // Show message if no movies match
    } else {
        displayMovies(filteredMovies); 
    }
}