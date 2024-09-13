var _a;
(_a = document
    .getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById("profilePicture");
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var experienceElement = document.getElementById("experience");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        experienceElement &&
        educationElement &&
        skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var experience = experienceElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0]; //
        var profilePictureUrl = profilePicturefile ? URL.createObjectURL(profilePicturefile) : ""; //
        var resumeOutput = "\n         <h12>Resume</h2>\n         ".concat(profilePictureUrl ? "<img src=".concat(profilePictureUrl, " alt=\"Profile Picture\" class = \"profilePicture\">") : '', "\n        <p><strong>Name:</strong> <span id = \"edit-name\" class = \"editable\">").concat(name_1, "</span></p>\n        <p><strong>Email:</strong> <span id = \"edit-email\" class = \"editable\"> ").concat(email, "</span></p>\n        <p><strong>Phone:</strong><span id = \"edit-phone\" class = \"editable\"> ").concat(phone, "</span></p>\n        <h3>Work Experience</h3>\n        <p id = \"edit-experience\" class = \"editable\">").concat(experience, "</p>\n        <h3>Education</h3>\n        <p id = \"edit-education\" class = \"editable\">").concat(education, "</p>\n        <h3>Skills</h3>\n        <p id = \"edit-skills\" class = \"editable\">").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "block";
            makeEditable();
        }
    }
    else {
        console.log("one or more form elements are missing");
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll(".editable");
    editableElements.forEach(function (e) {
        e.addEventListener("click", function () {
            var _a;
            var currentElement = e;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = "inline";
                    input_1.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus;
            }
        });
    });
}
