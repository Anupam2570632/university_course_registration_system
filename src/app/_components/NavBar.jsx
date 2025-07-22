import Link from "next/link";
import { getCurrentUser } from "../action";
import UserAvatar from "./UseAvatar";
import Image from "next/image";
import logo from "../../../public/logo.png"

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
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 flex items-center justify-between gap-8">
        <Link href="/" className="mr-10 md:mr-20">
          <Image
            src={logo}
            alt="Pixxel Logo"
            className="min-w-24 object-cover"
            width={96}
            height={24}
          />
        </Link>
        <ul className="flex items-center gap-6 mr-20">{links}</ul>

        {user ? <UserAvatar user={user} /> : <Link href="/login">Login</Link>}
      </div>
    </div>
  );
};

export default NavBar;
