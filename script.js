// Array of objects 
const complexItems = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        publicationYear: 1925,
        genre: 'Fiction'
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        publicationYear: 1960,
        genre: 'Fiction'
    },
    {
        title: '1984',
        author: 'George Orwell',
        publicationYear: 1949,
        genre: 'Dystopian Fiction'
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        publicationYear: 1937,
        genre: 'Fantasy'
    },
    {
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        publicationYear: 2014,
        genre: 'Non-Fiction'
    }
];

// Get the UL element by its ID
const myList = document.getElementById("myList");

// Use forEach to iterate over the complexItems array
complexItems.forEach(book => {
    // Create a new list item element
    const listItem = document.createElement("li");
    listItem.classList.add("book-item");

    const bookInfo = document.createElement("div");
    bookInfo.className = "container ml-4";

    const bookTitle = document.createElement("h2");
    bookTitle.textContent = book.title;
    bookTitle.className = "text-blue-500 text-3xl font-mono pt-4 hover:underline";
    bookInfo.appendChild(bookTitle);
    

    const bookAuthor = document.createElement("h3");
    bookAuthor.textContent = book.author;
    bookAuthor.className = "text-blue-400 text-xl";
    bookInfo.appendChild(bookAuthor);
    
    const bookPublicationYear = document.createElement("h4");
    bookPublicationYear.textContent = book.publicationYear;
    bookInfo.appendChild(bookPublicationYear);

    const bookGenre = document.createElement("p");
    bookGenre.textContent = book.genre;
    bookInfo.appendChild(bookGenre);
    
    listItem.appendChild(bookInfo);

    myList.appendChild(listItem);    
});