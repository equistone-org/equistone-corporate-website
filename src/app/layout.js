import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body className={`${jakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}