import { Avatar, Group, Stack, Text } from "@mantine/core";
import HeaderModalButtons from "@/components/header/HeaderModalButtons";

export default function HeaderBody() {
  return (
    <Group align="center" justify="space-between" px="4vw">
      <Text
        c="primary.1"
        fz={{ base: 30, xs: 36, sm: 42, md: 48, lg: 72, xl: 96 }}
        fw={300}
        tt="lowercase"
      >
        downtown
      </Text>
      <HeaderModalButtons />
      {false && <Avatar radius="xl" />}
    </Group>
  );
}
