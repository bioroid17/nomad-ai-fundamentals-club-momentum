const QUOTE_API_KEY = "XpgP66bKR7L3kxcTUYlWtKhYM4EH1axyJh3oWm0l";

const quoteAPI = `https://api.api-ninjas.com/v2/randomquotes`;

const randomQuote = fetch(quoteAPI, {
  headers: {
    "X-Api-Key": QUOTE_API_KEY,
  },
})
  .then((response) => response.json())
  .then((data) => {
    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");
    quote.innerText = data[0].quote;
    author.innerText = `- ${data[0].author} -`;
  });
