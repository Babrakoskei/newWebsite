function blinker() {
	$('fun fact.blinking').fadeOut(500);
	$('fun fact.blinking').fadeIn(500);
}
setInterval(blinker, 1000);