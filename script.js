//javascript
const quotes = [
    { text: "Be the change you wish to see in the world.", author: "Mahatma Gandhi", category: "inspiration" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs", category: "inspiration" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein", category: "inspiration" },
    { text: "The important thing is not to stop questioning.", author: "Albert Einstein", category: "science" },
    { text: "The good thing about science is that it's true whether or not you believe in it.", author: "Neil deGrasse Tyson", category: "science" }
];

let currentQuoteIndex = 0;
let filteredQuotes = [...quotes];
let fontSize = 1.2;

function updateQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    quoteElement.style.opacity = 0;
    authorElement.style.opacity = 0;

    setTimeout(() => {
        const currentQuote = filteredQuotes[currentQuoteIndex];
        quoteElement.textContent = `"${currentQuote.text}"`;
        authorElement.textContent = `- ${currentQuote.author}`;

        quoteElement.style.opacity = 1;
        authorElement.style.opacity = 1;
    }, 500);
}

function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % filteredQuotes.length;
    updateQuote();
}

function previousQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    updateQuote();
}

function randomQuote() {
    currentQuoteIndex = Math.floor(Math.random() * filteredQuotes.length);
    updateQuote();
}

function filterQuotes() {
    const category = document.getElementById('categorySelect').value;
    filteredQuotes = category === 'all' ? quotes : quotes.filter(quote => quote.category === category);
    currentQuoteIndex = 0;
    updateQuote();
}

function changeFontSize(direction) {
    fontSize += direction === '+' ? 0.1 : -0.1;
    fontSize = Math.max(0.8, Math.min(fontSize, 1.6));
    document.getElementById('quote').style.fontSize = `${fontSize}em`;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

document.getElementById('categorySelect').addEventListener('change', filterQuotes);
document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

updateQuote();