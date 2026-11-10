import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SharePage() {
  const { shareId } = useParams();
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchFile();
  }, []);

  const fetchFile = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/files/share/${shareId}`
      );

      setFile(res.data);
    } catch (err) {
      console.log(err);
      alert("File not found");
    }
  };

  return (
  <div className="container">
    <div className="card">
      <h1 className="title">🔗 Shared File</h1>

      {file ? (
        <>
          <p className="subtitle">
            {file.originalName}
          </p>

          <a
            href={`http://localhost:5000/${file.path}`}
            download
          >
            <button className="cyber-btn download-btn">
              ⬇ Download File
            </button>
          </a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
);
}


export default SharePage;
