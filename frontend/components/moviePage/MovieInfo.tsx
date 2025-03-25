import { Group, Rating, Stack, Text } from "@mantine/core";

export default function MovieInfo() {
  return (
    <Stack gap={0}>
      <Group
        bg="primary.4"
        p={6}
        justify="space-between"
        style={{ borderRadius: 9 }}
      >
        <Group gap={3}>
          <Rating color="primary.2" size="sm" count={1} value={1} readOnly />
          <Text c="primary.3" fz={15}>
            9.6/10
          </Text>
        </Group>
        <Text c="primary.3" fz={15}>
          96K votes
        </Text>
      </Group>
      <Stack gap={0} mt={3}>
        <Text c="primary.1" fw={600} fz={18}>
          '96
        </Text>
        <Text c="dimmed" fz={15}>
          Romance / Drama / Comedy
        </Text>
      </Stack>
    </Stack>
  );
}
