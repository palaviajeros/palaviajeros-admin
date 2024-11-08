"use client";
import React from "react";
import { Table, ScrollArea, Group } from "@mantine/core";
import { IconTrash, IconEye, IconPencil } from "@tabler/icons-react";
import Link from "next/link";
import { countries } from "./countries";

export default function PackagesAndTours() {
  const rows = countries.flatMap((country) =>
    country.packages.map((pkg) => (
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
          <Group>
            <Link style={{ textDecoration: "none", color: "grey" }} href="#">
              <IconPencil />
            </Link>
            <Link style={{ textDecoration: "none", color: "grey" }} href="#">
              <IconEye />
            </Link>
            <Link style={{ textDecoration: "none", color: "grey" }} href="#">
              <IconTrash />
            </Link>
          </Group>
        </Table.Td>
      </Table.Tr>
    ))
  );

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
      <ScrollArea w="100%">
        <Table horizontalSpacing="lg" verticalSpacing="lg" withTableBorder>
          <Table.Thead>{names}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </>
  );
}
