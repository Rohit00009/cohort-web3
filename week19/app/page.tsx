import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col  h-screen w-screen text-lg">
      welcome!
      <br />
      <Link className="text-md border m-2 p-2" href="/signin">
        Sign in page
      </Link>
      <br />
      <Link className="text-md border m-2 p-2" href="/signup">
        Sign up page
      </Link>
      <br />
    </div>
  );
}
