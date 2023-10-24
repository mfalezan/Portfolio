function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

$(document).ready(function() {
  $('.testMgl').magnificPopup({
    type: 'inline',
    preloader: false,
    callbacks: {
      open: function () {
        $(".hidden-container").css("display", "block");
      },
    },
  });
});

