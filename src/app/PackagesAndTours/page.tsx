"use client";
import React from "react";
import { Table, ScrollArea, Group, Anchor, ActionIcon, Box, Flex } from "@mantine/core";
import { IconTrash, IconEye, IconPencil } from "@tabler/icons-react";
import { countries } from "./countries";
import { Country } from "../models/Country";
import { Package } from "../models/Package";
import Link from "next/link";

function PackagesRow({ pkg, country }: { pkg: Package; country: Country }) {
  return (
    <Table.Tr key={`${country.countryCode}-${pkg.code}`}>
      <Table.Td>{country.countryName}</Table.Td>
      <Table.Td>{pkg.location}</Table.Td>
      <Table.Td>{pkg.name}</Table.Td>
      <Table.Td>{pkg.price}</Table.Td>
      <Table.Td>{pkg.salePrice ? pkg.salePrice : "No discount"}</Table.Td>
      <Table.Td>{pkg.isFlexible ? "Flexible" : "Not flexible"}</Table.Td>
      <Table.Td>{pkg.days}</Table.Td>
      <Table.Td>{country.available ? "Active" : "Inactive"}</Table.Td>
      <Table.Td>
        <Group gap="xs">
          <ActionIcon component={Link} href="/">
            <IconPencil stroke={1.5} />
          </ActionIcon>
          <ActionIcon component={Link} href="/">
            <IconEye stroke={1.5} />
          </ActionIcon>
          <ActionIcon component={Link} href="/">
            <IconTrash stroke={1.5} />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  );
}

export default function PackagesAndTours() {
  const rows = countries.flatMap((country) => country.packages.map((pkg) => <PackagesRow key={`${country.countryCode}-${pkg.code}`} pkg={pkg} country={country} />));

  const names = (
    <Table.Tr>
      <Table.Th>Country</Table.Th>
      <Table.Th>Location</Table.Th>
      <Table.Th>Title</Table.Th>
      <Table.Th>Price</Table.Th>
      <Table.Th>Sale Price</Table.Th>
      <Table.Th>Flexible Schedule</Table.Th>
      <Table.Th>Days</Table.Th>
      <Table.Th>Active</Table.Th>
      <Table.Th>Tools</Table.Th>
    </Table.Tr>
  );

  return (
    <>
      <h1>Packages and Tours</h1>
      <Flex justify="end" pb="md">
        <Link href="/producteditor">Add Package</Link>
      </Flex>
      <ScrollArea w="100%">
        <Table horizontalSpacing="lg" verticalSpacing="lg" withTableBorder>
          <Table.Thead>{names}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
