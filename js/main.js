window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 860) {
    document.getElementById("block").style.opacity = "0";
    console.log('yes')
  } else {
    document.getElementById("block").style.opacity = "1";
    console.log('no');
  }
}



// const header = document.querySelector(".contacts")

// window.addEventListener("scroll", toggleNavbarScroll);
// function toggleNavbarScroll(){
//     if (window.scrollY > 0){
//         header.classList.add("opacity-1");
//         console.log('gay')
//     } else {
//         header.classList.remove("opacity-0");
//         console.log('pip');
//     }
// }