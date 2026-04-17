import { FileText, ChevronRight } from "lucide-react";

const TENDERS = [
  "Mua sắm bàn ghế phục vụ huấn luyện đào tạo kỹ thuật phòng chụp CT Scanner",
  "Dịch vụ bảo dưỡng hệ thống buồng Oxy cao áp Bara-Med Select – Perry Bard (Mỹ)",
  "Mua sắm dụng cụ phục vụ công tác huấn luyện đội phẫu, nhiệm vụ SSCĐ",
  "Mua sắm doanh cụ phục vụ công tác đảm bảo trang thiết bị y tế",
  "Mua sắm dụng cụ pha chế thuốc, dịch truyền phục vụ huấn luyện, đào tạo",
  "Mua sắm trang thiết bị y tế, doanh cụ, dụng cụ y tế (9/2024)",
  "Mua dụng cụ y tế xây dựng phòng xét nghiệm đạt chuẩn ISO",
  "Mua sắm dụng cụ, vật tư y tế cho đội phẫu thuật cứu chữa cơ bản",
];

export function Tenders() {
  return (
    <section className="py-16 md:py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Yêu cầu báo giá</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary-dark">Mời thầu</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {TENDERS.map((t, i) => (
            <a
              key={i}
              href="#"
              className="group flex items-start gap-3 p-4 rounded-xl bg-background ring-1 ring-border hover:ring-primary hover:shadow-soft transition-all"
            >
              <div className="h-10 w-10 shrink-0 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-accent uppercase tracking-wider">Yêu cầu báo giá</div>
                <div className="mt-0.5 text-sm font-medium text-foreground group-hover:text-primary line-clamp-2">{t}</div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
