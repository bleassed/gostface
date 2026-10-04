const currentHour = new Date().getHours();
let greeting = "";

if (currentHour >= 5 && currentHour < 12) {
    greeting = "Dood morning mon cher ami";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Good afternoon mon cher ami";
} else if (currentHour >= 18 && currentHour < 23) {
    greeting = "Good evening mon cher ami";
} else {
    greeting = "Good night mon cher ami";
}

const greetingTarget = document.getElementById("greeting-block");
if (greetingTarget) {
    greetingTarget.innerText = greeting;
}
