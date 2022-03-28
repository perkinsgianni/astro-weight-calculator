// multi-level array of planets and their respective surface gravity
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
const dropDown = document.getElementById("planets");

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

// create a function that removes Pluto as an option when checkbox is checked

function removePluto() {
    // target pluto checkbox, whose default is unchecked
    let plutoCheckbox = document.getElementById("pluto-checkbox");

    // if plutoCheckbox is checked
    if ( plutoCheckbox.checked != false ) {
        // remove pluto from drop-down list
        dropDown.removeChild(dropDown.options[10])
    // else if plutoCheckbox is unchecked
    } else if ( plutoCheckbox.checked == false ) {
        // add pluto back to drop-down list
        let plutoOption = document.createElement("option");
        plutoOption.text = planetName;
        plutoOption.value = planetName;
        dropDown.appendChild(plutoOption);
        }
};

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
            // calculate product of planet's surface gravity and weight
            return planetGravity * weight;
        }
    }
};

// create a function that calculates the weight of instruments on new planet with its own multiplier

// function calculateNewWeight(weight, multiplier) {
//     // if multiplier for new planet is greater than or equal to 0
//     if ( multiplier >= 0 ) {
//         // calculate product of new planet's multiplier and weight
//         return weight * multiplier;
//     }
// };

// create a function that responds when user clicks on calculate button

function calculateButton() {
    //  create variable called userWeight and assign value of user-weight
    let userWeight = document.getElementById("user-weight").value;
    //  create variable called multiplier and assign value of new-planet-multiplier
    // let multiplier = document.getElementById("new-planet-multiplier").value;
    // create variable called planetName and assign name of selected planet from drop-down list
    let planetName = dropDown.value;
    // create variable called newPlanetName and assign name of new planet from drop-down list
    // let newPlanetName = dropDown.value;
    // create variable called result and assign value of calculated weight
    let result = calculateWeight(userWeight, planetName);
    // create variable called newResult and assign value of calculated weight on new planet
    // let newResult = calculateNewWeight(userWeight, multiplier);

    // write code to display the message
    document.getElementById("output").innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`;

    // write code to display message, based on whether multiplier is less than or equal to 0
    // if ( multiplier <= 0) {
    //     document.getElementById("output").innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`;
    // } else {
    //     document.getElementById("output").innerHTML = `If you were on ${newPlanetName}, you would weigh ${newResult}lbs!`;
    // }
};

// create a function that adds custom planet to drop-down list when user clicks on add planet button

// function addPlanetButton() {
//     // target input element with new-planet-name id
//     let newPlanetName = document.getElementById("new-planet-name").value;

//     // if newPlanetName isn't "true"
//     if ( newPlanetName != true ) {
//         // add new planet to drop-down list
//         let newPlanetOption = document.createElement("option");
//         newPlanetOption.text = newPlanetName;
//         newPlanetOption.value = newPlanetName;
//         dropDown.appendChild(newPlanetOption);
//     }
//     // set new planet as default value in drop-down list
//     dropDown.selectedIndex = 11;
// };

// create a function that clears output when user clicks on reset button

function resetButton() {
    // clear user-weight value
    document.getElementById("user-weight").value = '';
    // clear new-planet-name value
    // document.getElementById("new-planet-name").value = '';
    // clear new-planet-multiplier
    // document.getElementById("new-planet-multiplier").value= '';
    // set first index as drop-down option
    dropDown.selectedIndex = 0;
    // add pluto back to drop-down list
    let plutoOption = document.createElement("option");
    plutoOption.text = planetName;
    plutoOption.value = planetName;
    dropDown.appendChild(plutoOption);
    // clear pluto checkmark
    document.getElementById("pluto-checkbox").checked = false;
    // assign empty string to message
    document.getElementById("output").innerHTML = '';
};

// create onclick events

// set #calculate-button element's onclick method to use the calculateButton function
document.getElementById("calculate-button").addEventListener("click", calculateButton);
// set #pluto-checkbox element's onclick method to use the removePluto function
document.getElementById("pluto-checkbox").addEventListener("click", removePluto);
// set #calculate-button element's onclick method to use the addPlanetButton function
// document.getElementById("add-planet-button").addEventListener("click", addPlanetButton);
// set #reset-button element's onclick method to use resetButton function
document.getElementById("reset-button").addEventListener("click", resetButton);