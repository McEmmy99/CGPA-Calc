
let gp = document.getElementById('gp');
let cgpa = document.getElementById('cgpa');
let semesters = document.getElementById('semesters');
let submit = document.getElementById('submit');
let result = document.getElementById('result');



//submit.addEventListener("click", calcCgpa);
//let gpVal = gp.value;
//let cgpaVal = cgpa.value;
//let semestersVal = semesters.value;

function calcCgpa () {
	if (gp.value != 0 && cgpa.value != 0 && semesters.value != 0 && gp.value <= 5 && cgpa.value <= 5) {
		let newCGPA = (parseFloat(gp.value) + (parseFloat(cgpa.value) * parseFloat(semesters.value)))/(parseFloat(semesters.value)+1);
		result.style.color = "green";
		result.innerText = `Your CGPA is: ${newCGPA.toFixed(2)}`;
		console.log((5+(4.43*8))/(8+1));
	} else {
		result.innerText = `Please, check the entries again`;
	}
};