import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col items-center h-20 top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <ul className="hidden md:flex gap-x-6">
              <li>
                <Link href="/" className="transition">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="transition">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition">
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;