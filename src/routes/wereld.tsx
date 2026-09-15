import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/wereld")({
  component: WereldLayout,
});

function WereldLayout() {
  return <Outlet />;
}
