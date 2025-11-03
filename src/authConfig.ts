const isLocalhost = window.location.hostname === "localhost";

export const msalConfig = {
	auth: {
		clientId: "dd30ae30-803d-4056-b86b-ebf201a44817",
		authority:
			"https://login.microsoftonline.com/9996a88c-48f7-4409-914f-c0d391231b21",
		redirectUri: isLocalhost
      ? "http://localhost:3000/home"
      : "https://hello-azure-frontend-dev-cadzf9hcb8eeaqat.japanwest-01.azurewebsites.net/home",
	},
};
