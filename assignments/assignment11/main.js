const quoteButton = document.querySelector(".new-quote");
const activityButton = document.querySelector(".new-activity-button");
quoteButton.addEventListener('click', getQuote);
activityButton.addEventListener('click', getActivity);

const endpointQuote = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
const endpointBored = "https://www.boredapi.com/api/activity"

async function getQuote() {
    let text = await fetch(endpointQuote);
    let response = await text.text();
    
    const json_response = JSON.parse(response);
    displayQuote(json_response['message']);
};

async function getActivity() {
    let activity = await fetch(endpointBored);
    let funTimes = await activity.text();

    const json_activity = JSON.parse(funTimes);
    displayActivity(json_activity);
};

function displayQuote(quote) {
    const quoteBox = document.querySelector('#js-quote-text');
    quoteBox.textContent = quote;

    
};

function displayActivity(boredActivity) {
    const activityBox = document.querySelector("#js-bored-text");
    activityBox.textContent = "Activity: " + boredActivity["activity"];
};