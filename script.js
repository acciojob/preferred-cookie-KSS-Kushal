//your JS code here. If required.
const sizeHTML = document.getElementById('fontsize');
const colorHTML = document.getElementById('fontcolor');
const bodyHTML = document.getElementsByTagName("BODY")[0];

const save = () => {
	document.coockie = `size=${sizeHTML.value}; color=${colorHTML.value}`;
	bodyHTML.style.color = colorHTML.value;
	bodyHTML.style.fontSize = sizeHTML.value;
}