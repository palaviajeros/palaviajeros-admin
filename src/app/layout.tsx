"use client";
import "@mantine/core/styles.css";
import { AppShell, AppShellHeader, AppShellMain, AppShellNavbar, ColorSchemeScript, MantineProvider } from "@mantine/core";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <AppShell
            header={{ height: 60 }}
            navbar={{
              width: { sm: 240 },
              breakpoint: "sm",
            }}
            padding="md"
          >
            <AppShellHeader p="sm">
              <Header />
            </AppShellHeader>
            <AppShellNavbar visibleFrom="sm" p="sm">
              <Navbar />
            </AppShellNavbar>
            <AppShellMain>{children}</AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
