
// When the page loads this sets up the basic behaviour
function init() {
	var animationStaggered = false,
		inspector = document.getElementById("inspector"),
		toUnitList = document.getElementsByClassName("js__to--unit-list"),
		toUnitListBack = document.getElementsByClassName("js__to--unit-list-back"),
		toMachineListBack = document.getElementsByClassName("js__to--machine-list-back"),
		toMachineList = document.getElementsByClassName("js__to--machine-list"),
		toPendingList = document.getElementsByClassName("js__to--pending-list"),
		toUncommitedList = document.getElementsByClassName("js__to--uncommited-list"),
		toErrorList = document.getElementsByClassName("js__to--error-list"),
		animationSwitcher = document.getElementById("animation-switcher"),
		animationStagger = document.getElementById("animation-stagger");

	// Change the state class on the inspector to unit-listing
	var showUnitList = function(e) {
		e.preventDefault();
		if (document.body.className.indexOf('animation--slide-out') != -1) {
			if (animationStaggered) {
				document.body.className = 'animation--slide-in animation--stagger';
			} else {
				document.body.className = 'animation--slide-in';
			}
		}
		if (e.target.className === 'inspector-list__notify--error') {
			inspector.className = 'inspector on__error-listing';
		} else {
			inspector.className = 'inspector on__unit-listing';
		}
	};

	var showUnitListBack = function(e) {
		e.preventDefault();
		if (document.body.className.indexOf('animation--slide-in') != -1) {
			if (animationStaggered) {
				document.body.className = 'animation--slide-out animation--stagger';
			} else {
				document.body.className = 'animation--slide-out';
			}
		}
		inspector.className = 'inspector on__unit-listing';
	}

	// Change the state class on the inspector to machine-listing
	var showMachineList = function (e) {
		e.preventDefault();
		inspector.className = 'inspector on__machine-listing';
	};

	var showMachineListBack = function (e) {
		e.preventDefault();
		if (document.body.className.indexOf('animation--slide-in') != -1) {
			if (animationStaggered) {
				document.body.className = 'animation--slide-out animation--stagger';
			} else {
				document.body.className = 'animation--slide-out';
			}
		}
		inspector.className = 'inspector on__machine-listing';
	}

	// Change the state class on the inspector to error-listing
	var showErrorList = function (e) {
		e.preventDefault();
		if (document.body.className.indexOf('animation--slide-out') != -1) {
			if (animationStaggered) {
				document.body.className = 'animation--slide-in animation--stagger';
			} else {
				document.body.className = 'animation--slide-in';
			}
		}
		inspector.className = 'inspector on__error-listing';
	};

	// Change the state class on the inspector to pending-listing
	var showPendingList = function (e) {
		e.preventDefault();
		if (document.body.className.indexOf('animation--slide-out') != -1) {
			if (animationStaggered) {
				document.body.className = 'animation--slide-in animation--stagger';
			} else {
				document.body.className = 'animation--slide-in';
			}
		}
		inspector.className = 'inspector on__pending-listing';
	};

	// Change the state class on the inspector to uncommitted-listing
	var showUncommitedList = function (e) {
		e.preventDefault();
		if (document.body.className.indexOf('animation--slide-out') != -1) {
			if (animationStaggered) {
				document.body.className = 'animation--slide-in animation--stagger';
			} else {
				document.body.className = 'animation--slide-in';
			}
		}
		inspector.className = 'inspector on__uncommitted-listing';
	};

	var changeAnimation = function (e) {
		if (animationStaggered) {
			document.body.className = e.target.value + ' animation--stagger';
		} else {
			document.body.className = e.target.value;
		}
	};

	var staggerAnimation = function (e) {
		if (e.target.checked) {
			animationStaggered = true;
			document.body.className = document.body.className + ' animation--stagger';
		} else {
			animationStaggered = false;
			document.body.className = document.body.className.replace('animation--stagger', '');
		}
	};

	animationSwitcher.addEventListener('change', changeAnimation, false);
	animationStagger.addEventListener('change', staggerAnimation, false);

	for (var i = 0; i < toUnitList.length; i++) {
	    toUnitList[i].addEventListener('click', showUnitList, false);
	}

	for (var i = 0; i < toUnitListBack.length; i++) {
	    toUnitListBack[i].addEventListener('click', showUnitListBack, false);
	}

	for (var i = 0; i < toMachineList.length; i++) {
	    toMachineList[i].addEventListener('click', showMachineList, false);
	}

	for (var i = 0; i < toMachineListBack.length; i++) {
	    toMachineListBack[i].addEventListener('click', showMachineListBack, false);
	}

	for (var i = 0; i < toErrorList.length; i++) {
	    toErrorList[i].addEventListener('click', showErrorList, false);
	}

	for (var i = 0; i < toUncommitedList.length; i++) {
	    toUncommitedList[i].addEventListener('click', showUncommitedList, false);
	}

	for (var i = 0; i < toPendingList.length; i++) {
	    toPendingList[i].addEventListener('click', showPendingList, false);
	}
}

// Add window listener to listen to load to initialise the js behaviour
if (window.addEventListener) {
    window.addEventListener("load", init, false);
}