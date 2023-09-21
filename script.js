//your JS code here. If required.
const button = document.getElementById("enterBtn");
button.addEventListener("click",()=>{
	const heading = document.createElement("h1");
	heading.id = "status";
	heading.innerText = `Entered Metaverse`;
	const referenceNode = document.getElementById("status");
	const body = document.getElementById("status").parentNode;
	body.replaceChild(heading,referenceNode);
});