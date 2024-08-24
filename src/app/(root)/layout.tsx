import { Inter } from "next/font/google";
import "../globals.css";
import {
  ClerkProvider
} from "@clerk/nextjs";
import Header from "@/components/common/Header"
import LeftSideBar from "@/components/common/LeftSideBar"
import RightSideBar from "@/components/common/RightSideBar"
import Footer from "@/components/common/Footer"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads Clone",
  description: "A Threads clone application build with Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider afterSignOutUrl={"/sign-in"}>
          <Header />
          <main className="flex flex-row">
            <LeftSideBar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSideBar />
          </main>
          <Footer/>
        </ClerkProvider>
      </body>
    </html>
  );
}

