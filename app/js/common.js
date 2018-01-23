$(function() {

	// Custom JS
	function fun () {
		console.log('i am fun!');
	};
	var bt = document.getElementById("but");
	// bt.onclick = count;

	var cnt = 0;
	function count() {
		cnt +=1;
		console.log(cnt);
	};

	bt.addEventListener('click', fun, false);
	bt.addEventListener('click', count, false);

// change background

	function changeBG() {
		var color1 = getComputedStyle(this).background;
		var color2 = getComputedStyle(this.nextElementSibling).background;
		this.style.background = color2;
		this.nextElementSibling.style.background = color1;
	};

	var coll = document.getElementsByClassName('box');
	for (var i = 0; i < coll.length; i++) {
		coll[i].addEventListener('click', changeBG, false);
	}

});