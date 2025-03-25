"use client";
import { useParams } from "next/navigation";

export default function MoviePage() {
  const params = useParams();
  const id = params.id; // Get dynamic ID from URL

  return <div>Movie ID: {id}</div>;
}
