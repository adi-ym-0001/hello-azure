import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { msalConfig } from "./authConfig";
import { routeTree } from "./routeTree.gen";
import "./styles/index.css";

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
  return msalInstance.handleRedirectPromise();
}).then((response) => {
  if (response) {
    console.log("Redirect login response:", response);
		router.navigate({ to: "/home" });
  }
}).catch((error) => {
  console.error("Redirect error:", error);
});

// Set up a Router instance
const router = createRouter({
	routeTree,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<MsalProvider instance={msalInstance}>
				<RouterProvider router={router} />
			</MsalProvider>
		</StrictMode>,
	);
}
