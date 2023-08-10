const BtnOnTop = document.querySelector(".on-top");

const clientViewPortHeightValue = document.documentElement.clientHeight;

const onTop = () => {
  if (window.scrollY > 0) {
    window.scrollBy(0, -50);
    setTimeout(onTop, 0);
  }
};
BtnOnTop.addEventListener("click", onTop);

const showButtonOnTop = () => {
  if (window.scrollY > clientViewPortHeightValue) {
    BtnOnTop.classList.add("on-top--show-btn");
  } else {
    BtnOnTop.classList.remove("on-top--show-btn");
  }
};
window.addEventListener("scroll", showButtonOnTop);
