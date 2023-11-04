
//grabbing user input for name
let nameField = document.getElementById('name');
nameField.focus();

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
        let dataThemeAttrib = colorOptions[i].getAttribute("data-theme");

        console.log(dataThemeAttrib, 'brack');

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

let activitiesCost = document.getElementById('activities-cost');

let totalCost = 0;

registerFieldset.addEventListener('change', (e) => {
    let dataCost = e.target.getAttribute(['data-cost']);
    console.log(dataCost);
    console.log(typeof dataCost);
    +dataCost;
    if(e.target.checked === true){
        totalCost += +dataCost;
    } else {
        totalCost -= dataCost;
    }
    activitiesCost.innerHTML = `Total: $${totalCost}`;
        console.log(totalCost);
        console.log(activitiesCost);
})

//payment info 
//step 6
//undefined variable
let selectedPayment;

//disbale when page load
document.querySelector('#paypal').style.display = "none";
document.querySelector('#bitcoin').style.display = "none";

const paymentMethod = document.querySelector('#payment');
paymentMethod.value = 'credit-card';
paymentMethod.addEventListener('change', (event) => {

    //disbaling all payment options 
    document.querySelector('#credit-card').style.display = "none";
    document.querySelector('#paypal').style.display = "none";
    document.querySelector('#bitcoin').style.display = "none";

    //enable payment options slecetd based on id
    document.querySelector(`#${event.target.value}`).style.display = "block";

    //updating slecetedPayment with selcted value from payments
    selectedPayment = event.target.value;
})

//step 7

const validateName = () => {
    //checking to see if there is extra spaces
    if (!nameField.value || (nameField.value.trim() !== nameField.value)) {
        return false;
    } else {
        return true;
    }
}


const validateEmail = () => {
    //Valid format to see if email contains @ and .
    const format = /^[^@]+@[^@.]+\.[a-z]+$/
    const email = document.querySelector('#email').value;
    if (email.match(format)) {
        return true;
    } else {
        return false;
    }
}

const validateRegister = () => {
    //select all inputs belonging to activties box
    const checkboxes = document.querySelectorAll('#activities-box input');
    for (let i = 0; i < checkboxes.length; i++) {

        const input = checkboxes[i];

        if (input.checked || totalCost > 0) {
            return true;
        } else {
            return false;
        }

    }
}

const validateCcNum = () => {
    const ccNumber = document.querySelector('#cc-num').value;
    return /^(\d{13,16})$/.test(ccNumber);
  };

const validateZip = () => {
    const zip = document.querySelector('#zip').value;
    return /^(\d{5})$/.test(zip);
  };
    
const validateCvv = () => {
    const cvv = document.querySelector('#cvv').value; {
        return /^(\d{3})$/.test(cvv);
  };
}


//step 9 visual validation errors

const validate = () => {
    let isValid = true;

    if (!validateName()) {
        nameField.parentElement.classList.add('not-valid');
        nameField.parentElement.classList.remove('valid');
        nameField.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        nameField.parentElement.classList.remove('not-valid');
        nameField.parentElement.classList.add('valid');
        nameField.nextElementSibling.style.display = "none";
    }
    if (!validateEmail()) {
        const email = document.querySelector('#email');
        email.parentElement.classList.add('not-valid');
        email.parentElement.classList.remove('valid');
        email.nextElementSibling.style.display = "block";
        isValid = false;
    } else {
        const email = document.querySelector('#email');
        email.parentElement.classList.remove('not-valid');
        email.parentElement.classList.add('valid');
        email.nextElementSibling.style.display = "none";

    }
    if (!validateRegister()) {
        activities.classList.add('not-valid');
        activities.classList.remove('valid');
        document.querySelector('#activities .hint').style.display = "block";
        isValid = false;
    } else {
        activities.classList.remove('not-valid');
        activities.classList.add('valid');
        document.querySelector('#activities .hint').style.display = "none";

    }
    if (document.querySelector('#payment').value === 'credit-card') {
        if (!validateCcNum()) {
            const ccNumber = document.querySelector('#cc-num');
            ccNumber.parentElement.classList.add('not-valid');
            ccNumber.parentElement.classList.remove('valid');
            ccNumber.nextElementSibling.style.display = "block";
            isValid = false;
        } else {
            const ccNumber = document.querySelector('#cc-num');
            ccNumber.parentElement.classList.remove('not-valid');
            ccNumber.parentElement.classList.add('valid');
            ccNumber.nextElementSibling.style.display = "none";

        }
        if (!validateZip()) {
            const zip = document.querySelector('#zip');
            zip.parentElement.classList.add('not-valid');
            zip.parentElement.classList.remove('valid');
            zip.nextElementSibling.style.display = "block";
            isValid = false;
        } else {
            const zip = document.querySelector('#zip');
            zip.parentElement.classList.remove('not-valid');
            zip.parentElement.classList.add('valid');
            zip.nextElementSibling.style.display = "none";

        }
        if (!validateCvv()) {
            const cvv = document.querySelector('#cvv');
            cvv.parentElement.classList.add('not-valid');
            cvv.parentElement.classList.remove('valid');
            cvv.nextElementSibling.style.display = "block";
            isValid = false;
        } else {
            const cvv = document.querySelector('#cvv');
            cvv.parentElement.classList.remove('not-valid');
            cvv.parentElement.classList.add('valid');
            cvv.nextElementSibling.style.display = "none";
        }
    }
    return isValid;
}




//step 8
//submit event listener/handler
const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', (event) => {
    if (!validate()) {
        event.preventDefault();
    }
   // event.preventDefault();
});

const checkboxes = document.querySelectorAll('#activities-box input');
for (let i = 0; i < checkboxes.length; i++) {
    const input = checkboxes[i];
    input.addEventListener('focus', (event) => {
        event.target.parentElement.classList.add('focus');
    });
    input.addEventListener('blur', (event) => {
        event.target.parentElement.classList.remove('focus');
    });
}