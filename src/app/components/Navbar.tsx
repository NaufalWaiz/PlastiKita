'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
    { href: "/", label: "Beranda" },
    { href: "/tentang", label: "Tentang" },
    { href: "/artikel", label: "Artikel" },
    { href: "/quiz", label: "Quiz" },
];

export default function Navbar() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const mounted = true;
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-30 transition duration-500 ${
                scrolled
                    ? "border-b border-white/40 bg-white/90 shadow-[0_6px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
                    : "bg-white/80 backdrop-blur-sm"
            }`}
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
                <div className="flex items-center">
                    <Image
                        src="/img/logo.png"
                        alt="PlastiKita logo"
                        width={44}
                        height={44}
                        className="object-contain origin-center scale-[1.4] sm:scale-[1.8] lg:scale-[2]"
                        priority
                    />
                </div>
                <button
                    className="sm:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={isMobileOpen}
                    onClick={() => setIsMobileOpen((prev) => !prev)}
                >
                    <div className="flex flex-col gap-[6px]">
                        <span className="block h-[3px] w-7 rounded-full bg-[#88a825] transition duration-300" />
                        <span className="block h-[3px] w-7 rounded-full bg-[#88a825] transition duration-300" />
                        <span className="block h-[3px] w-7 rounded-full bg-[#88a825] transition duration-300" />
                    </div>
                </button>
                <nav className="hidden items-center gap-2 text-sm font-semibold text-[#2f4f12] sm:flex">
                    {links.map((link, idx) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="rounded-full px-4 py-2 transition hover:bg-[#e7f1d0] hover:text-[#2f4f12]"
                            style={{
                                transitionDelay: `${idx * 60}ms`,
                                transform: mounted ? "translateY(0)" : "translateY(-8px)",
                                opacity: mounted ? 1 : 0,
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/#laporan"
                        className="rounded-full bg-[#f6a500] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(246,165,0,0.35)] transition hover:translate-y-[-1px] hover:shadow-[0_16px_38px_rgba(246,165,0,0.4)]"
                    >
                        Laporkan
                    </Link>
                </nav>
            </div>
            <div
                className={`sm:hidden transition-all duration-400 ${
                    isMobileOpen ? "pointer-events-auto max-h-[400px] opacity-100" : "pointer-events-none max-h-0 opacity-0"
                }`}
            >
                <nav className="flex flex-col gap-4 border-t border-slate-200 px-6 pb-6 pt-4 text-base font-semibold text-[#2f4f12]">
                    {links.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMobileOpen(false)}
                            className="rounded-full px-4 py-2 transition hover:bg-[#e7f1d0] hover:text-[#2f4f12]"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/#laporan"
                        onClick={() => setIsMobileOpen(false)}
                        className="rounded-full bg-[#f6a500] px-4 py-2 text-center text-white shadow-[0_12px_30px_rgba(246,165,0,0.35)] transition hover:translate-y-[-1px] hover:shadow-[0_14px_34px_rgba(246,165,0,0.4)]"
                    >
                        Laporkan
                    </Link>
                </nav>
            </div>
        </header>
    );
}
