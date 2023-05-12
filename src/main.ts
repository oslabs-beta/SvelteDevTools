import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});
const backgroundPageConnection = chrome.runtime.connect({
  name: "panel",
});

// report back with tabId to identify devtools location in chrome
backgroundPageConnection.postMessage({
  name: "init",
  tabId: chrome.devtools.inspectedWindow.tabId,
});

// background.js -> here

backgroundPageConnection.onMessage.addListener((message) => {
  console.log("main.ts: message received at its destination!", message);
});

export default app;
