//your JS code here. If required.
let age = document.getElementById("age");
let name = document.getElementById("name");
let button = document.getElementById("btn");

button.addEventListener("click", () => {
	if(!age.value || !name.value){
		alert("Please enter valid details");
	}
	else{
		new Promise((resolve, reject) => {
				if(age.value >= 18){
					setTimeout(() => {
						resolve(`Welcome, ${name.value}. You can vote.`)
					}, 4000);
				}
				else{
					setTimeout(() => {
						reject(`Oh sorry ${name.value}. You aren't old enough.`);
					}, 4000);
				}
		})
.then(message => alert(message)).catch(error => alert(error));
	}
});