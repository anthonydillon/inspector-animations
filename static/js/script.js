function init() {
	var machineLinks = document.getElementsByClassName("machine-list__link");
	var inspector = document.getElementById("inspector");
	var backButton = document.getElementsByClassName("unit-list__header-back")[0];

	var showUnitList = function(e) {
		e.preventDefault();
		inspector.className = 'inspector on__unit-listing';
	};

	var showMachineList = function (e) {
		e.preventDefault();
		inspector.className = 'inspector on__machine-listing';
	};

	for (var i = 0; i < machineLinks.length; i++) {
	    machineLinks[i].addEventListener('click', showUnitList, false);
	}

	backButton.addEventListener('click', showMachineList, false);
}


if (window.addEventListener) {
    window.addEventListener("load", init, false);
}