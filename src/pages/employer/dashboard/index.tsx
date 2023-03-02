import { FormEvent, useState } from "react";
//Components//
import Navbar from "~/components/Navbar";
//TRPC//
import { api } from "~/utils/api";

export default function Dashboard() {
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { mutate: formMutation } = api.employer.createJobPost.useMutation({
    onSuccess() {
      console.log("Job Added");
      setCompany("");
      setTitle("");
      setDescription("");
    },
    onError(err) {
      console.log(err.message);
    },
  });

  const handleFormData = (e: FormEvent) => {
    e.preventDefault();
    formMutation({
      company: company,
      title: title,
      description: description,
    });
  };

  return (
    <>
      <Navbar
        type={"employer"}
        signInInPath={"/employer/dashboard"}
        signOutPath={"/employer"}
      />
      <div className="mt-10">
        <h1 className="text-center text-6xl">Post a job</h1>
        <div>
          <form
            onSubmit={handleFormData}
            className="m-auto flex w-1/2 flex-col gap-1"
          >
            <label htmlFor="company" className="font-semibold">
              Company
            </label>
            <input
              type="text"
              className="border-1 rounded-lg border border-black px-2 py-2"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />

            <label htmlFor="title" className="font-semibold">
              Job Title
            </label>
            <input
              type="text"
              className="border-1 rounded-lg border border-black px-2 py-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea
              name="description"
              rows={5}
              className="border-1 border border-black px-2 py-2"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              type="submit"
              className="border-1 m-auto mt-10 w-1/2 rounded-lg border border-black py-2 px-4 text-sm"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
