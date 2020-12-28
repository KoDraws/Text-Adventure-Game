function startUp() {
	var gameData = {
		pageId = 0
		pc:{
			name: "",
			height: 0,
			muscle: 0,
			fat: 0,
			intelligence: 0,
			wisdom: 0,
			charisma: 0,
			penis: {}
			balls: {}
			breasts: {}
			vagina: {}
			inventory: {}
		}
	};
	document.getElementById("1-text").innerHTML = "SAUCE";
	nextPage();
}

function nextPage() {
	var button = document.getElementsByClassName("mainButton");
	var i;
	for (i = 0; i < button.length; i++) {
		if (button[i].innerText === "") {
			button[i].disabled = true;
		}
	}
}

function pages() {
}