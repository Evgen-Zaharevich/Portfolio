const BtnOnTop = document.querySelector(".on-top");

const onTop = () => {
  if (window.scrollY > 0) {
    window.scrollBy(0, -50);
    onTop();
  }
};

BtnOnTop.addEventListener("click", onTop);
