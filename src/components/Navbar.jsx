import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">

          <img
            src="/images/logo/logo.png"
            alt="Flex Global Salmon Logo"
            className="h-14 w-auto"
          />

          <div>
            <h1 className="text-xl font-bold text-blue-900">
              Flex Global
            </h1>

            <p className="text-sm text-gray-600">
              Premium Salmon Exporters
            </p>
          </div>

        </Link>

        {/* Navigation */}

        <nav className="flex gap-8 font-medium">

          <Link
            to="/"
            className="hover:text-blue-700 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-700 transition"
          >
            About
          </Link>

          <Link
            to="/products"
            className="hover:text-blue-700 transition"
          >
            Products
          </Link>

          <Link
            to="/contact"
            className="hover:text-blue-700 transition"
          >
            Contact
          </Link>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;