const selectors = {
  BASIC_SUB: document.querySelector("[data-js-basicsub]"),
  ADVANCED_SUB: document.querySelector("[data-js-advancedsub]"),
  PRO_SUB: document.querySelector("[data-js-prosub]"),
  ALL_SUB: document.querySelectorAll(".sub"),
};

selectors.BASIC_SUB.addEventListener("click", () => {
  selectors.ALL_SUB.forEach((element) => {
    element.classList.remove("selected-plan");
  });

  selectors.BASIC_SUB.classList.add("selected-plan");
});

selectors.ADVANCED_SUB.addEventListener("click", () => {
  selectors.ALL_SUB.forEach((element) => {
    element.classList.remove("selected-plan");
  });

  selectors.ADVANCED_SUB.classList.add("selected-plan");
});

selectors.PRO_SUB.addEventListener("click", () => {
  selectors.ALL_SUB.forEach((element) => {
    element.classList.remove("selected-plan");
  });

  selectors.PRO_SUB.classList.add("selected-plan");
});
