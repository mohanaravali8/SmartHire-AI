import { useState } from "react";
import { FaFilePdf, FaUpload } from "react-icons/fa";
import axios from "axios";

export default function ResumeAnalysis() {

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setFileName(selectedFile.name);
  };

  const analyzeResume = async () => {

    if (!file) {
      alert("Please select a PDF.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:8000/ats/analyze",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);

    } catch (err) {
      console.log(err);
      alert("Resume analysis failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8">

      <h1 className="text-4xl font-bold mb-2">
        Resume Analysis
      </h1>

      <p className="text-gray-500 mb-8">
        Upload your resume and get ATS insights.
      </p>

      <div className="bg-white rounded-xl shadow p-8">

        <FaFilePdf
          size={60}
          className="text-red-500 mx-auto"
        />

        <div className="text-center mt-5">

          <label className="bg-indigo-600 text-white px-6 py-3 rounded-lg cursor-pointer">

            <FaUpload className="inline mr-2" />

            Choose Resume

            <input
              type="file"
              accept=".pdf"
              hidden
              onChange={handleFileChange}
            />

          </label>

          {fileName && (
            <p className="mt-4 text-green-600">
              {fileName}
            </p>
          )}

          <button
            onClick={analyzeResume}
            className="block mx-auto mt-6 bg-green-600 text-white px-8 py-3 rounded-lg"
          >
            {loading ? "Analyzing..." : "Analyze Resume"}
          </button>

        </div>

      </div>

      {result && (

        <div className="mt-10">

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">

              <h2 className="text-xl font-bold">
                ATS Score
              </h2>

              <p className="text-5xl text-green-600 font-bold mt-4">
                {result.atsScore}%
              </p>

            </div>

            <div className="bg-white p-6 rounded-xl shadow">

              <h2 className="text-xl font-bold">
                Skills Found
              </h2>

              <div className="flex flex-wrap gap-2 mt-4">

                {result.skills.map((skill, index) => (

                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

            <div className="bg-white p-6 rounded-xl shadow">

              <h2 className="text-xl font-bold">
                Missing Skills
              </h2>

              <ul className="mt-4">

                {result.missingSkills.map((skill, index) => (

                  <li
                    key={index}
                    className="text-red-600"
                  >
                    {skill}
                  </li>

                ))}

              </ul>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow p-6 mt-8">

            <h2 className="text-2xl font-bold mb-4">
              AI Suggestions
            </h2>

            <ul>

              {result.suggestions.map((item, index) => (

                <li
                  key={index}
                  className="mb-2"
                >
                  ✅ {item}
                </li>

              ))}

            </ul>

          </div>

        </div>

      )}

    </div>
  );
}