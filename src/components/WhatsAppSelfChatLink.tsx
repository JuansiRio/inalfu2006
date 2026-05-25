"use client";

const STORAGE_KEY = "inalfu-wa-self-phone";

type WhatsAppSelfChatLinkProps = {
  className?: string;
  children: React.ReactNode;
  prefill?: string;
};

function buildSelfChatUrl(phone: string, prefill?: string) {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;
  const base = `https://wa.me/${digits}`;
  if (!prefill?.trim()) return base;
  return `${base}?text=${encodeURIComponent(prefill.trim())}`;
}

export function WhatsAppSelfChatLink({
  className,
  children,
  prefill,
}: WhatsAppSelfChatLinkProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    let phone =
      typeof window !== "undefined"
        ? sessionStorage.getItem(STORAGE_KEY) ?? ""
        : "";

    if (!phone) {
      phone =
        window.prompt(
          "Para contacto confidencial: ingresa tu WhatsApp con código de país (ej. 573001234567). Se abrirá tu chat contigo mismo.",
          ""
        ) ?? "";
      phone = phone.replace(/\D/g, "");
      if (!phone) return;
      sessionStorage.setItem(STORAGE_KEY, phone);
    }

    const url = buildSelfChatUrl(phone, prefill);
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <a
      href="https://wa.me/"
      onClick={handleClick}
      className={className}
      title="Abre WhatsApp en un chat contigo mismo (mismo número)"
    >
      {children}
    </a>
  );
}
