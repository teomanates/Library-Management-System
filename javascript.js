let currentUser = null;
let books = [
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "Pride and Prejudice", author: "Jane Austen" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { title: "The Chronicles of Narnia", author: "C.S. Lewis" },
    { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll" },
    { title: "Wuthering Heights", author: "Emily Brontë" },
    { title: "Jane Eyre", author: "Charlotte Brontë" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "The Adventures of Sherlock Holmes", author: "Arthur Conan Doyle" },
    { title: "Frankenstein", author: "Mary Shelley" },
    { title: "Dracula", author: "Bram Stoker" },
    { title: "The Picture of Dorian Gray", author: "Oscar Wilde" },
    { title: "The Count of Monte Cristo", author: "Alexandre Dumas" },
    { title: "The Scarlet Letter", author: "Nathaniel Hawthorne" },
    { title: "Les Misérables", author: "Victor Hugo" },
    { title: "War and Peace", author: "Leo Tolstoy" },
    { title: "Anna Karenina", author: "Leo Tolstoy" },
    { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez" },
    { title: "The Grapes of Wrath", author: "John Steinbeck" },
    { title: "Great Expectations", author: "Charles Dickens" },
    { title: "The Adventures of Huckleberry Finn", author: "Mark Twain" },
    { title: "The Odyssey", author: "Homer" },
    { title: "The Iliad", author: "Homer" },
    { title: "Don Quixote", author: "Miguel de Cervantes" },
    { title: "The Divine Comedy", author: "Dante Alighieri" },
    { title: "Ulysses", author: "James Joyce" },
    { title: "The Sound and the Fury", author: "William Faulkner" },
    { title: "The Stranger", author: "Albert Camus" },
    { title: "The Trial", author: "Franz Kafka" },
    { title: "The Old Man and the Sea", author: "Ernest Hemingway" },
    { title: "Catch-22", author: "Joseph Heller" },
    { title: "Slaughterhouse-Five", author: "Kurt Vonnegut" },
    { title: "On the Road", author: "Jack Kerouac" },
    { title: "The Sun Also Rises", author: "Ernest Hemingway" },
    { title: "The Bell Jar", author: "Sylvia Plath" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
    { title: "To the Lighthouse", author: "Virginia Woolf" },
    { title: "Beloved", author: "Toni Morrison" },
    { title: "Moby-Dick", author: "Herman Melville" },
    { title: "Walden", author: "Henry David Thoreau" },
    { title: "Middlemarch", author: "George Eliot" },
    { title: "Emma", author: "Jane Austen" },
    { title: "The Handmaid's Tale", author: "Margaret Atwood" },
    { title: "The Road", author: "Cormac McCarthy" },
    { title: "Heart of Darkness", author: "Joseph Conrad" },
    { title: "Brave New World", author: "Aldous Huxley" },
    { title: "A Tale of Two Cities", author: "Charles Dickens" },
    { title: "Les Fleurs du mal", author: "Charles Baudelaire" },
    { title: "The Waste Land", author: "T.S. Eliot" },
    { title: "A Clockwork Orange", author: "Anthony Burgess" },
    { title: "The Metamorphosis", author: "Franz Kafka" },
    { title: "The Canterbury Tales", author: "Geoffrey Chaucer" },
    { title: "Oedipus Rex", author: "Sophocles" },
    { title: "Gulliver's Travels", author: "Jonathan Swift" },
    { title: "The Inferno", author: "Dante Alighieri" },
    { title: "The Aeneid", author: "Virgil" },
    { title: "Candide", author: "Voltaire" },
    { title: "The Complete Stories", author: "Flannery O'Connor" },
    { title: "Mrs. Dalloway", author: "Virginia Woolf" },
    { title: "A Room of One's Own", author: "Virginia Woolf" },
    { title: "Lord of the Flies", author: "William Golding" },
    { title: "The Stranger", author: "Albert Camus" },
    { title: "The Plague", author: "Albert Camus" },
    { title: "The Trial", author: "Franz Kafka"}
];

function searchBooks(query) {
  const results = books.filter(book => {
    return book.title.toLowerCase().includes(query.toLowerCase()) || book.author.toLowerCase().includes(query.toLowerCase());
  });
  return results;
}

function rentBook(title) {
  if (!currentUser) {
    alert("Kitap kiralamak için önce giriş yapmalısınız.");
    return;
  }
  // Kitabın kiralama işlemi burada yapılabilir.
  alert(`"${title}" adlı kitap kiralandı.`);
}

function updateSearchList(results) {
  const searchResults = document.getElementById("search-results");
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.textContent = "Sonuç bulunamadı.";
    return;
  }

  results.forEach(book => {
    const bookItem = document.createElement("div");
    bookItem.classList.add("book-item");
    bookItem.innerHTML = `<strong>${book.title}</strong> - ${book.author} <button class="rent-btn">Kitap Kirala</button>`;
    bookItem.querySelector(".rent-btn").addEventListener("click", function() {
      rentBook(book.title);
    });
    searchResults.appendChild(bookItem);
  });
}

document.getElementById("search-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const query = document.getElementById("search-query").value;
  const results = searchBooks(query);
  updateSearchList(results);
});

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;
  loginUser(username, password);

});

document.getElementById("register-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("register-name").value;
  const email = document.getElementById("register-email").value;
  const password = document.getElementById("register-password").value;
  // Gerçek bir kullanıcı kayıt işlemi yapılabilir.
  // Şu an için sadece giriş yapıyoruz.
  loginUser(email, password);


});

document.getElementById("register-link").addEventListener("click", function(e) {
  e.preventDefault(); // Sayfanın yeniden yüklenmesini engellemek için
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
});

function loginUser(username, password) {
  // Kullanıcı zaten kayıtlıysa uyarı ver
  if (currentUser) {
    alert("Zaten bir hesap var. Kitap aramaya devam edebilirsiniz.");
    return;
  }

  // Yeni bir hesap oluşturulduğunda ana sayfaya yönlendir
  currentUser = username;
  document.getElementById("auth-container").style.display = "none";
  document.getElementById("book-form").style.display = "block";
  window.location.href = "arama_kiralama.html"; // Ana sayfaya geri dön
}
