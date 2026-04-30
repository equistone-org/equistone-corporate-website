import { Sora } from "next/font/google";
import "./globals.css";

// const workSans = Work_Sans({
//   variable: "--font-work-sans",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"], // optional
// });

const workSans = Sora({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional
});

export const metadata = {
  title: "Equistone",
  description: "Equistone Sdn Bhd",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
