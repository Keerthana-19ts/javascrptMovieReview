
  function displayMovies() {
    // Retrieve movies from localStorage
    const movies = JSON.parse(localStorage.getItem("movies"));

    let data = "<table><tr><th>Title</th><th>Image</th></tr>";
    for (let i = 0; i < movies.length; i++) {
        data += "<tr><td>" + movies[i].title + "</td><td><img src='" + movies[i].imageURL + "' alt='" + movies[i].title + "' style='width:100px;'></td></tr>";
    }
    data += "</table>";
    document.getElementById("data").innerHTML = data;
}

// Call displayMovies to show the data when the page loads
window.onload = function () {
    // Check if movies data is already in localStorage
    if (!localStorage.getItem("movies")) {
        // Store movies data if not already present
        const movies = [
            {
              id: 1,
              title: "Baahubali: The Beginning",
              director: "S. S. Rajamouli",
              plot: "Shivudu, a young man raised in a remote village, embarks on a journey to discover his true identity. His quest leads him to the kingdom of Mahishmati, where he learns about his royal lineage and the epic battle between his father, Amarendra Baahubali, and the tyrant Bhallaladeva. As he uncovers the past, he must rise to fulfill his destiny.",
              year: 2015,
              genre: ["Action"," Drama", "Fantasy"],
              boxOffice: "₹650 crore",
              actors: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah", "Sathyaraj"],
              imageURL: "/image/bahubali1.jpg"
            },
            {
              id: 2,
              title: "Baahubali 2: The Conclusion",
              director: "S. S. Rajamouli",
              plot: "After learning the truth about his father’s tragic fate, Mahendra Baahubali sets out to reclaim the throne of Mahishmati and avenge Amarendra Baahubali’s betrayal by Bhallaladeva. As the epic battle unfolds, secrets from the past are revealed, and a legendary warrior rises to bring justice to his people.",
              year: 2017,
              genre: ["Action", "Drama", "Fantasy"],
              boxOffice: "₹1810 crore",
              actors: ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah", "Sathyaraj"],
            },
            {
              id: 3,
              title: "KGF: Chapter 1",
              director: "Prashanth Neel",
              plot: "Rocky, an ambitious young man, rises from the slums of Bombay to become a powerful gangster in the gold mines of Kolar. As he infiltrates the notorious KGF empire ruled by ruthless overlords, he must fight against all odds to fulfill his mother’s dying wish and establish his supremacy in the underworld.",
              year: 2018,
              genre: ["Action", "Crime", "Drama"],
              boxOffice: "₹250 crore",
              actors: ["Yash", "Srinidhi Shetty", "Ramachandra Raju", "Anant Nag"]
            },
            {
              id: 4,
              title: "KGF: Chapter 2",
              director: "Prashanth Neel",
              plot: "After eliminating Garuda, Rocky assumes control of KGF and sets out to expand his empire. However, new threats emerge as Adheera, a ruthless warlord, and the Indian government conspire to bring him down. With betrayal lurking at every corner, Rocky must wage the biggest battle of his life to retain his throne and achieve ultimate dominance.",
              year: 2022,
              genre: ["Action", "Crime", "Drama"],
              boxOffice: "₹1250 crore",
              actors: ["Yash", "Sanjay Dutt", "Srinidhi Shetty", "Raveena Tandon", "Prakash Raj"]
            },
            {
              id: 5,
              title: "Kantara",
              director: "Rishab Shetty",
              plot: "In a small coastal village, Shiva, a rebellious young man, finds himself at the center of a centuries-old conflict between man and nature. As the battle for land intensifies, supernatural forces come into play, forcing him to confront his past and embrace his destiny as the guardian of the divine forest.",
              year: 2022,
              genre: ["Action", "Thriller", "Drama"],
              boxOffice: "₹400 crore",
              actors: ["Rishab Shetty", "Sapthami Gowda", "Kishore", "Achyuth Kumar"]
            }
          ];
        localStorage.setItem("movies", JSON.stringify(movies));
    }
    displayMovies(); // Call the function to display movies
};

