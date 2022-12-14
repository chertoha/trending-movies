import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/movies">Movies</Link>
    </div>
  );
};

export default Navbar;
