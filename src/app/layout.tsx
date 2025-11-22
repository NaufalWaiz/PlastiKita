import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});



export const metadata: Metadata = {
  title: "PlastiKita | Gerakan plastik bertanggung jawab",
  description:
    "Platform edukasi plastik, pemetaan data, dan laboratorium material berbasis teknologi 3D untuk ekonomi sirkular Indonesia.",
  metadataBase: new URL("https://plastikita.example"),
  openGraph: {
    title: "PlastiKita",
    description:
      "Kolaborasi edukasi plastik, pemetaan sungai, dan eksperimen material dengan dukungan visual 3D.",
    images: [
      "https://images.unsplash.com/photo-1600585153020-9fffe12d7f58?auto=format&fit=crop&w=1200&q=80",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-white antialiased`}>
        <div className="w-full bg-white font-medium text-[21px] gap-14 text-black py-5 flex flex-row justify-end px-32 font-poppins">
          <Link href={'#'}>Beranda</Link>
          <Link href={'#'}>Tentang</Link>
          <Link href={'#'}>Artikel</Link>
          <Link href={'#'}>Quiz</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
