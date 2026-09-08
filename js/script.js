
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");


const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");

const back2 = document.getElementById("back2");
const back3 = document.getElementById("back3");

const form = document.getElementById("myForm");

// Step 1 → Step 2
next1.addEventListener("click", function () {

    const name = document.getElementById("name");
    const email= document.getElementById("email");
    const phone = document.getElementById("phone");

    if(name.value.trim()===""){
        alert("Please enter your name.");
        return;
    }

    if (email.value.trim() === "") {
        alert("Please enter your email.");
        return;
    }

    if(!email.value.includes('@')){
        alert("!please enter valid email address.");
        return;
    }

    if (phone.value.trim() === "") {
        alert("Please enter your phone number.");
        return;
    }

    if(phone.value.trim().length !== 10 || isNaN(phone.value.trim())){
        alert("Phone number must contain exactly 10 digits.");
        return;
    }

    step1.style.display = "none";
    step2.style.display = "block";

});


// Step 2 → Step 3
next2.addEventListener("click", function () {

    const address = document.getElementById("address");
    const city = document.getElementById("city");
    const pincode = document.getElementById("pincode");

    if (address.value.trim() === "") {
        alert("Please enter your address.");
        return;
    }

    if (city.value.trim() === "") {
        alert("Please enter your city.");
        return;
    }

    if (pincode.value.trim() === "") {
        alert("Please enter your pincode.");
        return;
    }

    if(pincode.value.trim().length!==6 || isNaN(pincode.value.trim())){
        alert("Pincode must contain exactly 6 digits.");
        return;
    }

    step2.style.display = "none";
    step3.style.display = "block";

});


// Step 2 → Step 1
back2.addEventListener("click", function () {

    step2.style.display = "none";
    step1.style.display = "block";

});


// Step 3 → Step 2
back3.addEventListener("click", function () {

    step3.style.display = "none";
    step2.style.display = "block";

});

form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form submitted successfully..");
});