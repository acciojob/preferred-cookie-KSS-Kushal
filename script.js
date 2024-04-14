//your JS code here. If required.
const sizeHTML = document.getElementById('fontsize');
const colorHTML = document.getElementById('fontcolor');
const bodyHTML = document.getElementsByTagName("BODY")[0];

const save = (e) => {
	e.preventDefault();
	bodyHTML.style.color = colorHTML.value;
	bodyHTML.style.fontSize = `${sizeHTML.value}px`;
	document.cookie = `fontSize=${sizeHTML.value};`;
	document.cookie = `fontColor=${colorHTML.value};`
}

const cookie = document.cookie;
const myObj = {};
const data = cookie.split("; ");
data.forEach((v)=>{
	console.log(v.split("=")[0])
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