
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
      alert("WARNING No Negative Numbers")
  }

 