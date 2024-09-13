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

    let usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

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
      const resumeHTML = `
         
         ${
           profilePictureUrl
             ? `<img src=${profilePictureUrl} alt="Profile Picture" class = "profilePicture">`
             : ""
         }
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
        shareLinkButton.addEventListener("click", async () => {
          try {
            let shareableLink = `https://yourdomain.com/resumes/${name.replace(
              /\s+/g,
              "_"
            )}_cv.html`;
            await navigator.clipboard.writeText(shareableLink);
            alert("Shareable link copied to clipboard!");
          } catch (err) {
            console.error("Failed to copy link: ", err);
            alert("Failed to copy link to clipboard. pleare try again.");
          }
        });
        buttonsContainer.append(shareLinkButton);
      } else {
        console.error("Resume output container not found");
      }
      console.error("Form elements are missing!");
    }
  });
