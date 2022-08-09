"use strict";
const thanhCuon = document.querySelector(".thanhcuon");
window.addEventListener("scroll", function (event) {
  var scroll_y = this.scrollY;
  var scroll_x = this.scrollX;
  if (scroll_y > 500) {
    thanhCuon.classList.remove("hinde");
  } else if (thanhCuon.classList.value === "thanhcuon") {
    thanhCuon.classList.add("hinde");
  }
});
thanhCuon.addEventListener("click", function (element, to, duration) {
  if (duration <= 0) return;
  var difference = to - element.scrollTop;
  var perTick = (difference / duration) * 10;

  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
});
