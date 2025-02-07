document.addEventListener('DOMContentLoaded', function() {
    const searchTerm = localStorage.getItem('searchTerm');

    if (searchTerm) {
        console.log("Searching for:", searchTerm);
        fetch(`YOUR_API_ENDPOINT?query=${searchTerm}`)  // Replace YOUR_API_ENDPOINT
            .then((response) => response.json())
            .then(data => {
                displayResults(data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                // Handle error (e.g., display an error message)
            });

        localStorage.removeItem('searchTerm'); // Clear from local storage after use (optional)
    } else {
        console.log("No search term found.");
        // You might want to redirect the user back to page1 or display a message
        // window.location.href = './page1.html';
    }

    function displayResults(data) {
        const resultsContainer = document.getElementById("movie-card-container"); // Make sure you have this element in page2.html
        resultsContainer.innerHTML = ""; // Clear previous results

        if (data.results && data.results.length > 0) { // Check if there are results
            data.results.forEach(movie => {
                const movieDiv = document.createElement("div");
                movieDiv.classList.add("card");
                movieDiv.style.width = "15rem";
                movieDiv.innerHTML = `
                    <img src="YOUR_IMAGE_API_ENDPOINT/${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.overview}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                `;
                resultsContainer.appendChild(movieDiv);
            });
        } else {
            resultsContainer.innerHTML = "<p>No results found.</p>";
        }
    }
});