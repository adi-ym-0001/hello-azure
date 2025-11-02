import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Sidebar } from "@/features/randing/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Label>Hello "/home"!</Label>
			<Button>Click Me</Button>
			<Sidebar />
		</div>
	);
}
