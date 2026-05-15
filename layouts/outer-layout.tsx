"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function OuterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuthRoute = pathname === "/login" || pathname === "/signup";

  return (
    <div
      className={cn(
        "flex min-h-screen flex-col",
        isAuthRoute && "h-svh overflow-hidden [&>footer]:mt-0",
      )}
    >
      <Navbar />
      <main className={cn("flex-1", isAuthRoute && "min-h-0 overflow-hidden")}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
