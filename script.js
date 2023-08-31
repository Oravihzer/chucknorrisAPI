const quote = document.getElementById("quote");

async function jokesFn() {
  let answer = fetch(`https://api.api-ninjas.com/v1/chucknorris`, {
    method: "GET",
    headers: { "X-Api-Key": `d2+7MeGXEbRJei3n+T5TQQ==3CKWaxksc4SXDSJU` },
    contentType: "application/json",
  });
  let jokesend = await answer;
  return jokesend.json();
}

async function getJoke() {
  let jokeRequest = await jokesFn();
  quote.innerHTML = `"${jokeRequest.joke}" <br>       <h6 class="text-primary">- Chuck Norris -</h6>
  `;
  //
}
