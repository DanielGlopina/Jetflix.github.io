const selectors = {
  INPUT: document.querySelector("[data-js-input]"),
  SEARCH: document.querySelector("[data-js-search]"),
  SCROLL_CONTAINER: document.querySelector("[data-js-scroll]"),
};
let currentPrompt = "";

async function axiosRequest() {
  return axios.get("moovies.json").then((res) => {
    return res.data;
  });
}

const objJson = await axiosRequest();

for (let key in objJson) {
  selectors.SCROLL_CONTAINER.innerHTML += `<div class="scroll-item">
      <img
        src="${objJson[key].img}"
        alt="${objJson[key].name}"
      />
      <h3>${objJson[key].name}</h3>
      <div class="imdb-rating">
        <i class="fas fa-star"></i>${objJson[key].rating}
      </div>
    </div>`;
}

function addPrompt() {
  currentPrompt = selectors.INPUT.value;
  sessionStorage.setItem("searchPrompt", currentPrompt);
}

selectors.SEARCH.addEventListener("click", addPrompt);
