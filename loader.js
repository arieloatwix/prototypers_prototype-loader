const onPrototypeReady = () => {
  const body = document.querySelector("body");
  body.classList.add("loading");
  body.insertAdjacentHTML("afterbegin", ` <span class="loader"></span>`);

  window.addEventListener("load", function (event) {
    prototypeFunc();
    body.classList.remove("loading");
    document.querySelector(".loader")?.remove();
    body.classList.add("loaded");
  });
};
onPrototypeReady();
