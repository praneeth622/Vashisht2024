import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vashisht",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="inner_retangle_main">


        <ul class="circles">
                <li></li>
                <li></li> 
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
        </ul>

       <div class="wave"></div>
       <div class="wave"></div>
       <div class="wave"></div>

          {children}
        </div>
      </body>
    </html>
  );
}
