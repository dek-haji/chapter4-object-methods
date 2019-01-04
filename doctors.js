const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"
///////////////////////////////////////////////////////////
const doctorBills = 
    {
    officeName: "Mahery clinic",
    streetAddress: "500 innerstate blvd nashville Tn",
    doctorName: "Donald",
    patientName: "daniel",
    visitDate: "03/17/2019",
    amountBilled: "$5100",
    dueDate: "01/26/2019"

};
console.log(doctorBills[dateVisited], doctorBills[owed], doctorBills[patient]);



const inputElement = document.querySelector("#doctors");

// Iterate the array of cars. Individual objects stored in `bills`.
// doctorBills.forEach(bill => {

//     // Iterate all of the values of the current bills
//     inputElement.innerHTML += "<h1> Hospital Bills </h1>"
//     doctorBills.forEach(bill =>{
//     inputElement.innerHTML += "<hr/>"
    
    for (const value of Object.values(doctorBills)) {
        console.log(value);
    //   inputElement.innerHTML += `<span><section>${value}</section></span>`
      
    }

    
// })})
// outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(doctorBills)) {
  console.log(key)
}
