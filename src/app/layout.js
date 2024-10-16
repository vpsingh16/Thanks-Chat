import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SessionWrapper from "./components/SessionWrapper";
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thanks Chat - Get your project funded",
  description: "A crowdfunding platform for getting your project funded",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] ">

        <SessionWrapper>
          <Navbar />
          <div className="text-white min-h-screen">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}