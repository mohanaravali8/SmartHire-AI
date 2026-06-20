


import { useState } from "react";
import API from "../services/api";

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState(null);

  const uploadResume = async () => {
    if (!file) {
      alert("Please select a resume.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);

      const res = await API.post("/resume/upload", formData);

      setResult(res.data);
      alert("Resume uploaded successfully!");
    } catch (err) {
      console.error(err.response?.data || err);
      alert(err.response?.data?.message || "Upload Failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-indigo-600 via-purple-600 to-cyan-500 flex items-center justify-center p-6">

      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">

        <h1 className="text-4xl font-bold text-white text-center">
          📄 Resume Analyzer
        </h1>

        <p className="text-center text-white/80 mt-3">
          Upload your resume and get ATS score with AI insights
        </p>

        {/* Upload Area */}
        <div className="mt-8 border-2 border-dashed border-white/40 rounded-2xl p-10 text-center bg-white/5">

          <div className="text-6xl mb-4">📂</div>

          <p className="text-white text-lg">
            Drag & Drop Resume Here
          </p>

          <p className="text-white/70 mt-2">
            PDF, DOC, DOCX Supported
          </p>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setFile(e.target.files[0])}
            className="mt-5 block w-full text-white
                       file:mr-4 file:py-3 file:px-6
                       file:rounded-xl file:border-0
                       file:bg-white file:text-indigo-600
                       file:font-semibold cursor-pointer"
          />

          {file && (
            <p className="text-green-300 mt-4 font-medium">
              Selected: {file.name}
            </p>
          )}
        </div>

        <button
          onClick={uploadResume}
          disabled={uploading}
          className="w-full mt-8 bg-white text-indigo-700 font-bold py-4 rounded-2xl hover:scale-105 transition duration-300 shadow-lg"
        >
          {uploading ? "⏳ Uploading..." : "🚀 Analyze Resume"}
        </button>

        {result && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-xl">

            <div className="text-center">
              <h2 className="text-5xl font-bold text-green-600">
                {result.atsScore}%
              </h2>

              <p className="text-gray-600 mt-2">
                ATS Compatibility Score
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                🛠 Extracted Skills
              </h3>

              <div className="flex flex-wrap gap-3">
                {result.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
}