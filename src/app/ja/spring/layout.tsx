import Footer from "@/components/spring/SpringFooter";
import Header from "@/components/spring/SpringHeader";
import React from "react";

export default function SpringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <div className="container mx-auto">
        <Header />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow container mx-auto">
        <main className="flex-grow p-4">{children}</main>
      </div>

      {/* Footer */}
      <div className="container mx-auto">
        <Footer />
      </div>
    </div>
  );
}
