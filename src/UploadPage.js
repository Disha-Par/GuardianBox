import React, { useState } from "react";
import axios from "axios";

function UploadPage() {
  const [file, setFile] = useState(null);

  const uploadFile = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
  "http://localhost:5000/api/files/upload",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
);

      prompt(
  "Copy your Share Link:",
  res.data.shareLink
);
    } catch (err) {
      console.log(err);
      alert("Upload Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>📁 Upload Files</h1>

        <p>Securely upload and share your files.</p>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <button
          className="upload-btn"
          onClick={uploadFile}
        >
          Upload File
        </button>
      </div>
    </div>
  );
}

export default UploadPage;