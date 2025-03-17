import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/ui/header/Header";

export const metadata: Metadata = {
  title: "Flowers Apartments Marineo",
  description: "Flowers Apartments offre comfort, accoglienza e comodità grazie al suo ampio soggiorno, cucina attrezzata e camera da letto. Ti sentirai come a casa tua!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="flowers">
      <body className="text-base lg:text-lg
                      leading-relaxed sm:leading-relaxed md:leading-relaxed xl:leading-loose">
        <Header />
        <div className="mt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
