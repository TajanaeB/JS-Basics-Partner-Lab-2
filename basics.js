
let randomNumber = Math.floor(Math.random()*10);

let randomNumber2 = Math.floor(Math.random()*10);

let sum = prompt (`Calculate the sum of ${randomNumber} and ${randomNumber2}`);

if (randomNumber + randomNumber2 == sum){
    alert("Correct")
} else {
    alert("Incorrect")
}


let radius = prompt ("Enter Radius Number");

if (radius >= 0) {
  alert(Math.PI * radius * radius); 
  } else {
      alert("WARNING No Negative Numbers");
  }

let weight = prompt ("Please enter your weight (in lbs).");
let height = prompt ("Please enter your height (in inches).");
 
let bmi = (weight / (height * height)) * 703 ;

if ( bmi < 18.5) {
    alert(`BMI: ${bmi} Underweight`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
    alert(`BMI: ${bmi} Normal`)
} else if (bmi >= 25.0 && bmi <= 29.9) {
    alert(`BMI: ${bmi} Overweight`)
} else if (bmi >= 30.0 && bmi <= 39.9) {
    alert(`BMI: ${bmi} Obese`)
} else if (bmi >= 40.0) {
    alert(`BMI: ${bmi} Morbidly Obese`)
}

