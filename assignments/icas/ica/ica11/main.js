const quoteButton = document.querySelector(".new-quote");
quoteButton.addEventListener('click', getQuote);

const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

async function getQuote() {
    let text = await fetch(endpoint);
    let response = await text.text();
    
    const json_response = JSON.parse(response);
    displayQuote(json_response['message']);
};

function displayQuote(quote) {
    const quoteBox = document.querySelector('#js-quote-text');
    quoteBox.textContent = quote;
};