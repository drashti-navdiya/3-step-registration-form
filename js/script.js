// GET ELEMENTS

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");


// Buttons

const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");

const back2 = document.getElementById("back2");
const back3 = document.getElementById("back3");

const submitBtn = document.getElementById("submitBtn");


// Step indicators

const indicator1 = document.getElementById("indicator1");
const indicator2 = document.getElementById("indicator2");
const indicator3 = document.getElementById("indicator3");


// Step 1 fields

const name = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");


// Step 2 fields

const address = document.getElementById("address");
const city = document.getElementById("city");
const pincode = document.getElementById("pincode");


// Success message

const successMessage =
    document.getElementById("successMessage");

const confirmationText =
    document.getElementById("confirmationText");


// NAME VALIDATION

function validateName() {

    const value = name.value.trim();

    const error = document.getElementById("nameError");

    if (value === "") {

        error.textContent =
            "Name is required";

        name.classList.add("invalid");
        name.classList.remove("valid");

        return false;
    }

    if (!/^[A-Za-z ]+$/.test(value)) {

        error.textContent =
            "Name must contain only letters";

        name.classList.add("invalid");
        name.classList.remove("valid");

        return false;
    }

    error.textContent = "";

    name.classList.remove("invalid");
    name.classList.add("valid");

    return true;
}

// EMAIL VALIDATION

function validateEmail() {

    const value = email.value.trim();

    const error = document.getElementById("emailError");

    if (value === "") {

        error.textContent =
            "Email is required";

        email.classList.add("invalid");
        email.classList.remove("valid");

        return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {

        error.textContent = "Please enter a valid email address";

        email.classList.add("invalid");
        email.classList.remove("valid");

        return false;
    }

    error.textContent = "";

    email.classList.remove("invalid");
    email.classList.add("valid");

    return true;
}

// MOBILE VALIDATION

function validateMobile() {

    const value = mobile.value.trim();

    const error = document.getElementById("mobileError");

    if (value === "") {

        error.textContent =
            "Mobile number is required";

        mobile.classList.add("invalid");
        mobile.classList.remove("valid");

        return false;
    }

    if (!/^\d+$/.test(value)) {

        error.textContent = "Mobile number must contain only digits";

        mobile.classList.add("invalid");
        mobile.classList.remove("valid");

        return false;
    }

    if (value.length !== 10) {

        error.textContent =
            "Mobile number must be exactly 10 digits";

        mobile.classList.add("invalid");
        mobile.classList.remove("valid");

        return false;
    }

    error.textContent = "";

    mobile.classList.remove("invalid");
    mobile.classList.add("valid");

    return true;
}

// ADDRESS VALIDATION

function validateAddress() {

    const value = address.value.trim();

    const error =
        document.getElementById("addressError");

    if (value === "") {

        error.textContent = "Address is required";

        address.classList.add("invalid");
        address.classList.remove("valid");

        return false;
    }


    if (value.length < 10) {

        error.textContent = "Address must contain at least 10 characters";

        address.classList.add("invalid");
        address.classList.remove("valid");

        return false;
    }

    error.textContent = "";

    address.classList.remove("invalid");
    address.classList.add("valid");

    return true;
}

// CITY VALIDATION

function validateCity() {

    const value = city.value.trim();

    const error =
        document.getElementById("cityError");


    if (value === "") {

        error.textContent =
            "City is required";

        city.classList.add("invalid");
        city.classList.remove("valid");

        return false;
    }

    if (!/^[A-Za-z ]+$/.test(value)) {

        error.textContent =
            "City must contain only letters";

        city.classList.add("invalid");
        city.classList.remove("valid");

        return false;
    }

    error.textContent = "";

    city.classList.remove("invalid");
    city.classList.add("valid");

    return true;
}



// PINCODE VALIDATION

function validatePincode() {

    const value = pincode.value.trim();

    const error = document.getElementById("pincodeError");

    if (value === "") {

        error.textContent =
            "Pincode is required";

        pincode.classList.add("invalid");
        pincode.classList.remove("valid");

        return false;
    }

    if (!/^\d+$/.test(value)) {

        error.textContent =
            "Pincode must contain only digits";

        pincode.classList.add("invalid");
        pincode.classList.remove("valid");

        return false;
    }

    if (value.length !== 6) {

        error.textContent =
            "Pincode must be exactly 6 digits";

        pincode.classList.add("invalid");
        pincode.classList.remove("valid");

        return false;
    }

    error.textContent = "";

    pincode.classList.remove("invalid");
    pincode.classList.add("valid");

    return true;
}

// STEP 1 → STEP 2

next1.addEventListener("click", function () {

    const nameValid = validateName();

    const emailValid = validateEmail();

    const mobileValid = validateMobile();


    if (
        nameValid &&
        emailValid &&
        mobileValid
    ) {

        step1.classList.add("hidden");

        step2.classList.remove("hidden");


        indicator1.classList.remove("active");

        indicator1.classList.add("completed");

        indicator2.classList.add("active");
    }

});

// STEP 2 → STEP 3

next2.addEventListener("click", function () {

    const addressValid = validateAddress();

    const cityValid = validateCity();

    const pincodeValid = validatePincode();


    if (
        addressValid &&
        cityValid &&
        pincodeValid
    ) {

        step2.classList.add("hidden");

        step3.classList.remove("hidden");


        indicator2.classList.remove("active");

        indicator2.classList.add("completed");

        indicator3.classList.add("active");
    }

});

// STEP 2 → STEP 1

back2.addEventListener("click", function () {

    step2.classList.add("hidden");

    step1.classList.remove("hidden");


    indicator2.classList.remove("active");

    indicator1.classList.remove("completed");

    indicator1.classList.add("active");
});

// STEP 3 → STEP 2

back3.addEventListener("click", function () {

    step3.classList.add("hidden");

    step2.classList.remove("hidden");


    indicator3.classList.remove("active");

    indicator2.classList.remove("completed");

    indicator2.classList.add("active");
});

// SUBMIT

submitBtn.addEventListener("click", function () {

    successMessage.classList.remove("hidden");

    confirmationText.classList.add("hidden");

    submitBtn.classList.add("hidden");

});