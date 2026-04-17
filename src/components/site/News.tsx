import { Calendar, ArrowRight } from "lucide-react";

const NEWS = [
  {
    tag: "Cấp cứu",
    title: "Cấp cứu thành công bệnh nhân ngừng tuần hoàn do sốc mất máu từ ổ loét lớn ở hành tá tràng",
    desc: "Một trường hợp xuất huyết tiêu hóa mức độ nặng đã được xử trí kịp thời nhờ sự phối hợp hiệu quả giữa các chuyên khoa.",
    date: "12/03/2025",
  },
  {
    tag: "Hoạt động",
    title: "Bệnh viện Quân y 105 tham dự Hội nghị An sinh Xã hội — trao tặng thẻ BHYT, sổ BHXH",
    desc: "Chung tay lan tỏa “Tết ấm” cho người có hoàn cảnh khó khăn trên địa bàn.",
    date: "28/01/2025",
  },
  {
    tag: "Y học",
    title: "Kháng sinh dự phòng trong phẫu thuật — Phòng ngừa nhiễm trùng vết mổ (SSI)",
    desc: "Cập nhật phác đồ và khuyến cáo mới nhất từ các chuyên gia của Bệnh viện.",
    date: "05/12/2024",
  },
];

export function News() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Tin tức hoạt động</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary-dark">Tin mới nhất</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:text-accent inline-flex items-center gap-1">
            Tất cả tin tức <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {NEWS.map((n, i) => (
            <article key={i} className="group rounded-2xl overflow-hidden bg-card ring-1 ring-border hover:shadow-card hover:-translate-y-1 transition-all">
              <div className="aspect-[16/10] relative overflow-hidden" style={{ background: "var(--gradient-primary)" }}>
                <div className="absolute inset-0 flex items-center justify-center text-primary-foreground/30 text-7xl font-bold">
                  105
                </div>
                <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-bold uppercase px-3 py-1 rounded-full">
                  {n.tag}
                </span>
              </div>
              <div className="p-5">
                <div className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" /> {n.date}
                </div>
                <h3 className="mt-2 font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{n.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent">
                  Xem chi tiết <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
