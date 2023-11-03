
//grabbing user input for name
let name = document.getElementById('name');
name.focus();

//grabbing select elem for job roles 
//parent elem for all option elems
let jobRole = document.getElementById('title');
//grabbing 'other-job' value from input elem w 'other-job-role'
let otherJobElem = document.getElementById('other-job-role');
//seperating var to 1. properly grab the elem
//2. then apply display 'none' 
otherJobElem.style.display = 'none';

//adding event listener to job role since it contains 
//all the options 
//passing in e that was triggered by the 'change' event by user
jobRole.addEventListener('change', (e) => {
    console.log(e, 'event');
//evaluating event obj whether value is other
    if(e.target.value === 'other'){
//"if user chooses other, input elem for other appears so they 
//can add another job role"
        otherJobElem.style.display = 'block';
    } else {
        otherJobElem.style.display = 'none';
    }
})

//t-shirt info section 

//design select elem
let design = document.getElementById('design');
//color select elem
let color = document.getElementById('color');
//indiv color options
let colorOptions = color.children; 

//drop down list is disabled (removed/not shown)
color.disabled = true; 

design.addEventListener('change', (e) =>{
    //ex. e => i love JS Puns 

    //looping through each option 
    for(let i = 0; i < colorOptions.length; i++){
        //once I select an option, show me drop down list
         color.disabled = false; 
         
        let eValue = e.target.value;

         //going through each options data theme attribute 
        let dataThemeAttrib = colorOptions[i].getAttribute(["data-theme"]);
        console.log(dataThemeAttrib);

        //if JS Puns = JS Puns
        if(eValue === dataThemeAttrib){
            //will show JS Puns options
            colorOptions[i].hidden = false; 
            colorOptions[i].selected = true;
        } else {
            colorOptions[i].hidden = true; 
            colorOptions[i].selected = false;
        }
    }
})

//register for activities section 
let registerFieldset = document.getElementById('activities');
console.log(registerFieldset)
let activitiesCost = document.getElementById('activities-cost');
console.log(activitiesCost);
let totalCost = 0;

registerFieldset.addEventListener('change', (e) => {
    let dataCost = e.target.getAttribute(['data-cost']);
    console.log(dataCost);
    console.log(typeof dataCost);
    +dataCost;
    if(e.target.checked === true){
        totalCost += +dataCost;
        activitiesCost.innerHTML = `Total: $${totalCost}`;
        console.log(totalCost);
        console.log(activitiesCost);
    }
})

//payment info 

let selectPayment = document.getElementById('payment');
console.log(typeof selectPayment);

let creditcard = document.getElementById('credit-card');

let paypal = document.getElementById('paypal');

let bitcoin = document.getElementById('bitcoin');

//i originally though style.display. why hidden?
 paypal.hidden = true;
 bitcoin.hidden = true;

//NEED CLARIFCATION. HOW IS IT AN OBJ AND HOW WERE WE SUPPOSED TO KNOW 
//WHAT TO PUT IN OUR ATTRIBUTE METHOD 
selectPayment.children[1].setAttribute("selected", true);

selectPayment.addEventListener('change', (e) =>{
    console.log(e);
    //why are we writing cc in a string?
    if(e.target.value === "creditcard"){
        creditcard.hidden = false; 
        paypal.hidden = true;
        bitcoin.hidden = true;
        console.log(e.target.value)
    } else if(e.target.value === "paypal"){
        creditcard.hidden = true; 
        paypal.hidden = false;
        bitcoin.hidden = true;
    } else if(e.target.value === "bitcoin") {
        creditcard.hidden = true; 
        paypal.hidden = true;
        bitcoin.hidden = false;
    }
})
