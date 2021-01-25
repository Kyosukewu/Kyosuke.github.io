wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       30,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();

$('#lbtn').on("click",function(){
  $(this).removeClass("wow animate__animated animate__heartBeat")
})

function h(cl,num,pl){
  $(`.${cl}${num}`).hover(function(){
      $(`#${pl}`).attr("src",`icon/${cl}${num}.png`);
  },function(){
      $(`#${pl}`).attr("src",`icon/${cl}0.png`);
  });
} 


function go(where) {
  switch (where) {
    case "w":
      $('.g').removeClass("active")
      $('.g2').removeClass("active show")
      $('.d').removeClass("active")
      $('.d2').removeClass("active show")
      $('.w').addClass("active")
      $('.w2').addClass("active show")
      location.href="#pro"
      break;
    case "g":
      $('.w').removeClass("active")
      $('.w2').removeClass("active show")
      $('.d').removeClass("active")
      $('.d2').removeClass("active show")
      $('.g').addClass("active")
      $('.g2').addClass("active show")
      location.href="#pro"
      break;
    case "d":
      $('.w').removeClass("active")
      $('.w2').removeClass("active show")
      $('.g').removeClass("active")
      $('.g2').removeClass("active show")
      $('.d').addClass("active")
      $('.d2').addClass("active show")
      location.href="#pro"
      break;
  }
}

$(window).scroll(() => {
  gotop();
});

gotop();

function gotop() {
  let nowat = $(window).scrollTop(),
    height = $("#banner").height();
  if (nowat <= height) {
    $("#scrolltop").removeClass("shown");
    $('#stick').removeClass("fixed-top")
  } else {
    $("#scrolltop").addClass("shown");
    $('#stick').addClass("fixed-top")
  }
}

for (let i = 1; i <= 10; i++) {
  $(`.w${i}`).hover(
    function () {
      let img = $(`.w${i}`).data("pic");
      console.log();
      $(`#wimg`).attr("src", `icon/${img}`);
    },
    function () {
      $(`#wimg`).attr("src", `icon/w0.png`);
    }
  );
}
for (let i = 1; i <= 5; i++) {
  $(`.g${i}`).hover(
    function () {
      let img = $(`.g${i}`).data("pic");
      console.log();
      $(`#gimg`).attr("src", `icon/${img}`);
    },
    function () {
      $(`#gimg`).attr("src", `icon/g0.png`);
    }
  );
}
for (let i = 1; i <= 5; i++) {
  $(`.d${i}`).hover(
    function () {
      let img = $(`.d${i}`).data("pic");
      console.log();
      $(`#dimg`).attr("src", `icon/${img}`);
    },
    function () {
      $(`#dimg`).attr("src", `icon/d0.png`);
    }
  );
}
for (let i = 1; i <= 5; i++) {
  $(`.t${i}`).hover(
    function () {
      let img = $(`.t${i}`).data("pic");
      console.log();
      $(`#timg`).attr("src", `icon/${img}`);
    },
    function () {
      $(`#timg`).attr("src", `icon/t0.png`);
    }
  );
}
function op(x, y, img) {
  $(x).fadeIn();
  $(y).fadeIn();
  console.log(img);
  $("#bimg").attr("src", `bimg/${img}.png`);
}

function cl(x) {
  $(x).fadeOut();
}
