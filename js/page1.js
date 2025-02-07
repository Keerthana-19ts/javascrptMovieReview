
document.getElementById('search-box').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const searchTerm = this.value.trim();
        if (searchTerm !== "") { 
            localStorage.setItem('searchTerm', searchTerm);
            window.location.href = './page2.html'; 
        } else {
          alert("Please enter a movie name to search."); 
        }
 
    }
});
 
 

 

 
  const searchTerm = localStorage.getItem('searchTerm');
 
  if (searchTerm) {
      
      console.log("Searching for:", searchTerm);
      
      fetch(`YOUR_API_ENDPOINT?query=${searchTerm}`)  
        .then((response) => response.json())
        .then(data => {
            
            displayResults(data); 
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            
        });
 
      localStorage.removeItem('searchTerm'); 
  } else {
    
    console.log("No search term found.");
    
    
  }
 
  function displayResults(data) {
    
    const resultsContainer = document.getElementById("movie-results"); 
    resultsContainer.innerHTML = ""; 
 
    if (data.results && data.results.length > 0) { 
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
    }
  }
 