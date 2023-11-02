console.log('test');

//grabbing user input for name
let name = document.getElementById('name');
console.log(name);
name.focus();

//grabbing select elem for job roles 
//parent elem for all option elems
let jobRole = document.getElementById('title');
    console.log(jobRole, 'jobrole');
//grabbing 'other-job' value from input elem w 'other-job-role'
let otherJobElem = document.getElementById('other-job-role');
//seperating var to 1. properly grab the elem
//2. then apply display 'none' 
otherJobElem.style.display = 'none';
    console.log(otherJobElem, 'other')

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