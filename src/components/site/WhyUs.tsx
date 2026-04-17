import { Eye, HandHeart, Cpu, Workflow } from "lucide-react";
import equipImg from "@/assets/equipment.jpg";

const ITEMS = [
  {
    icon: Eye,
    title: "Tầm nhìn & Sứ mệnh",
    desc: "Cung cấp dịch vụ khám chữa bệnh chất lượng cao, hướng tới đơn vị y tế tốt nhất, được tin tưởng trên cả nước.",
  },
  {
    icon: HandHeart,
    title: "Quyền lợi của bệnh nhân",
    desc: "Được tôn trọng – thấu hiểu – cảm thông; tư vấn đầy đủ, báo phí rõ ràng và chủ động trong mọi quyết định.",
  },
  {
    icon: Cpu,
    title: "Thiết bị y tế hiện đại",
    desc: "Hệ thống trang thiết bị cao cấp, hàng đầu thế giới phục vụ chẩn đoán và điều trị chính xác.",
  },
  {
    icon: Workflow,
    title: "Quy trình chuyên nghiệp",
    desc: "Quy trình khám nhanh chóng, hiệu quả, tiết kiệm thời gian; ưu tiên giải quyết các trường hợp đặt hẹn trước.",
  },
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 -z-10">
        <img src={equipImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-primary)", opacity: 0.96 }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-gold uppercase tracking-wider">Lý do nên chọn chúng tôi</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white">
            Tận tâm vì sức khỏe người bệnh
          </h2>
          <p className="mt-4 text-white/85">
            Với danh mục khám và điều trị đa dạng, đội ngũ y bác sĩ luôn nỗ lực mang lại sức khỏe và
            sự an tâm tuyệt đối cho mỗi bệnh nhân.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((it) => (
            <div
              key={it.title}
              className="group p-6 rounded-2xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20 hover:bg-white transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="h-14 w-14 rounded-xl bg-gold/25 text-gold group-hover:bg-accent group-hover:text-accent-foreground flex items-center justify-center transition-colors">
                <it.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white group-hover:text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm text-white/80 group-hover:text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
