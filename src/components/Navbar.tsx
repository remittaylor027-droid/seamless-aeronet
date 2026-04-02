"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between font-sans">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 z-50" onClick={() => setIsOpen(false)}>
          <Image src="/logo.png?v=2" alt="Seamless Aeronet Logo" width={60} height={60} className="rounded-md object-contain" unoptimized />
          <span className="font-bold text-xl tracking-tight text-neutral-950 mt-1">Seamless Aeronet.</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 text-sm font-medium text-neutral-600">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-indigo-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden text-neutral-600 hover:text-indigo-600 z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-xl transition-all duration-300 ease-in-out flex flex-col items-center justify-center z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-neutral-600 hover:text-indigo-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
