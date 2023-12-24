const words = ["yusuf","computer","python","javascript"]
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Array untuk menyimpan huruf yang sudah ditebak
let guessedLetters = [];

// Fungsi untuk memulai permainan
function startGame() {
  // Reset variabel
  selectedWord = words[Math.floor(Math.random() * words.length)];
  guessedLetters = [];

  // Tampilkan kata sebagai garis-garis
  updateWordDisplay();

  // Tampilkan huruf-huruf yang sudah ditebak
  updateGuessedLetters();

  // Reset pesan
  setMessage("");
}

// Fungsi untuk mengupdate tampilan kata
function updateWordDisplay() {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

  for (let i = 0; i < selectedWord.length; i++) {
    const letter = selectedWord[i];
    if (guessedLetters.includes(letter)) {
      // Tampilkan huruf jika sudah ditebak
      wordContainer.innerHTML += letter + " ";
    } else {
      // Tampilkan garis-garis untuk huruf yang belum ditebak
      wordContainer.innerHTML += "_ ";
    }
  }
}

  // Fungsi untuk mengupdate tampilan huruf yang sudah ditebak
function updateGuessedLetters() {
  const lettersContainer = document.getElementById("letters-container");
  lettersContainer.innerHTML = "Guessed Letters: ";

  for (let i = 0; i < guessedLetters.length; i++) {
    lettersContainer.innerHTML += "<span class='letter'>" + guessedLetters[i] + "</span>";
  }
}

// Fungsi untuk menampilkan pesan
function setMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.innerHTML = message;
}

// Fungsi untuk memeriksa apakah permainan selesai
function isGameFinished() {
    // Cek apakah setiap huruf dalam kata sudah ditebak
  for (let i = 0; i < selectedWord.length; i++) {
    if (!guessedLetters.includes(selectedWord[i])) {
      return false;
    }
  }
  return true;
}

  // Fungsi untuk menangani tebakan huruf
function guessLetter(letter) {
    // Cek apakah huruf sudah ditebak sebelumnya
  if (guessedLetters.includes(letter)) {
    setMessage("You already guessed that letter. Try again.");
    return;
  }

  // Tambahkan huruf ke daftar huruf yang sudah ditebak
  guessedLetters.push(letter);

  // Perbarui tampilan kata dan huruf yang sudah ditebak
  updateWordDisplay();
  updateGuessedLetters();

  // Periksa apakah permainan selesai
  if (isGameFinished()) {
    setMessage("Congratulations! You guessed the word!");
  }
}

  // Event listener untuk tombol huruf
document.addEventListener("keydown", function (event) {
  // Cek apakah tombol yang ditekan adalah huruf
  if (/^[a-zA-Z]$/.test(event.key)) {
    const guessedLetter = event.key.toLowerCase();
    guessLetter(guessedLetter);
  }
});

// Memulai permainan saat halaman dimuat
startGame();
