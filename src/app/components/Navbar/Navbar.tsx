"use client";
import React from "react";
import styles from "@/app/components/Navbar/navbar.module.css";
import { IconGauge, IconAdjustments } from "@tabler/icons-react";
import { Box, NavLink } from "@mantine/core";

const links = [
  { icon: IconGauge, link: "/", label: "Home" },
  { icon: IconAdjustments, link: "/PackagesAndTours", label: "Products" },
];

export default function Navbar() {
  const items = links.map((link, index) => <NavLink href={link.link} key={index} label={link.label} leftSection={<link.icon stroke={1.5} size="1rem" />} />);
  return (
    <nav>
      <Box bg="var(--mantine-color-body)">{items}</Box>
    </nav>
  );
}
