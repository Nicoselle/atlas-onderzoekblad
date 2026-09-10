import { createFileRoute, redirect } from "@tanstack/react-router";
import { resolveWorldPlace } from "@/lib/atlas/place";

export const Route = createFileRoute("/manden/$slug")({
  beforeLoad: ({ params }) => {
    const place = resolveWorldPlace(params.slug);
    if (!place) {
      throw redirect({ to: "/wereld" });
    }
    throw redirect({
      to: "/wereld/$slug",
      params: { slug: params.slug },
    });
  },
  component: () => null,
});
