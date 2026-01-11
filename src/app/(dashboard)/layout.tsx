export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-3xl font-bold">Dashboard Nav</h1>
      {children}
      <h1 className="text-3xl font-bold">Dashboard Footer</h1>
    </>
  );
}
