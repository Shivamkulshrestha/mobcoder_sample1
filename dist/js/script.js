$(".one-time").slick({
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  prevArrow:
    '<button class="slide-arrow1 prev-arrow leftArrow"> <i class="fa-solid fa-arrow-left"></i> </button>',
  nextArrow:
    '<button class="slide-arrow2 next-arrow rightArrow"> <i class="fa fa-arrow-right"></i></button>',
});

$(document).ready(function () {
  if ($(window).width() <= 768 && $(window).width() > 521) {
    $(".responsive").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      adaptiveHeight: true,
      prevArrow:
        '<button class="slide-arrow1 prev-arrow leftArrow"> <i class="fa-solid fa-arrow-left"></i> </button>',
      nextArrow:
        '<button class="slide-arrow2 next-arrow rightArrow"> <i class="fa fa-arrow-right"></i></button>',
    });
  }
  if ($(window).width() <= 520 && $(window).width() > 394) {
    $(".responsive").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 2,
      slidesToScroll: 2,
      adaptiveHeight: true,
      prevArrow:
        '<button class="slide-arrow1 prev-arrow leftArrow"> <i class="fa-solid fa-arrow-left"></i> </button>',
      nextArrow:
        '<button class="slide-arrow2 next-arrow rightArrow"> <i class="fa fa-arrow-right"></i></button>',
    });
  }
  if ($(window).width() <= 393) {
    $(".responsive").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      prevArrow:
        '<button class="slide-arrow1 prev-arrow leftArrow"> <i class="fa-solid fa-arrow-left"></i> </button>',
      nextArrow:
        '<button class="slide-arrow2 next-arrow rightArrow"> <i class="fa fa-arrow-right"></i></button>',
    });
  }
});

const html = document.querySelector("html");
const btn = document.querySelector(".mybtn");

btn.addEventListener("click", () => {
  if (!html.classList.contains("body-test")) {
    html.classList.add("body-test");
    document.getElementById("buttonLine").style.display = "none";
    document.getElementById("crossLine").style.display = "block";
  } else {
    html.classList.remove("body-test");
    document.getElementById("buttonLine").style.display = "block";
    document.getElementById("crossLine").style.display = "none";
    document.getElementsByTagName("nav")[0].style.backgroundColor =
      "transparent";
  }
});

function myFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.getElementsByTagName("nav")[0].style.display = "None";
    document.querySelector(".second-header").style.display = "block";
  } else {
    document.getElementsByTagName("nav")[0].style.display = "block";
    document.querySelector(".second-header").style.display = "None";
  }
}

window.onscroll = () => {
  myFunction();
};

// ///////////////////////////////////////////////

function myFunction() {
  // Name field in input start
  let name = document.querySelector("#uname").value.length;
  let text;
  if (name < 6 || name > 15) {
    text = "Name Should be Minumum 6 character";
    // console.log(name);
  } else {
    text = "";
  }
  document.getElementById("demo").innerHTML = text;
  // Name field in input end

  // Email field input start
  let email = document.querySelector("#inputEmail4").value;
  var mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let text1;
  if (!email.match(mailformat)) {
    text1 = "Enter the correct EmailId";
  } else {
    text1 = "";
  }
  document.getElementById("demo1").innerHTML = text1;
  // Email field input end

  //  Phone Number Field Input
  let x = document.querySelector("#phone").value.length;
  let text2;
  if (isNaN(x) || x < 10 || x > 10) {
    text2 = "Enter the correct number";
    // console.log(name);
  } else {
    text2 = "";
  }
  document.getElementById("demo2").innerHTML = text2;
  //  Phone Number Field end
}
