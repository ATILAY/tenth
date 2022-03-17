import React from "react";
import { Link } from "react-router-dom";

export default function NavbarContainer() {
  return (
    <Link to={"/"} className="w-full">
      <nav className="p-4 font-bold text-xl text-blue-400 hover:text-black">
        Go to Main Page
      </nav>
    </Link>
  );
}
