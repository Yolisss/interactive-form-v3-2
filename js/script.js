
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