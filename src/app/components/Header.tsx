import React from "react";
import Link from "next/link";

const Header = () => {
  const navigationItems = [
    { page: "Sales", path: "/receipt/payment" },
    { page: "Payment and Repair", path: "/receipt/sales-and-repair" },
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
