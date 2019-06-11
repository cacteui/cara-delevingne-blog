// NAVIGATION OVERLAY
var navToggle = document.querySelector("#nav-toggle"),
	navigation = document.querySelector("#nav");

navToggle.addEventListener("click", function() {
    navToggle.classList.toggle("active");
  });

navToggle.addEventListener("click", function() {
    navigation.classList.toggle("nav-toggled");
  });


// HEADER, NAVIGATION & FOOTER SCROLL
window.onscroll = function() {
	myScroll()
}

function myScroll() {
	if (document.body.scrollTop || document.documentElement.scrollTop > 10) {
		document.querySelector("header.scrollable").classList.add("scroll");
		document.querySelector("nav.scrollable").classList.add("scroll");
		document.querySelector("footer.scrollable").classList.add("scroll");
	} else {
		document.querySelector("header.scrollable").classList.remove("scroll");
		document.querySelector("nav.scrollable").classList.remove("scroll");
		document.querySelector("footer.scrollable").classList.remove("scroll");
	}
};