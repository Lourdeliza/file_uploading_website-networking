document.getElementById("uploadBtn").addEventListener("click", function() {
    const fileInput = document.getElementById("fileInput");
    const files = fileInput.files;

    if (files.length > 0) {
        const fileDisplay = document.getElementById("fileDisplay");

        // Iterate over all selected files and append them to the display area
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileURL = URL.createObjectURL(file);

            // Create an element to display the file name and download link
            const fileElement = document.createElement("div");
            fileElement.classList.add("file-item");
            fileElement.innerHTML = `
                <p>Uploaded File: ${file.name}</p>
                <a href="${fileURL}" download="${file.name}">Download</a>
            `;

            // Append the file element to the display container
            fileDisplay.appendChild(fileElement);
        }
    } else {
        alert("Please select files to upload.");
    }
});


