import FooterSection from "@/src/components/Shared/Footer";
import { Navbar } from "@/src/components/Shared/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <FooterSection />
    </>
  );
}
