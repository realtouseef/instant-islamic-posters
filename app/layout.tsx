import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/organisms";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import '@ant-design/v5-patch-for-react-19';

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Instant Islamic Posters",
  description: "Generated islamic posters instantly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable} antialiased overflow-hidden`}
      >
        <AntdRegistry>
        <div className="flex items-start">
        <Sidebar />
          <main>{children}</main>
        </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
