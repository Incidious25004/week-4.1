document.addEventListener("DOMContentLoaded", () => {
  const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "gatsby.jpg",
      rating: 4.3,
    },
    { title: "1984", author: "George Orwell", image: "1984.jpg", rating: 4.7 },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      image: "mockingbird.jpg",
      rating: 4.6,
    },
  ];

  const recommendationsDiv = document.querySelector(".book-list");

  books.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>Rating: ${book.rating}</p>
            <button>See Reviews</button>
        `;
    recommendationsDiv.appendChild(bookCard);
  });
});
