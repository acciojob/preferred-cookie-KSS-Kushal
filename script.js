//your JS code here. If required.
const sizeHTML = document.getElementById('fontsize');
const colorHTML = document.getElementById('fontcolor');
const bodyHTML = document.getElementsByTagName("BODY")[0];

const save = (e) => {
	e.preventDefault();
	bodyHTML.style.color = colorHTML.value;
	bodyHTML.style.fontSize = `${sizeHTML.value}px`;
	const d = new Date();
	d.setTime(d.getTime() + (2*24*60*60*1000));
	let expires = "expires="+ d.toUTCString();
	document.cookie = `fontSize=${sizeHTML.value};${expires};`;
	document.cookie = `fontColor=${colorHTML.value};${expires};`
}

const cookie = document.cookie;
const myObj = {};
const data = cookie.split("; ");
data.forEach((v)=>{
	if(v.split("=")[0]=="fontColor"){
		myObj.color = v.split("=")[1];
	}else if(v.split("=")[0]=="fontSize"){
		myObj.size = v.split("=")[1];
	}
})

if(myObj.color){
	bodyHTML.style.color = myObj.color;
}
if(myObj.size){
	bodyHTML.style.fontSize = `${myObj.size}px`;
}