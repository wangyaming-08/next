import { Comforter } from "next/font/google";
import "./globals.css";


const comforter = Comforter({
  subsets: ["latin"],
  weight: '400'

});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={comforter.className}>
        {children}
      </body>
    </html>
  );
}
