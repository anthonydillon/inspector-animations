
// When the page loads this sets up the basic behaviour
function init() {
	var inspector = document.getElementById("inspector"),
		toUnitList = document.getElementsByClassName("js__to--unit-list"),
		toMachineList = document.getElementsByClassName("js__to--machine-list"),
		toErrorList = document.getElementsByClassName("js__to--error-list");

	// Change the state class on the inspector to unit-listing
	var showUnitList = function(e) {
		e.preventDefault();
		inspector.className = 'inspector on__unit-listing';
	};

	// Change the state class on the inspector to machine-listing
	var showMachineList = function (e) {
		e.preventDefault();
		inspector.className = 'inspector on__machine-listing';
	};

	// Change the state class on the inspector to error-listing
	var showErrorList = function (e) {
		e.preventDefault();
		inspector.className = 'inspector on__error-listing';
	};

	for (var i = 0; i < toUnitList.length; i++) {
	    toUnitList[i].addEventListener('click', showUnitList, false);
	}

	for (var i = 0; i < toMachineList.length; i++) {
	    toMachineList[i].addEventListener('click', showMachineList, false);
	}

	for (var i = 0; i < toErrorList.length; i++) {
	    toErrorList[i].addEventListener('click', showErrorList, false);
	}
}

// Add window listener to listen to load to initialise the js behaviour
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}