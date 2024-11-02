import React from "react";
import Link from "next/link";

const Header = () => {
  const navigationItems = [
    { page: "Sales", path: "/receipt/sales-and-repair" },
    { page: "Payment and Repair", path: "/receipt/payment" },
  ];

  return (
    <ul>
      {navigationItems.map((item) => (
        <li key={item.page}>
          <Link href={item.path}>{item.page}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;
