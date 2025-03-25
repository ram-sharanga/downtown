import { Stack } from "@mantine/core";
import HeaderBody from "@/components/header//HeaderBody";
import HeaderSearchBar from "@/components/header/HeaderSearchBar";

export default function HeaderMain() {
  return (
    <header>
      <Stack gap={9} bg="primary.0">
        <HeaderBody />
        <HeaderSearchBar />
      </Stack>
    </header>
  );
}
