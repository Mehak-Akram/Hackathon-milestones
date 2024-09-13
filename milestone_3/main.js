var _a;
(_a = document
    .getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture'); //
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var experienceElement = document.getElementById("experience");
    var educationElement = document.getElementById("education");
    var skillsElement = document.getElementById("skills");
    if (profilePictureInput && //
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
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '';
        var resumeOutput = "\n         <h12>Resume</h2>\n                 ".concat(profilePictureUrl ? "<img src=".concat(profilePictureUrl, " alt='Profile Picture' class = 'profilePicture'>") : '', "\n\n        <p><strong>Name:</strong> ").concat(name_1, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resume-output');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.style.display = "block";
        }
        else {
            console.log("the resume output elements is missing");
        }
    }
    else {
        console.log("one or more form elements are missing");
    }
});
