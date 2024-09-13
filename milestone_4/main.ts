document
  .getElementById("resume-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    let profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;
    let nameElement = document.getElementById("name") as HTMLInputElement;
    let emailElement = document.getElementById("email") as HTMLInputElement;
    let phoneElement = document.getElementById("phone") as HTMLInputElement;
    let experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    let educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    let skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;
    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      experienceElement &&
      educationElement &&
      skillsElement
    ) {
      let name = nameElement.value;
      let email = emailElement.value;
      let phone = phoneElement.value;
      let experience = experienceElement.value;
      let education = educationElement.value;
      let skills = skillsElement.value;

      let profilePicturefile = profilePictureInput.files?.[0]; //
      let profilePictureUrl = profilePicturefile
        ? URL.createObjectURL(profilePicturefile)
        : ""; //
      const resumeOutput = `
         <h12>Resume</h2>
         ${
           profilePictureUrl
             ? `<img src=${profilePictureUrl} alt="Profile Picture" class = "profilePicture">`
             : ""
         }
        <p><strong>Name:</strong> <span id = "edit-name" class = "editable">${name}</span></p>
        <p><strong>Email:</strong> <span id = "edit-email" class = "editable"> ${email}</span></p>
        <p><strong>Phone:</strong><span id = "edit-phone" class = "editable"> ${phone}</span></p>
        <h3>Work Experience</h3>
        <p id = "edit-experience" class = "editable">${experience}</p>
        <h3>Education</h3>
        <p id = "edit-education" class = "editable">${education}</p>
        <h3>Skills</h3>
        <p id = "edit-skills" class = "editable">${skills}</p>
    `;

      let resumeOutputElement = document.getElementById("resume-output");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
        makeEditable();
      }
    } else {
      console.log(`one or more form elements are missing`);
    }
  });

function makeEditable() {
  const editableElements = document.querySelectorAll(".editable");
  editableElements.forEach((e) => {
    e.addEventListener("click", function () {
      let currentElement = e as HTMLElement;
      let currentValue = currentElement.textContent || "";

      if (currentElement.tagName === "p" || currentElement.tagName === "span") {
        let input = document.createElement("input");
        input.type = "text";
        input.value = currentValue;
        input.classList.add("editing-input");

        input.addEventListener("blur", function () {
          currentElement.textContent = input.value;
          currentElement.style.display = "inline";
          input.remove();
        });

        currentElement.style.display = "none";
        currentElement.parentNode?.insertBefore(input, currentElement);
        input.focus;
      }
    });
  });
}
