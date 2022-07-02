const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
	const toggleNavbar = () => {
		nav_header.classList.toggle("active");
	};
	mobile_nav.addEventListener("click",()=>toggleNavbar());

	
var icon = document.getElementById("icon");
icon.onclick = function(){
	document.body.classList.toggle("dark-theme");
	if(document.body.classList.contains("dark-theme")){
		icon.src="light.gif";
	}
	else{
		icon.src="dark.gif";
	}
}

const link=document.querySelectorAll(".nav_a");
const sec=document.querySelectorAll("section");
	function activemenu(){
		let len=sec.length;
		while(--len&&window.scrollY+97<sec[len].offsetTop){}
			link.forEach(ltx=>ltx.classList.remove("on"));
			link[len].classList.add("on");
	}
	activemenu();
	window.addEventListener("scroll",activemenu);