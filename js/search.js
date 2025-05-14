const selectors = {
  INPUT: document.querySelector("[data-js-input]"),
  SEARCH: document.querySelector("[data-js-search]"),
  MOOVIES_CONTAINER: document.querySelector("[data-js-results]"),
  ALERT: document.querySelector("[data-js-alert]"),
};

let currentPrompt = sessionStorage.getItem("searchPrompt");
let moovieCover;
let moovieYear;

function addPrompt() {
  currentPrompt = selectors.INPUT.value;
  sessionStorage.setItem("searchPrompt", currentPrompt);
}

function displayCard() {
  selectors.ALERT.textContent = `Moovies found for "${currentPrompt}" query`;
  for (let item in responseObj) {
    addCard(item, responseObj);
  }
}

function addCard(item, responseObj) {
  moovieCover =
    responseObj[item].show.image !== null
      ? responseObj[item].show.image.original
      : "https://t4.ftcdn.net/jpg/05/81/84/71/360_F_581847176_eF540XqFGHDdGPZxyh5NtWHNzgs0XFk6.jpg";

  moovieYear =
    responseObj[item].show.premiered !== null
      ? responseObj[item].show.premiered.slice(0, 4)
      : "N/D";

  //DOM manipulating
  selectors.MOOVIES_CONTAINER.innerHTML += `<a class="moovie-link" href="${
    responseObj[item].show.url
  }"><div class="result-card">
       <img
         src="${moovieCover}"
         alt="${responseObj[item].show.name}"
       />
       <div class="result-info">
         <h3>${responseObj[item].show.name}</h3>
         <div class="genre">${responseObj[item].show.genres.join(", ")} </div>
         <div class="show-details">
           <div class="rating">
             <i class="fas fa-star"></i> ${responseObj[item].score.toFixed(2)}
           </div>
           <div class="year">${moovieYear}</div>
         </div>
       </div>
     </div></a>`;
}

function displayAlert() {
  selectors.ALERT.textContent = "No Moovies Found...";
}

async function fetchRequest(name) {
  return fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

const responseObj = await fetchRequest(currentPrompt);

if (responseObj.length === 0 || currentPrompt === null) {
  displayAlert();
} else {
  displayCard();
  selectors.INPUT.value = currentPrompt;
}

selectors.SEARCH.addEventListener("click", addPrompt);
