import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],weight:["400","500","600","700"]
});
// const ovo = Ovo({
//   subsets: ["latin"],weight:["400"]
// });



export const metadata = {
  title: "Portfolio",
  description: "All about Dipak Bera",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">
      <body className={`${outfit.className}  antialiased dark:bg-[#171717] dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
