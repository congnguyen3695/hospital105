import { Quote } from "lucide-react";
import directorImg from "@/assets/director.jpg";

export function About() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl -z-10" />
          <img
            src={directorImg}
            alt="Đại tá Bác sỹ CKII Nguyễn Văn Chinh"
            width={800}
            height={1024}
            loading="lazy"
            className="rounded-2xl shadow-card w-full object-cover aspect-[4/5]"
          />
          <div className="absolute -bottom-5 left-5 right-5 md:left-10 md:right-auto bg-background rounded-xl shadow-card p-4 md:p-5 ring-1 ring-border">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Giám đốc Bệnh viện</div>
            <div className="font-bold text-primary-dark mt-0.5">Đại tá BSCKII Nguyễn Văn Chinh</div>
            <div className="text-xs text-muted-foreground">Bác sĩ chuyên khoa Nội</div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Về chúng tôi</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary-dark">
            Đôi nét về Bệnh viện Quân y 105
          </h2>
          <div className="mt-3 inline-flex items-center gap-2 text-primary">
            <Quote className="h-5 w-5" />
            <span className="italic font-medium">Giá trị cốt lõi: "Niềm tin của người bệnh"</span>
          </div>

          <p className="mt-5 text-muted-foreground leading-relaxed">
            Bệnh viện Quân y 105 là địa chỉ uy tín về khám chữa bệnh, với đội ngũ chuyên gia – bác sĩ
            hàng đầu, trang thiết bị hiện đại, cùng các phác đồ điều trị hiệu quả, khoa học —
            mang đến dịch vụ khám, điều trị và chăm sóc sức khỏe cao cấp, toàn diện với chi phí hợp lý.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Bệnh viện luôn đi đầu trong áp dụng các kỹ thuật tiên tiến, hoàn thành xuất sắc nhiệm vụ
            bảo vệ – chăm sóc sức khỏe cho bộ đội và nhân dân, đồng thời hỗ trợ các nước bạn Lào, Campuchia.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
            {[
              { n: "70+", l: "Năm xây dựng" },
              { n: "500+", l: "Y bác sĩ" },
              { n: "30+", l: "Khoa chuyên môn" },
            ].map((s) => (
              <div key={s.l} className="text-center p-4 rounded-xl bg-secondary">
                <div className="text-2xl md:text-3xl font-bold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
