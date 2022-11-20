import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-gray-300 h-14 px-5 flex items-center justify-between">
      <Link href="/">
        <div className="font-bold text-xl">Grow Take Home</div>
      </Link>
      <Link href="/pinned">
        <div className="font-bold">Pinned</div>
      </Link>
    </div>
  );
};
export default Navbar;
