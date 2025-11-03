import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Sidebar } from "@/features/randing/components";
import { msalInstance } from "@/main";
import { useMsal } from "@azure/msal-react";
import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/home")({
	beforeLoad: () => {
        const accounts = msalInstance.getAllAccounts();
        if (accounts.length === 0) {
            throw redirect({ to: "/login" });
        }
    },
	component: RouteComponent,
});

function RouteComponent() {
	const { accounts } = useMsal();
	const account = accounts[0];

	const handleLogout = () => {
		msalInstance.logoutRedirect({ postLogoutRedirectUri: "http://localhost:3000/login" }); // または logoutPopup()
	};
	
	return (
		<div>
			<Label>Hello "/home"!</Label>
			<Label>こんにちは、{account?.username} さん！</Label>
			<Label>表示名：{account?.name} </Label>
			<Label>ローカルID：{account?.localAccountId} </Label>
			<Label>テナントID：{account?.tenantId} </Label>
			<Button onClick={handleLogout}>ログアウト</Button>
			<Sidebar />
		</div>
	);
}
