export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create any shared layout or styles here
  return (
    <div className="prose lg:prose-xl mx-auto">
      {children}
    </div>
  );
}
