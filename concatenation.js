let submitButton = document.querySelector(".submit");
let results = document.querySelector(".results");

submitButton.addEventListener("click", function() {
    results.style.display = "block";
    let myName = document.querySelector(".my-name").value;
    let mood = document.querySelector(".mood").value;
    let food = document.querySelector(".food-name").value;
    let birthYear = document.querySelector(".year").value;
    let age = 2025 - birthYear; // update to 2024, if necessary
    // 1. Declare a variable to save the value of the city the user is from.
    let city = document.querySelector(".city").value;
    // 2. Below write your sentences! 
    // - Have them show up in the div with class "results".
    // - Example paragraph: "My name is (myName). I'm feeling (mood) and I absolutely lovveeee eating (food) 😍..."
    // - Try placing your sentences into <p> or <li> tags.
    let sentences =   " and I live in " + city + ". I am " + age + " years old.";
    results.innerHTML = "";
    results.innerHTML += `<p>My name is ${myName}.</p>`;
    results.innerHTML += `<p>I'm feeling ${mood}.</p>`;
    results.innerHTML += `<p>I absolutely lovveee eating ${food}.</p>`;
    results.innerHTML += `<p>I was born in ${birthYear}.</p>`;
    results.innerHTML += `<p>I live in ${city}.</p>`;
    results.innerHTML += `<p>I am ${age} years old.</p>`;
});