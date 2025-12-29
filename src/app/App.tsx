import { Outlet } from "react-router";

import { Header } from "@/widgets/header";

import { ThemeProvider } from "./providers";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Header title="My Application" />
      <main className="mt-12 flex min-h-screen flex-col items-center justify-baseline p-4">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
