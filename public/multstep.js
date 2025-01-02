const stepInfo = document.getElementById("stepInfo")
const navLeft = document.getElementById("navLeft")
const navRight = document.getElementById("navRight")
const form = document.getElementById("myForm")
const formSteps = ["one", "two", "three"] ;

let currentStep = 0
function updateStepVisibility() {
    formSteps.forEach((step) =>{
        document.getElementById(step).style.display = "none" 
    });

    document.getElementById(formSteps[currentStep]).style.display = "block";
    stepInfo.textContent = `step ${currentStep + 1} of ${formSteps.length}`
    navLeft.style.display = currentStep === 0 ? "none" : "block";
    navRight.style.display = currentStep === formSteps.length - 1 ? "none" : "block"

}

document.addEventListener("DOMContentLoaded", () => {
    navLeft.style.display = "none"
    updateStepVisibility()
    navRight.addEventListener("click", () => {
        if (currentStep < formSteps.length -1) {
            currentStep++;
            updateStepVisibility()
        }
    })

    navLeft.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            updateStepVisibility()
        }
    })
})




 // This function will validate each required input before allowing the user to move to the next section.
    function validateSection() {
        // Error flag
        let valid = true;

        // Clear previous errors
        clearErrors();

        // Validate Section 1
        if (!validateField('name') || !validateField('IDNum') || !validateField('email') || !validateField('Date of birth')) {
            valid = false;
        }

        // Validate Section 2
        if (!validateField('Document') || !validateField('deparment')) {
            valid = false;
        }

        // Validate checkbox
        if (!document.getElementById('terms').checked) {
            showError('terms', 'You must agree to the terms and conditions');
            valid = false;
        }

        // If valid, move to the next section
        if (valid) {
            // Here, add logic for moving to the next section (you can change the active section class)
            alert('Form is valid!');
            // Example: move to next section by updating the class
            // changeActiveSection(2);
        }
    }

    function validateField(fieldId) {
        const field = document.getElementById(fieldId);
        if (field && !field.value) {
            showError(fieldId, `${fieldId} is required`);
            return false;
        }
        return true;
    }

    function showError(fieldId, message) {
        const errorDiv = document.getElementById(`${fieldId}Error`);
        if (errorDiv) {
            errorDiv.textContent = message;
            errorDiv.style.color = 'red';
        }
    }
     function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => {
            error.textContent = '';
        });
    }

    function moveSection(direction) {
        // Add logic to handle "Previous" and "Next" navigation
        const sections = document.querySelectorAll('.section');
        let activeSection = document.querySelector('.section.active');
        let activeIndex = Array.from(sections).indexOf(activeSection);

        let nextIndex = activeIndex + direction;
        if (nextIndex >= 0 && nextIndex < sections.length) {
            activeSection.classList.remove('active');
            sections[nextIndex].classList.add('active');
        }
    }