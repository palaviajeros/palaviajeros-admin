"use client";

import { IconGauge, IconAdjustments } from "@tabler/icons-react";
import { Box, Flex } from "@mantine/core";
import Link from "next/link";

const links = [
  { icon: IconGauge, link: "/", label: "Home" },
  { icon: IconAdjustments, link: "/packagesandtours", label: "Products" },
];

export default function Navbar() {
  const items = links.map(({ icon: IconComponent, link, label }, index) => (
    <Flex align="center" gap="xs">
      <IconComponent stroke={1.5} size="1rem" />
      <Link href={link} key={index} style={{ textDecoration: "none", color: "black" }}>
        {label}
      </Link>
    </Flex>
  ));

  return (
    <nav>
      <Box>{items}</Box>
    </nav>
  );
}
