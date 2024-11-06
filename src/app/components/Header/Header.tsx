import React from "react";
import styles from "@/app/components/Header/header.module.css";
import { Box, Burger, Drawer, Flex, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";
import Navbar from "../Navbar/Navbar";

export default function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Flex justify="space-between" align="center">
        <Title order={3}>PalaViajeros Admin</Title>
        <Burger opened={opened} hiddenFrom="sm" onClick={toggle} aria-label="Toggle navigation" />
      </Flex>
      <Drawer
        hiddenFrom="sm"
        closeButtonProps={{
          icon: <IconX size={30} stroke={1.5} />,
        }}
        opened={opened}
        onClose={toggle}
        position="left"
        size="100%"
      >
        <Box onClick={close}>
          <Navbar />
        </Box>
      </Drawer>
    </>
  );
}
