<<<<<<< HEAD
=======
// localStorage.js
>>>>>>> 6256ce4f3f0cb91d2b5b687994ce3270071db3fe
document.getElementById('search-box').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const searchTerm = this.value.trim();
        if (searchTerm !== "") { // Check if search term is not empty
            localStorage.setItem('searchTerm', searchTerm);
            window.location.href = './page2.html'; // Redirect to page2.html
        } else {
<<<<<<< HEAD
            alert("Please enter a movie name to search."); // Alert if search box is empty
        }
=======
          alert("Please enter a movie name to search."); // Alert if search box is empty
        }
 
    }
});
 
 
//  You'll need to retrieve the search term on page2.html
 
// page2.html (add this script at the end of the <body>)
 
  const searchTerm = localStorage.getItem('searchTerm');
 
  if (searchTerm) {
      // Use the searchTerm to fetch movie data (e.g., from an API)
      console.log("Searching for:", searchTerm);
      // Example using fetch (replace with your actual API call)
      fetch(`YOUR_API_ENDPOINT?query=${searchTerm}`)  // Replace YOUR_API_ENDPOINT
        .then((response) => response.json())
        .then(data => {
            // Display movie results on page 2
            displayResults(data); // You'll need to define this function
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            // Handle error (e.g., display an error message)
        });
 
      localStorage.removeItem('searchTerm'); // Clear from local storage after use (optional)
  } else {
    // Handle the case where there is no search term (e.g., if the user came to page2 directly)
    console.log("No search term found.");
    // You might want to redirect the user back to page1 or display a message
    // window.location.href = './page1.html';
  }
 
  function displayResults(data) {
    // Implement your logic to display the movie results on page2.html
    const resultsContainer = document.getElementById("movie-results"); // Make sure you have this element in page2.html
    resultsContainer.innerHTML = ""; // Clear previous results
 
    if (data.results && data.results.length > 0) { // Check if there are results
        data.results.forEach(movie => {
            const movieDiv = document.createElement("div");
            movieDiv.classList.add("movie-result");
            movieDiv.innerHTML = `
                <img src="YOUR_IMAGE_API_ENDPOINT/${movie.poster_path}" alt="${movie.title}">  </img>
                <h3>${movie.title}</h3>
                <p>${movie.overview}</p>
                `;
            resultsContainer.appendChild(movieDiv);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
>>>>>>> 6256ce4f3f0cb91d2b5b687994ce3270071db3fe
    }
  }
 