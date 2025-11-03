import { Button } from "@/components/ui/button";
import { useMsal } from "@azure/msal-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
	component: RouteComponent,
});

function RouteComponent() {
	const { instance } = useMsal();

	const handleLogin = () => {
			try {
					instance.loginRedirect();
			} catch (e) {
					console.error(e);
			}
	};

	return (
		<div>
			<h1>ログインページ</h1>
			<Button onClick={handleLogin}>ログイン</Button>
		</div>
	);
}
