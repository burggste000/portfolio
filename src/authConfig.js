const redirect =
	process.env.NODE_ENV !== "production"
		? "http://localhost:3000/portfolio"
		: "https://burggste000.github.io/portfolio";

export const msalConfig = {
	auth: {
		clientId: "9d2af0e5-ef8d-4586-a7be-927b7f9b5182",
		authority: "https://login.microsoftonline.com/common", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
		redirectUri: redirect,
	},
	cache: {
		cacheLocation: "sessionStorage", // This configures where your cache will be stored
		storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
	},
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
	scopes: ["User.Read", "Tasks.ReadWrite"],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
	graphMeUserEndpoint: "https://graph.microsoft.com/v1.0/me",
	graphMePhotoEndpoint:
		"https://graph.microsoft.com/v1.0/me/photos/48x48/$value",
	graphMeListsEndpoint: "https://graph.microsoft.com/v1.0/me/todo/lists",
	graphMeCreateListEndpoint: "https://graph.microsoft.com/v1.0/me/todo/lists",
	graphMeListTasksEndpoint:
		"https://graph.microsoft.com/v1.0/me/todo/lists/AQMkADAwATdiZmYAZC04MjFkLTI4OAA1LTAwAi0wMAoALgAAA_IJgNVBHrVJiNZpiwJkUGwBAPXTwCAk02VAkfFU3LpCzLUABTdRA9QAAAA=/tasks",
	graphMeCreateTaskEndpoint: "https://graph.microsoft.com/v1.0/me/todo/lists/",
	graphMeCompleteTaskEndpoint:
		"https://graph.microsoft.com/v1.0/me/todo/lists/",
	graphMeIncompleteTaskEndpoint:
		"https://graph.microsoft.com/v1.0/me/todo/lists/",
	graphMeDeleteListEndpoint: "https://graph.microsoft.com/v1.0/me/todo/lists/",
};
