"use client";
import { useRouter } from "next/navigation";
import { Card, Image, Stack } from "@mantine/core";
import MovieInfo from "@/components/moviePage/MovieInfo";

export default function MovieCard({ id }: { id: number }) {
  const router = useRouter();
  
  const handleRedirect = () => {
    router.push(`/movie/${id}`);
  };
  
  return (
    <Stack
      gap={9}
      w={210}
      style={{ cursor: "pointer" }}
      onClick={handleRedirect}
    >
      <Card shadow="sm" radius="md" p={0}>
        <Image src="/96.avif" alt={`${id}`} />
      </Card>
      <MovieInfo />
    </Stack>
  );
}
