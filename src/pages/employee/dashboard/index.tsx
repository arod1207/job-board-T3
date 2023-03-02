import Moment from "react-moment";
//Components//
import Navbar from "~/components/Navbar";
//TRPC//
import { api } from "~/utils/api";

export default function Dashboard() {
  const { data, isLoading } = api.employee.getAllJobs.useQuery();

  console.log(data);

  return (
    <>
      <Navbar type={"employee"} signInInPath={"/employee/dashboard"} />
      <div className="mt-10">
        <h1 className="text-center text-6xl">Recent jobs added</h1>
        <div className="mt-10 flex justify-center">
          {data?.map((post) => (
            <div
              key={post.id}
              className="border-1 w-1/2 rounded-lg border border-black py-2 px-2 shadow-md"
            >
              <div className="flex max-h-96 flex-col gap-1 overflow-scroll ">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{post.title}</h3>
                  <h5 className="text-xs text-gray-400">
                    Added {""}
                    <Moment fromNow>{post.createdAt}</Moment>
                  </h5>
                </div>
                <h1 className="text-xl">{post.company}</h1>
                <p className="">{post.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
