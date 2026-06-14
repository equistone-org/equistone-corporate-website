"use client";
import Sidebar from "@/components/Sidebar";

import { useState } from "react";

export default function ClientShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        theme="light"
      />

      <main className="min-h-screen">
        {children}
      </main>
    </>
  );
}