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

window.onload = function () {
	var recommendation = document.getElementById("recommendation");
	var osName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win") != -1) osName = "Windows";
	if (navigator.appVersion.indexOf("Mac") != -1) osName = "MacOS";

	var recommendationText = "<h2>Recommended Download for " + osName + "</h2>";
	if (osName == "Windows") {
		recommendationText +=
			'<a href="https://github.com/gianellaf56/LearnEnglishNow/blob/main/windowsos/Learn%20English%20Now.zip" download>Download</a>';
	} else if (osName == "MacOS") {
		recommendationText +=
			'<a href="https://github.com/gianellaf56/LearnEnglishNow/blob/main/macos/Learn%20English%20Now.zip" download>Download</a>';
	} else {
		recommendationText +=
			"<p>Please choose the appropriate download for your operating system below.</p>";
	}

	recommendation.innerHTML = recommendationText;
};
