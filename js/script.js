


//scroll_btn

const toTop = document.querySelector(".to_top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});


$(".to_top").click(function () {
  
   $(".to_top").css("color", "red");

    

});