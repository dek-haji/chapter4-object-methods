//  Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti,
//  fried fish, gumbo). Each object should have a name property, but you can add any other 
//  properties that you like, such as size, weight, ethnicity, vegetarian boolean.
const domEmelent = document.querySelector("#favFood");
const favFood = [
{
    name: "spagheti",
    ethnicity : "Italian",
    vegetarian: true
}, 
    {
    name: "pasta",
    ethnicity : "hawiye",
    vegetarian: false
},
    {
    name: "bread",
    ethnicity : "the country of bread",
    vegetarian: true
}];

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside 
// an <article> element with a class of food

favFood.forEach(dinnerItem => {
    let stringHtml = "<article class = 'food'>";
    for (const entrySet of Object.defineProperties(dinnerItem)) {
        stringHtml += `<div>${entrySet[0]}: ${entrySet[1]}</div>`
    }
    domEmelent.innerHTML += stringHtml + "</article>"
})