//multi-level array of planets and their respective surface gravity
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

// populate html drop-down options (select element)

// target select element that contains "planets" id
let dropDown = document.getElementById("planets");

 // for each element in planets array, assign option value to planet name
// planets.reverse();

// reverse drop-down order so that the sun is first; then, for each element in planets array, assign option value to planet name
planets.reverse().forEach((option) => {
    [planetName] = option;

    // create HTML element for list option
    let newOption = document.createElement("option");
    // set planet name as option's text
    newOption.text = planetName;
    // set planet name as option's value
    newOption.value = planetName;
    // add option to drop-down list
    dropDown.appendChild(newOption);
});

// create a function that gives us the weight of instruments on each planet

function calculateWeight(weight, planetName) { 
    // iterate through planets array
    for ( let i = 0; i < planets.length; i++ ) {
        // assign index of element in planets array
        let planetInfo = planets[i];

        // if first value in each element matches planetName
        if ( planetInfo[0] === planetName ) {
            // assign planet's surface gravity
            let planetGravity = planetInfo[1];
            // calculate product of planet's surface gravity and weight (100)
            return planetGravity * weight;
        }
    }
};

// create a function that responds when user clicks on button

function handleClickEvent() {
    //  create variable called userWeight and assign value of user's weight
    let userWeight = document.getElementById("user-weight").value;

    // create variable called planetName and assign name of selected planet from drop-down list
    let planetName = dropDown.value;

    // create variable called result and assign value of new calculated weight
    let result = calculateWeight(userWeight, planetName);

    // write code to display the message
    document.getElementById("output").innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`;
};

// set #calculate-button element's onclick method to use the handleClickEvent function
document.getElementById("calculate-button").addEventListener("click", handleClickEvent);