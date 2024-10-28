import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./styles/tailwind.css";

const container = document.getElementById("root");
const root = createRoot(container!);

// Step 1: Create a new QueryClient instance
const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    {/* Step 2: Wrap the app in QueryClientProvider and pass the queryClient instance */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
