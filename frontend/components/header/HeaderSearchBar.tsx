import { Box, Group, Input, Stack } from "@mantine/core";

export default function HeaderSearchBar() {
  return (
    <Stack gap={0}>
      <Group gap={0}>
        <Box h={9} w="96vw" bg="primary.3" />
        <Box h={9} w="1vw" bg="transparent" />
        <Box h={9} w="3vw" bg="primary.2" />
      </Group>
      <Input
        placeholder="Search for movies... Some are a treat 🍫 while some are ishit 💩"
        radius="md"
        px="4vw"
        py={27}
      />
    </Stack>
  );
}
