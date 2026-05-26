import { useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Trang chủ" },
  { href: "#about", label: "Giới thiệu" },
  { href: "#skills", label: "Kỹ năng" },
  { href: "#contact", label: "Liên hệ" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-lg tracking-tight text-foreground">
          Portfolio<span className="text-primary">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggle} aria-label="Đổi giao diện">
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
