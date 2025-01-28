import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-2xl rounded-bl-lg rounded-br-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">Boostrip</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/admin" className="hover:underline">
                Admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
