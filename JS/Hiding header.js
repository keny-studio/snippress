// HIDING HEADER

// JS

var header = document.querySelector(".site-header");
var navbarHeight = header.offsetHeight;
var lastScrollTop = 0;

window.onscroll = function() {scrollHide()};

function scrollHide() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  console.log(st);
  if (st > lastScrollTop) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScrollTop = st <= 0 ? 0 : st;
}


/* add below to CSS file

 .site-header {
		top:0px;
    transition: all .3s ease;
    transition-delay: .1s;
}

.site-header.hide {
  	top: -60px;
}

*/

