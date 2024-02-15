import { Provider } from "jotai";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700", "500"] });

export const metadata: Metadata = {
  title: "MintHouse Booking",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body className={roboto.className}>{children}</body>
      </Provider>
    </html>
  );
}
