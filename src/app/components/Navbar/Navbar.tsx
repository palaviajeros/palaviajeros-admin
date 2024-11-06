"use client";
import React from "react";
import styles from "@/app/components/Navbar/navbar.module.css";
import Link from "next/link";
import { IconGauge, IconAdjustments } from "@tabler/icons-react";
import { Box } from "@mantine/core";

const links = [
  { icon: IconGauge, link: "/", label: "Home" },
  { icon: IconAdjustments, link: "/PackagesAndTours", label: "Packages and Tours" },
];

export default function Navbar() {
  const items = links.map((link) => (
    <Link style={{ textDecoration: "none", color: "grey", display: "flex", flexDirection: "row", gap: "10px" }} key={link.label} href={link.link}>
      {link.icon && <link.icon size={20} />}
      {link.label}
    </Link>
  ));
  return (
    <nav>
      <Box p="md" bg="var(--mantine-color-body)">
        {items}
      </Box>
    </nav>
  );
}
