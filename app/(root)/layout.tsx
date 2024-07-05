"use client";

import { Header } from "@/app/(root)/_components/Header";
import { Footer } from "@/app/(root)/_components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const shouldHideHeaderFooter =
    pathname.includes("/create/start-fundraiser") &&
    pathname !== "/create/start-fundraiser/drafts";
  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <main className="flex-1">{children}</main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}
