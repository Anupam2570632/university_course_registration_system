import Link from "next/link";

const NavBar = () => {
    const links =<>
    <li><Link href='/'>Home</Link></li>
    <li><Link href='/course'>Course</Link></li>
    <li><Link href='/login'>Login</Link></li>
    <li><Link href='/about'>About</Link></li>
    </>
    return (
        <div  className="flex items-center justify-between bg-black text-white py-4 px-16">
            <h1>Title</h1>
            <ul className="flex items-center gap-6">
                {links}
            </ul>
        </div>
    );
};

export default NavBar;