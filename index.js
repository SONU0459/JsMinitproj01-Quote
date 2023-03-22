let quoteCon = document.getElementById("quoteid");
let quoteText = document.getElementById("text");
let authorBtn = document.getElementById("auotheanme");
let twitterBtn = document.getElementById("twitterbtn");
let quoteBtn = document.getElementById("newquote");

let loadBtn = document.getElementById("loader")

function loading(){

    loadBtn.hidden = false;
    
    quoteCon.hidden = true;

}
function complete(){

    loadBtn.hidden = true;
    
    quoteCon.hidden = false;


}

// Take Data from API.
let rec = [];

function getrandomquote() {

    loading();
  let quote = rec[Math.floor(Math.random() * rec.length)];

  if (!quote.author) {
    authorBtn.innerText = "Unknown";
  } else {
    authorBtn.innerText = quote.author;
  }
  if (quote.text.length < 150) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.innerText = quote.text;

  complete();

  // console.log(quote)
}

quoteBtn.addEventListener("click", getrandomquote);
twitterBtn.addEventListener("click", tweetBtn);

function tweetBtn() {
  let tweetUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorBtn.innerText}`;

  window.open(tweetUrl, "_blank");

  console.log("1");
}

async function getapidata() {

    loading();

  let url = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  try {
    let res = await fetch(url);

    rec = await res.json();

    getrandomquote();

    // console.log(rec[12])
  } catch (error) {
    alert("somthing wrong");
  }
}

getapidata();

// loading();
