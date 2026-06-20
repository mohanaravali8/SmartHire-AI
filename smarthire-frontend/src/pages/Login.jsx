// import { Link } from "react-router-dom";

// export default function Login() {
//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

//       <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

//         {/* Left Section */}
//         <div className="bg-linear-to-br from-indigo-600 to-cyan-500 text-white p-10 flex flex-col justify-center">

//           <h1 className="text-5xl font-bold">
//             SmartHire AI
//           </h1>

//           <p className="mt-6 text-lg">
//             AI Powered Resume Analyzer,
//             ATS Score Checker,
//             Job Matcher and Interview Coach.
//           </p>

//           <div className="mt-10">
//             <div className="bg-white/20 p-4 rounded-xl">
//               📄 Resume Analysis
//             </div>

//             <div className="bg-white/20 p-4 rounded-xl mt-4">
//               🎯 ATS Score
//             </div>

//             <div className="bg-white/20 p-4 rounded-xl mt-4">
//               🤖 AI Interview Coach
//             </div>
//           </div>

//         </div>

//         {/* Right Section */}
//         <div className="p-10">

//           <h2 className="text-3xl font-bold text-slate-800">
//             Welcome Back 👋
//           </h2>

//           <p className="text-slate-500 mt-2">
//             Login to your account
//           </p>

//           <form className="mt-8">

//             <div>
//               <label className="block text-slate-700 mb-2">
//                 Email Address
//               </label>

//               <input
//                 type="email"
//                 placeholder="Enter Email"
//                 className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             <div className="mt-5">
//               <label className="block text-slate-700 mb-2">
//                 Password
//               </label>

//               <input
//                 type="password"
//                 placeholder="Enter Password"
//                 className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               />
//             </div>

//             <button
//               className="w-full mt-8 bg-indigo-600 text-white p-4 rounded-xl hover:bg-indigo-700 transition"
//             >
//               Sign In
//             </button>

//           </form>

//           <p className="mt-6 text-center text-slate-600">
//             Don't have an account?
//             <Link
//               to="/register"
//               className="text-indigo-600 font-semibold ml-2"
//             >
//               Register
//             </Link>
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }

import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login
    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Left Section */}
        <div className="bg-linear-to-br from-indigo-600 to-cyan-500 text-white p-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold">
            SmartHire AI
          </h1>

          <p className="mt-6 text-lg">
            AI Powered Resume Analyzer, ATS Score Checker,
            Job Matcher and Interview Coach.
          </p>

          <div className="mt-10">
            <div className="bg-white/20 p-4 rounded-xl">
              📄 Resume Analysis
            </div>

            <div className="bg-white/20 p-4 rounded-xl mt-4">
              🎯 ATS Score
            </div>

            <div className="bg-white/20 p-4 rounded-xl mt-4">
              🤖 AI Interview Coach
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-slate-800">
            Welcome Back 👋
          </h2>

          <p className="text-slate-500 mt-2">
            Login to your account
          </p>

          <form className="mt-8" onSubmit={handleLogin}>

            <div>
              <label className="block text-slate-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter Email"
                required
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="mt-5">
              <label className="block text-slate-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter Password"
                required
                className="w-full p-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-indigo-600 text-white p-4 rounded-xl hover:bg-indigo-700 transition"
            >
              Sign In
            </button>

          </form>

          <p className="mt-6 text-center text-slate-600">
            Don't have an account?
            <Link
              to="/register"
              className="text-indigo-600 font-semibold ml-2"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}