
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Register() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-5">

      <div className="bg-white w-full max-w-[420px] py-6 px-7 rounded-md shadow-lg">

    
        <Link
          to="/"
          className="flex items-center gap-1 text-gray-600 hover:text-blue-700 mb-4"
        >
          <IoIosArrowBack size={18} />
          Back
        </Link>

      
        <h1 className="text-center text-2xl font-bold text-blue-900 mb-6">
          Create Account
        </h1>

    
        <form className="flex flex-col gap-3">

     
          <div>
            <label className="block font-medium text-sm mb-1">
              First Name
            </label>

            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-700"
            />
          </div>

         
          <div>
            <label className="block font-medium text-sm mb-1">
              Last Name
            </label>

            <input
              type="text"
              placeholder="Enter your last name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-700"
            />
          </div>

     
          <div>
            <label className="block font-medium text-sm mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-700"
            />
          </div>

        
          <div>
            <label className="block font-medium text-sm mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-700"
            />
          </div>

     
          <div>
            <label className="block font-medium text-sm mb-1">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-700"
            />
          </div>

       
          <button
            type="submit"
            className="bg-blue-900 text-white py-2.5 rounded-md font-bold hover:bg-blue-800 mt-2"
          >
            Register
          </button>

        </form>

  
        <div className="flex justify-center items-center gap-2 mt-5 text-sm">
          <p>Already have an account?</p>

          <Link
            to="/"
            className="text-blue-700 underline font-medium"
          >
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Register;

