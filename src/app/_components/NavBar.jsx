import Link from "next/link";
import { getCurrentUser } from "../action";
import UserAvatar from "./UseAvatar";

const NavBar = async () => {
  const user = await getCurrentUser();

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/course">Course</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </>
  );
  return (
    <div className="flex items-center justify-between bg-black text-white py-4 px-16">
      <h1>Title</h1>
      <ul className="flex items-center gap-6">{links}</ul>

      {user ? <UserAvatar user={user} /> : <Link href="/login">Login</Link>}
    </div>
  );
};

export default NavBar;
