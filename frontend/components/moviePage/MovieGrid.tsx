import { SimpleGrid, Stack } from "@mantine/core";
import MovieCard from "@/components/moviePage/MovieCard";
import { Fragment } from "react";

export default function MovieGrid() {
  return (
    <SimpleGrid cols={5}>
      {[...Array(5)].map((_, i) => (
        <Fragment key={i}>
          <MovieCard id={i} />
        </Fragment>
      ))}
    </SimpleGrid>
  );
}
