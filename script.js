//your JS code here. If required.
const sizeHTML = document.getElementById('fontsize');
const colorHTML = document.getElementById('fontcolor');
const bodyHTML = document.getElementsByTagName("BODY")[0];

const save = (e) => {
	e.preventDefault();
	bodyHTML.style.color = colorHTML.value;
	bodyHTML.style.fontSize = `${sizeHTML.value}px`;
	document.cookie = `size=${sizeHTML.value}; color=${colorHTML.value}`;
}

const cookie = document.cookie;
const myObj = {};
const data = cookie.split("; ");
data.forEach((v)=>{
	if(v.split("=")[0]=="color"){
		myObj.color = v.split("=")[1];
	}else if(v.split("=")[0]=="size"){
		myObj.size = v.split("=")[1];
	}
})

if(myObj.color){
	bodyHTML.style.color = colorHTML.value;
}
if(myObj.size){
	bodyHTML.style.fontSize = `${sizeHTML.value}px`;
}
