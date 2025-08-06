import TypographyLayout from "@/components/mdx/typography-layout";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TypographyLayout className="prose-li:list-disc">
      {children}
    </TypographyLayout>
  );
}
