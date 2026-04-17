import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo105 from "@/assets/logo-105.png";

const NAV = [
  { label: "Trang chủ", href: "/" },
  {
    label: "Giới thiệu",
    href: "#",
    children: ["Ban Giám đốc", "Khối cơ quan", "Lịch sử bệnh viện"],
  },
  {
    label: "Khoa & Phòng",
    href: "#",
    children: [
      "Khối Nội khoa",
      "Khối Ngoại khoa",
      "Khối Cận lâm sàng",
      "Khoa Cấp cứu",
    ],
  },
  { label: "Tin tức", href: "#" },
  {
    label: "Dành cho bệnh nhân",
    href: "#",
    children: ["Khám chữa bệnh", "Bảng giá dịch vụ", "Đăng ký khám", "Hỏi đáp sức khỏe"],
  },
  { label: "Nghiên cứu KH", href: "#" },
  { label: "Mời thầu", href: "#" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo105}
            alt="Logo Bệnh viện Quân y 105"
            width={48}
            height={48}
            className="h-12 w-12 object-contain shrink-0"
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Tổng cục Hậu cần</div>
            <div className="text-base md:text-lg font-bold text-primary-dark">
              Bệnh viện Quân y 105
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary inline-flex items-center gap-1 transition-colors"
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </a>
              {item.children && (
                <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all min-w-[230px]">
                  <div className="bg-background border border-border rounded-lg shadow-card py-2">
                    {item.children.map((c) => (
                      <a
                        key={c}
                        href="#"
                        className="block px-4 py-2 text-sm text-foreground hover:bg-secondary hover:text-primary"
                      >
                        {c}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-soft">
            <CalendarPlus className="h-4 w-4" /> Đặt lịch khám
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-3 flex flex-col">
            {NAV.map((i) => (
              <a key={i.label} href={i.href} className="py-2 text-sm font-medium border-b border-border last:border-0">
                {i.label}
              </a>
            ))}
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground mt-3">
              <CalendarPlus className="h-4 w-4" /> Đặt lịch khám
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
