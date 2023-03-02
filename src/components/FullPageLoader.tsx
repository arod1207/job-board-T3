import { CircleLoader } from "react-spinners";

export default function FullPageLoader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <CircleLoader color="black" />
    </div>
  );
}
