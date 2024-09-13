"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
(_a = document
    .getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    let profilePictureInput = document.getElementById("profilePicture");
    let nameElement = document.getElementById("name");
    let emailElement = document.getElementById("email");
    let phoneElement = document.getElementById("phone");
    let experienceElement = document.getElementById("experience");
    let educationElement = document.getElementById("education");
    let skillsElement = document.getElementById("skills");
    let usernameElement = document.getElementById("username");
    if (profilePictureInput &&
        nameElement &&
        emailElement &&
        phoneElement &&
        experienceElement &&
        educationElement &&
        skillsElement) {
        let name = nameElement.value;
        let email = emailElement.value;
        let phone = phoneElement.value;
        let experience = experienceElement.value;
        let education = educationElement.value;
        let skills = skillsElement.value;
        let profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0]; //
        let profilePictureUrl = profilePicturefile
            ? URL.createObjectURL(profilePicturefile)
            : ""; //
        const resumeHTML = `
         
         ${profilePictureUrl
            ? `<img src=${profilePictureUrl} alt="Profile Picture" class = "profilePicture">`
            : ""}
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong>  ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Work Experience:</h3>
        <p id = >${experience}</p>
        <h3>Education:</h3>
        <p>${education}</p>
        <h3>Skills:</h3>
        <p>${skills}</p>
    `;
        let resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeHTML;
            resumeOutputElement.classList.remove("resume-output");
            let buttonsContainer = document.createElement("div");
            buttonsContainer.id = "buttonsContainer";
            resumeOutputElement.appendChild(buttonsContainer);
            let downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", () => {
                window.print();
            });
            buttonsContainer.appendChild(downloadButton);
            let shareLinkButton = document.createElement("button");
            shareLinkButton.textContent = "Copy Shareable Link";
            shareLinkButton.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
                try {
                    let shareableLink = `https://yourdomain.com/resumes/${name.replace(/\s+/g, "_")}_cv.html`;
                    yield navigator.clipboard.writeText(shareableLink);
                    alert("Shareable link copied to clipboard!");
                }
                catch (err) {
                    console.error("Failed to copy link: ", err);
                    alert("Failed to copy link to clipboard. pleare try again.");
                }
            }));
            buttonsContainer.append(shareLinkButton);
        }
        else {
            console.error("Resume output container not found");
        }
        console.error("Form elements are missing!");
    }
});
