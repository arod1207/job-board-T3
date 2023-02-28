//Components//
import Navbar from "~/components/Navbar";

export default function Register() {
  return (
    <>
      <Navbar />

      <div className="mt-10">
        <h1 className="text-center text-6xl">Start your career journey now</h1>
        <form
          action="submit"
          className="m-auto mt-10 flex w-1/3 flex-col gap-1"
        >
          <label htmlFor="firstName" className="text-xl font-semibold">
            Email
          </label>
          <input
            type="text"
            className="border-1 rounded-lg border border-black py-2 px-2"
          />
          <label htmlFor="firstName" className="text-xl font-semibold">
            First Name
          </label>
          <input
            type="text"
            className="border-1 rounded-lg border border-black py-2 px-2"
          />
          <label htmlFor="firstName" className="text-xl font-semibold">
            Last Name
          </label>
          <input
            type="text"
            className="border-1 rounded-lg border border-black py-2 px-2"
          />
          <label htmlFor="firstName" className="text-xl font-semibold">
            Password
          </label>
          <input
            type="text"
            className="border-1 rounded-lg border border-black py-2 px-2"
          />
          <label htmlFor="firstName" className="text-xl font-semibold">
            Verify Password
          </label>
          <input
            type="text"
            className="border-1 rounded-lg border border-black py-2 px-2"
          />
          <button
            type="submit"
            className="border-1 m-auto mt-10 w-1/3 rounded-lg border border-black py-2 px-4 text-sm"
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
}
