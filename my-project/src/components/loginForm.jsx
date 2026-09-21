
import { IoIosClose } from "react-icons/io";

function LoginForm({ isClosed }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/40 z-50">
      <div className="bg-white p-8 shadow-lg w-[500px] h-[400px] rounded-md">

        {/* Close button */}
        <div className="flex justify-end">
          <IoIosClose
            size={34}
            onClick={isClosed}
            className="cursor-pointer text-gray-700 hover:text-red-600"
          />
        </div>

    
        <h1 className="text-center font-bold text-3xl my-8">
          Login
        </h1>

     
        <form className="flex flex-col gap-5">

          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-700"
          />

          <input
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-blue-700"
          />

          <button
            type="submit"
            className="bg-blue-900 text-white py-3 rounded-md font-bold hover:bg-blue-800"
          >
            Login
          </button>

        </form>

     
        <div className="flex justify-center items-center gap-2 mt-6">
          <p>Don't have an account?</p>

          <a
            href="/register"
            className="text-blue-700 underline font-medium"
          >
            Sign up
          </a>
        </div>

      </div>
    </div>
  );
}

export default LoginForm;

