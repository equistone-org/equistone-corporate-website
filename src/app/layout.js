import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-global",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Equistone",
  description: "Equistone Sdn Bhd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jakartaSans.variable}>
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}