$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    navText: [],
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1.5,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".custom-owl-next").click(function () {
    $(".owl-carousel").trigger("next.owl.carousel");
  });
  $(".custom-owl-prev").click(function () {
    $(".owl-carousel").trigger("prev.owl.carousel");
  });
});
