import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  return (
    // <div className="mt-10">
    //   <h1 className="text-center text-6xl">Start your career journey now</h1>
    //   <form action="submit" className="m-auto mt-10 flex w-1/3 flex-col gap-1">
    //     <label htmlFor="email" className="text-xl font-semibold">
    //       Email
    //     </label>
    //     <input
    //       type="text"
    //       className="border-1 rounded-lg border border-black py-2 px-2"
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <label htmlFor="firstName" className="text-xl font-semibold">
    //       First Name
    //     </label>
    //     <input
    //       type="text"
    //       className="border-1 rounded-lg border border-black py-2 px-2"
    //       onChange={(e) => setFirstName(e.target.value)}
    //     />
    //     <label htmlFor="lastName" className="text-xl font-semibold">
    //       Last Name
    //     </label>
    //     <input
    //       type="text"
    //       className="border-1 rounded-lg border border-black py-2 px-2"
    //       onChange={(e) => setLastName(e.target.value)}
    //     />
    //     <label htmlFor="password" className="text-xl font-semibold">
    //       Password
    //     </label>
    //     <input
    //       type="text"
    //       className="border-1 rounded-lg border border-black py-2 px-2"
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <label htmlFor="verifyPassword" className="text-xl font-semibold">
    //       Verify Password
    //     </label>
    //     <input
    //       type="text"
    //       className="border-1 rounded-lg border border-black py-2 px-2"
    //       onChange={(e) => setVerifyPassword(e.target.value)}
    //     />
    //     <button
    //       type="submit"
    //       className="border-1 m-auto mt-10 w-1/3 rounded-lg border border-black py-2 px-4 text-sm"
    //     >
    //       Register
    //     </button>
    //   </form>
    // </div>
    <div>
      <h1>Register</h1>
    </div>
  );
}
