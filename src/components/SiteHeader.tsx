"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const navItems = [
  { href: "#sobre-el-encuentro", label: "Sobre el encuentro" },
  { href: "#invitados", label: "Invitados" },
  { href: "#crush", label: "Crush" },
  { href: "#galeria", label: "Galería" },
  { href: "#evento", label: "Evento" },
  { href: "#anecdotas", label: "Anécdotas" },
  { href: "#emprendimientos", label: "Emprendimientos" },
  { href: "#whatsapp", label: "WhatsApp" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeMenu]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#sobre-el-encuentro"
          className="flex items-center gap-2 text-lg font-bold text-inalfu-700"
        >
          <span className="relative inline-flex h-9 w-9 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200/80">
            <Image
              src="/assets/images/inalfu.jpg"
              alt="Escudo INALFU"
              width={36}
              height={36}
              className="h-9 w-9 object-cover"
              priority
            />
          </span>
          The Last INALFU
        </a>

        <button
          type="button"
          className="inline-flex rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 md:hidden"
          aria-controls="nav-menu"
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Cerrar menu principal" : "Abrir menu principal"
          }
          onClick={() => setMenuOpen((o) => !o)}
        >
          Menu
        </button>

        <nav
          id="nav-menu"
          className={`absolute left-0 right-0 top-full border-b border-slate-200 bg-white px-4 py-4 md:static md:block md:border-none md:bg-transparent md:p-0 ${
            menuOpen ? "block" : "hidden md:block"
          }`}
          aria-label="Principal"
        >
          <ul className="flex flex-col gap-4 text-sm font-medium md:flex-row md:items-center md:gap-6">
            {navItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  className="nav-link hover:text-inalfu-700"
                  href={href}
                  onClick={() => {
                    if (typeof window !== "undefined" && window.innerWidth < 768)
                      closeMenu();
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
