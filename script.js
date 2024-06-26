window.onload = function () {
	var logo = document.getElementById("logo");
	logo.addEventListener("mouseover", function () {
		logo.style.border = "2px solid #333";
	});

	logo.addEventListener("mouseout", function () {
		logo.style.border = "none";
	});

	var gameImage = document.getElementById("gameImage");
	gameImage.addEventListener("mouseover", function () {
		gameImage.style.opacity = "0.5";
	});

	gameImage.addEventListener("mouseout", function () {
		gameImage.style.opacity = "1";
	});
};
