import { Box, Text } from "@mantine/core";

export default function FooterMain() {
  return (
    <footer>
      <Box p={18} mt={36} bg="primary.0">
        <Text ta="center" c="dimmed">
          Copyright 2025 &copy; Downtown Open Network Technologies
        </Text>
      </Box>
    </footer>
  );
}
