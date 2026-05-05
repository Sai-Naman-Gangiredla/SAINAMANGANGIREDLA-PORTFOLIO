import "./globals.css";
import Navbar from "../sections/Navbar";
import CursorGlow from "../components/CursorGlow";
import PageTransition from "../components/PageTransition";

export const metadata = {
  title: "Sai Naman Portfolio",
  description: "Portfolio of Sai Naman - AI + Systems Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CursorGlow />
        <Navbar />

        <main className="px-6 md:px-12">
          <div className="max-w-7xl mx-auto w-full">
            <PageTransition>{children}</PageTransition>
          </div>
        </main>
      </body>
    </html>
  );
}
