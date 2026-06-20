import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import UploadResume from "./components/UploadResume";
import ResumeAnalysis from "./pages/ResumeAnalysis";
import InterviewCoach from "./pages/InterviewCoach";
import Chatbot from "./pages/Chatbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Home />} />

       
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/upload" element={<UploadResume />} />
        <Route path="/analysis" element={<ResumeAnalysis />} />
        <Route path="/interview" element={<InterviewCoach />} />
        <Route path="/chatbot" element={<Chatbot />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;