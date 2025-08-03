// 🟡 PREVIEW before upload
document.getElementById('myfile').addEventListener('change', function (e) {
    const file = e.target.files[0];
    const previewContainer = document.getElementById('preview');

    previewContainer.innerHTML = ""; // Clear previous previews

    if (!file) return;

    const fileType = file.type;
    const fileURL = URL.createObjectURL(file);

    if (fileType === "application/pdf") {
        const iframe = document.createElement('iframe');
        iframe.src = fileURL;
        iframe.width = "100%";
        iframe.height = "500px";
        iframe.style.border = "1px solid #ccc";
        previewContainer.appendChild(iframe);


    } else if (file.name.endsWith(".doc") || file.name.endsWith(".docx")) {
        const info = document.createElement('p');
        info.innerHTML = "Preview not supported directly. Click below to view in Google Docs:";
        const link = document.createElement('a');
        link.href = `https://docs.google.com/gview?url=${fileURL}&embedded=true`;
        link.target = "_blank";
        link.innerText = "Open DOC Preview";
        previewContainer.appendChild(info);
        previewContainer.appendChild(link);

    } else if (fileType.startsWith("image/")) {
        const img = document.createElement('img');
        img.src = fileURL;
        img.width = 200;
        previewContainer.appendChild(img);
    } else {
        previewContainer.innerHTML = "⚠️ File type not supported for preview.";
    }
});

// 🟢 UPLOAD the file to server (Cloudinary)
document.getElementById('uploadForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const fileInput = document.getElementById('myfile');
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('myfile', file);

    try {
        const response = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        const previewDiv = document.getElementById('preview');
        previewDiv.innerHTML = ""; // Clear for post-upload view

        if (response.ok) {
            previewDiv.innerHTML = `
                <p><strong>✅ File uploaded successfully!</strong></p>
                <p3><a href="${data.url}" target="_blank">📄 View Full File</a></p3>
            `;

            // Optional: Store uploaded book in local "library" for now
            const libraryDiv = document.getElementById('library');
            if (libraryDiv) {
                const entry = document.createElement('div');
                entry.innerHTML = `
                    <p>📘 <a href="${data.url}" target="_blank">${file.name}</a></p>
                `;
                libraryDiv.appendChild(entry);
            }
        } else {
            alert('Upload failed: ' + (data.message || 'Unknown error'));
        }
    } catch (error) {
        console.error('Upload Error:', error);
        alert('An error occurred while uploading the file.');
    }
});
