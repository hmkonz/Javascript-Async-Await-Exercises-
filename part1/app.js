let baseURL = "http://numbersapi.com";
let favNumber = 11;
// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API)

async function getFavNumFact() {
  let fact = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(fact.text);
}

getFavNumFact();

// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.
let favNumbers = [2, 7, 9, 10, 11, 13];

async function getFavNumsFacts() {
  let facts = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(facts);
}
getFavNumsFacts();

// // 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

let fourFavoriteNumberFacts = [];

async function fourFacts() {
  for (let i = 1; i < 5; i++) {
    fourFavoriteNumberFacts.push(axios.get(`${baseURL}/${favNumber}?json`));
  }
  let facts = await Promise.all(fourFavoriteNumberFacts);

  facts.forEach((response) => console.log(response.data.text));
}

fourFacts();
