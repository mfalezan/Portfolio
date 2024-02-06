function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// $(document).ready(function () {
//     $('.testMgl').magnificPopup({
//       type: 'inline',
//       preloader: false,
//       callbacks: {
//         open: function () {
//           $(".hidden-container-" + (index + 1)).css("display", "block");
//         },
//       },
//     });
// });

$(document).ready(function() {
  $('.project-btn').magnificPopup({
      type: 'inline',
      midClick: true, // Allow opening popup on middle mouse click
      callbacks: {
        open: function () {
          $(".hidden-container").css("display", "block");
        },
      },
  });
});

$(document).ready(function(){
  $('.slick-slider').slick({
    infinite: true,
    slidesToShow: 3, // Nombre de slides à montrer à la fois
    slidesToScroll: 1, // Nombre de slides à faire défiler à la fois
    arrows: true,
  });
});