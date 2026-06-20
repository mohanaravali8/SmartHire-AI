import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white shadow">
        <h1 className="text-3xl font-bold text-indigo-600">
          SmartHire AI
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-10 py-20 text-center">
        <h1 className="text-6xl font-bold text-slate-800">
          Get Hired Smarter with
          <span className="text-indigo-600"> SmartHire AI</span>
        </h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Analyze resumes, improve ATS scores, match jobs,
          prepare for interviews, and get AI-powered career guidance.
        </p>

        <div className="mt-10 flex justify-center gap-5">
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-8 py-4 rounded-xl hover:bg-indigo-700"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-indigo-600 text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">📄 Resume Analysis</h2>
          <p className="mt-3 text-slate-600">
            Upload your resume and get detailed AI feedback.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">🎯 ATS Score Checker</h2>
          <p className="mt-3 text-slate-600">
            Check how well your resume performs against ATS systems.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold">🤖 Interview Coach</h2>
          <p className="mt-3 text-slate-600">
            Practice interviews with AI-generated questions.
          </p>
        </div>
      </section>

    </div>
  );
}