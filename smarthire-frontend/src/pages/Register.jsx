import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left */}
        <div className="bg-linear-to-br from-purple-600 to-pink-500 text-white p-10 flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            Join SmartHire AI
          </h1>

          <p className="mt-6 text-lg">
            Build your career with AI powered guidance.
          </p>

        </div>

        {/* Right */}
        <div className="p-10">

          <h2 className="text-3xl font-bold text-slate-800">
            Create Account
          </h2>

          <form className="mt-8">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 border rounded-xl mb-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border rounded-xl mb-4"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border rounded-xl mb-4"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-4 border rounded-xl"
            />

            <button
              className="w-full mt-6 bg-purple-600 text-white p-4 rounded-xl"
            >
              Create Account
            </button>

          </form>

          <p className="mt-5 text-center">
            Already have an account?

            <Link
              to="/"
              className="text-purple-600 ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}