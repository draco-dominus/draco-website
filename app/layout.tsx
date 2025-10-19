export const metadata = {
  title: "Draco Dominus",
  description: "Portfolio website for Draco Dominus",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 font-sans">
        {children}
      </body>
    </html>
  );
}