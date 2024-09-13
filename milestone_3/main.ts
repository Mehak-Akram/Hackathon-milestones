document
  .getElementById("resume-form")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    let profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement; //
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
      const profilePicturefile = profilePictureInput.files?.[0];
      const profilePictureUrl = profilePicturefile
        ? URL.createObjectURL(profilePicturefile)
        : "";
      const resumeOutput = `
         <h12>Resume</h2>
                 ${
                   profilePictureUrl
                     ? `<img src=${profilePictureUrl} alt='Profile Picture' class = 'profilePicture'>`
                     : ""
                 }

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

      let resumeOutputElement = document.getElementById("resume-output");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.style.display = "block";
      } else {
        console.log(`the resume output elements is missing`);
      }
    } else {
      console.log(`one or more form elements are missing`);
    }
  });
