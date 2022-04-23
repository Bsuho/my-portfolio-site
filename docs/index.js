console.clear();

Fullpage__init();

let chart1Rendered = false;
let chart2Rendered = false;
let chart3Rendered = false;
let chart4Rendered = false;

function Fullpage__init() {
  new fullpage("#fullpage", {
    verticalCentered: false,
    menu: ".menu",
    scrollOverflow: true,
    verticalCentered: true,
    afterLoad: function (ignored, destination) {
      console.log(destination);
      if (destination.index == 3) {
        if (chart1Rendered == false) {
          $(".chart-1").circleProgress({ value: 0.9 });
          chart1Rendered = true;
        }

        if (chart2Rendered == false) {
          setTimeout(function () {
            $(".chart-2").circleProgress({ value: 0.85 });
            chart2Rendered = true;
          }, 200);
        }
        if (chart3Rendered == false) {
          setTimeout(function () {
            $(".chart-3").circleProgress({ value: 0.8 });
            chart3Rendered = true;
          }, 400);
        }
        if (chart4Rendered == false) {
          setTimeout(function () {
            $(".chart-4").circleProgress({ value: 0.85 });
            chart4Rendered = true;
          }, 600);
        }
      }
    }
  });

  $(".chart-1")
    .circleProgress({
      size: 230,
      startAngle: -Math.PI / 2,
      value: 0,
      lineCap: "round",
      thickness: 10,
      fill: { gradient: ["#232323"] }
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .text(parseInt(stepValue * 100) + "%");
    });

  $(".chart-2")
    .circleProgress({
      size: 230,
      startAngle: -Math.PI / 2,
      value: 0,
      lineCap: "round",
      thickness: 10,
      fill: { gradient: ["#232323"] }
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .text(parseInt(stepValue * 100) + "%");
    });
  $(".chart-3")
    .circleProgress({
      size: 230,
      startAngle: -Math.PI / 2,
      value: 0,
      lineCap: "round",
      thickness: 10,
      fill: { gradient: ["#232323"] }
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .text(parseInt(stepValue * 100) + "%");
    });
  $(".chart-4")
    .circleProgress({
      size: 230,
      startAngle: -Math.PI / 2,
      value: 0,
      lineCap: "round",
      thickness: 10,
      fill: { gradient: ["#232323"] }
    })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .text(parseInt(stepValue * 100) + "%");
    });
}

//스와이퍼 js

const swiper = new Swiper(".swiper", {
  speed: 550,
  centeredSlides: true,
  slidesPerView: 3.5,
  spaceBetween: 20,
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-box-1 .swiper-pagination",
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-box-1 .swiper-button-next",
    prevEl: ".swiper-box-1 .swiper-button-prev"
  }
});

//

$("section-6").click(function () {
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    123123800
  );
  return false;
});



