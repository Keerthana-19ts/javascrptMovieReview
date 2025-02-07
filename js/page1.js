document.getElementById('search-box').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const searchTerm = this.value.trim();
        if (searchTerm !== "") { // Check if search term is not empty
            localStorage.setItem('searchTerm', searchTerm);
            window.location.href = './page2.html'; // Redirect to page2.html
        } else {
            alert("Please enter a movie name to search."); // Alert if search box is empty
        }
    }
});