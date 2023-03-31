import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", gap: "2rem", padding: "1rem 0 2rem 0" }}>
      {["A", "B", "C", "D"].map((pageName) => (
        <Link key={pageName} href={`/${pageName}`}>{pageName}</Link>
      ))}
    </nav>
  );
};

export default Navbar;
