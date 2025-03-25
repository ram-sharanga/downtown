import { Text, Stack } from "@mantine/core";
import MovieGrid from "@/components/moviePage/MovieGrid";

export default function MoviePage() {
  return (
    <Stack gap={9} px="4vw">
      <Text c="primary.3" fz={24} fw={600} pt={18}>
        Explore Movies
      </Text>
      <MovieGrid />
    </Stack>
  );
}
