import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wereld")({
  component: WereldLayout,
});

function WereldLayout() {
  return <Outlet />;
}
