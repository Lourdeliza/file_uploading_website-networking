function loadStoredFiles() {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    const fileDisplay = document.getElementById("fileDisplay");

    storedFiles.forEach(file => {
        const fileElement = document.createElement("div");
        fileElement.classList.add("file-item");
        fileElement.innerHTML = `
            <p>Uploaded File: ${file.name}</p>
            <a href="${file.content}" download="${file.name}">Download</a>
        `;
        fileDisplay.appendChild(fileElement);
    });
}

function saveFileMetadata(name, content) {
    const storedFiles = JSON.parse(localStorage.getItem("uploadedFiles")) || [];
    storedFiles.push({ name, content });
    localStorage.setItem("uploadedFiles", JSON.stringify(storedFiles));
}

document.getElementById("uploadBtn").addEventListener("click", function () {
    const fileInput = document.getElementById("fileInput");
    const files = fileInput.files;

    if (files.length > 0) {
        const fileDisplay = document.getElementById("fileDisplay");

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function (e) {
                const fileContent = e.target.result; 

                const fileElement = document.createElement("div");
                fileElement.classList.add("file-item");
                fileElement.innerHTML = `
                    <p>Uploaded File: ${file.name}</p>
                    <a href="${fileContent}" download="${file.name}">Download</a>
                `;
                fileDisplay.appendChild(fileElement);

                saveFileMetadata(file.name, fileContent);
            };
            reader.readAsDataURL(file);
        });
    } else {
        alert("Please select files to upload.");
    }
});

document.addEventListener("DOMContentLoaded", loadStoredFiles);


