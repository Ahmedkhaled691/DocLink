

function Myfun() {
    document.body.classList.toggle("dark");
}

// DarkLighte.addEventListener("click" , () => {
//     // body.setAttribute("class", "bg-dark");
//     console.log("heiue");
// });




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });