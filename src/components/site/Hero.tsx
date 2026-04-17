import { Button } from "@/components/ui/button";
import { CalendarPlus, PhoneCall, ShieldCheck, Stethoscope, HeartPulse, Microscope } from "lucide-react";
import heroImg from "@/assets/hero-hospital.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bệnh viện Quân y 105"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)", opacity: 0.88 }} />
      </div>

      <div className="relative container mx-auto px-4 py-20 md:py-28 lg:py-36">
        <div className="max-w-3xl text-primary-foreground">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ring-1 ring-white/20">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            Tổng cục Hậu cần — Bộ Quốc phòng
          </span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Bệnh viện Quân y 105
            <span className="block text-gold mt-2 text-2xl md:text-3xl font-medium italic">
              "Niềm tin của người bệnh"
            </span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-white/85 max-w-2xl">
            Địa chỉ uy tín hàng đầu về khám chữa bệnh — đội ngũ chuyên gia giàu kinh nghiệm,
            trang thiết bị y tế hiện đại, phác đồ điều trị khoa học và chi phí hợp lý.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow font-semibold">
              <CalendarPlus className="h-5 w-5" /> Đặt lịch khám ngay
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur">
              <PhoneCall className="h-5 w-5" /> 0243.930.414
            </Button>
          </div>
        </div>
      </div>

      {/* Feature strip */}
      <div className="relative container mx-auto px-4 -mt-10 md:-mt-14 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 bg-background rounded-2xl shadow-card p-4 md:p-6 ring-1 ring-border">
          {[
            { icon: Stethoscope, t: "Bác sĩ chuyên gia", d: "Đội ngũ chuyên nghiệp" },
            { icon: CalendarPlus, t: "Đặt lịch nhanh", d: "Tư vấn online 24/7" },
            { icon: Microscope, t: "Thiết bị hiện đại", d: "Công nghệ y tế cao" },
            { icon: HeartPulse, t: "Chăm sóc tận tâm", d: "Từ trái tim — vì người bệnh" },
          ].map((f) => (
            <div key={f.t} className="flex items-center gap-3 p-2">
              <div className="h-12 w-12 rounded-xl bg-secondary text-primary flex items-center justify-center shrink-0">
                <f.icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold text-sm md:text-base text-foreground">{f.t}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{f.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
