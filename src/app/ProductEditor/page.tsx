"use client";

import { useState } from "react";
import { Package } from "../models/Package";
import { Country } from "../models/Country";
import { Box, Title, Text, TagsInput, MultiSelect, Textarea, NumberInput, Group, Button, Input, Checkbox, Stack, Image, Card, ActionIcon, rem, MantineProvider } from "@mantine/core";
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { DateInput } from "@mantine/dates";
import { IconPhoto, IconUpload, IconX, IconCheck } from "@tabler/icons-react";
import "@mantine/dropzone/styles.css";

import { notifications } from "@mantine/notifications";

interface ProductEditorProps {
  travelPackage: Package;
  country: Country;
  handleSave: () => void;
}

function ProductEditor() {
  const [value, setValue] = useState<Date | null>(null);
  //for Date flexible
  const [flexible, setFlexible] = useState<boolean>(true);
  const handleFlexible = () => {
    setFlexible(!flexible);
  };
  //for Price
  const [discount, setDiscount] = useState<boolean>(false);
  const handleDiscount = () => {
    setDiscount(!discount);
  };
  //for save button
  const handleSave = () => {
    notifications.show({
      title: "Success",
      message: "Your changes have been saved!",
      color: "green",
      autoClose: false,
    });
  };

  return (
    <>
      <Box mb="md">
        <Title mb="sm" order={2}>
          Thumbnail
        </Title>
        <Dropzone w={{ base: "auto", md: 500 }} p={10} onDrop={(files) => console.log("accepted files", files)} onReject={(files) => console.log("rejected files", files)} maxSize={5 * 1024 ** 2} accept={IMAGE_MIME_TYPE}>
          <Group gap="xl">
            <Dropzone.Accept>
              <IconUpload style={{ color: "var(--mantine-color-blue-6)" }} stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX style={{ color: "var(--mantine-color-red-6)" }} stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto style={{ color: "var(--mantine-color-dimmed)" }} stroke={1.5} />
            </Dropzone.Idle>
            <div>
              <Text size="xl" inline>
                Drag images here or click to select files
              </Text>
              <Text size="sm" c="dimmed" inline mt={7}>
                Attach as many files as you like, each file should not exceed 5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
        <Group mt="xs" gap="xs">
          <Card>
            <ActionIcon
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "white",
              }}
            >
              <IconX />
            </ActionIcon>
            <Image radius="md" h={100} w={200} fallbackSrc="https://placehold.co/600x400?text=Placeholder" />
          </Card>
        </Group>
      </Box>
      <Box mb="md">
        <Title mb="sm" order={2}>
          Description
        </Title>
        <Stack w={{ base: "auto", md: 500 }}>
          <Textarea placeholder="Short Description"></Textarea>
          <Textarea placeholder="Long Description"></Textarea>
        </Stack>
      </Box>
      <Box mb="md">
        <Title mb="sm" order={2}>
          Number of Days
        </Title>
        <NumberInput w={{ base: "auto", md: 500 }} size="xs" placeholder="Number of days"></NumberInput>
      </Box>
      <Box mb="md">
        <Title mb="sm" order={2}>
          Dates
        </Title>
        <Stack w={{ base: "auto", md: 500 }}>
          <DateInput value={value} clearable label="Date input" placeholder="Date input" />
          <Checkbox defaultChecked label="Flexible" onClick={handleFlexible} />
        </Stack>
      </Box>
      <Box mb="md">
        <Title mb="sm" order={2}>
          Price
        </Title>
        <Stack w={{ base: "auto", md: 500 }}>
          <Input placeholder="Price" />
          <Checkbox label="Enable Discount Price" onClick={handleDiscount} />
          <Input placeholder="Discount Price" disabled={!discount} />
        </Stack>
      </Box>
      <Box mb="md" w={{ base: "auto", md: 500 }}>
        <Title mb="sm" order={2}>
          Inclusions
        </Title>
        <MultiSelect label="Your favorite libraries" placeholder="Pick value" data={["Flights", "Meals", "Accommodation", "Tours"]} defaultValue={["Flights"]} clearable />
      </Box>
      <Box mb="md" w={{ base: "auto", md: 500 }}>
        <Title mb="sm" order={2}>
          Tags
        </Title>
        <TagsInput></TagsInput>
      </Box>
      <Box mt="xl">
        <Button onClick={handleSave}>Save</Button>
      </Box>
    </>
  );
}

export default ProductEditor;
