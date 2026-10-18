import { createFileRoute } from "@tanstack/react-router";

import { Home } from "../components/home";
import { ProductLists } from "../components/ProductLists";
import { Language } from "../components/Language";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col items-center">
      <div className="max-w-300 w-full">
        <Home />
        <ProductLists />
        <Language />
      </div>
    </div>
  );
}
