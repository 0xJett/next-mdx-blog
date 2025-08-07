import { ReactNode } from "react";
import PageContainer from "../page-container";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex-1 py-2 md:py-6 overflow-auto no-scrollbar mx-auto px-4 md:max-w-6xl md:px-16 w-screen">
      <PageContainer>{children}</PageContainer>
    </main>
  );
}
