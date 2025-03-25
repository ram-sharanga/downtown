import "@mantine/core/styles.css";
import { Metadata } from "next";
import FooterMain from "@/components/footer/FooterMain";
import styles from "@/app/global.module.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  createTheme,
} from "@mantine/core";

export const metadata: Metadata = {
  title: "My Ticketing App",
  description: "Book your tickets hassle-free with our platform",
};

const customTheme = createTheme({
  colors: {
    primary: [
      "#EEEEEE", // white background
      "#090909", // black text
      "#FF204E", // red
      "#002B5B", // blue
      "#FF204E10",
      "#2196f3",
      "#1e88e5",
      "#1976d2",
      "#1565c0",
      "#0d47a1",
    ],
  },
  primaryColor: "primary",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={styles.body}>
        <MantineProvider theme={customTheme}>
          {children}
          <FooterMain />
        </MantineProvider>
      </body>
    </html>
  );
}
