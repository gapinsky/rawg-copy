import { Link } from "react-router-dom";
interface Props {
  message?: string;
}
const ErrorPage = ({ message }: Props) => {
  return (
    <div className="w-full h-svh space-y-3 text-3xl flex flex-col justify-center items-center bg-neutral-50 dark:bg-neutral-900">
      <p>Something went wrong. 😞</p>
      <p>{message}</p>
      <Link
        to=""
        className="px-3 py-2 text-neutral-50  rounded-md bg-blue-500 hover:bg-blue-600 "
      >
        Take me back to homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
