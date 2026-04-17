import { Heart, Brain, Bone, Baby, Eye, Stethoscope, Activity, Pill, Syringe, ShieldPlus } from "lucide-react";

const DEPTS = [
  { icon: Heart, name: "Nội Tim mạch", color: "text-rose-600" },
  { icon: Brain, name: "Thần kinh – Đột quỵ", color: "text-violet-600" },
  { icon: Bone, name: "Chấn thương chỉnh hình", color: "text-amber-600" },
  { icon: Baby, name: "Phụ sản – Nhi", color: "text-pink-600" },
  { icon: Eye, name: "Khoa Mắt", color: "text-sky-600" },
  { icon: Stethoscope, name: "Khoa Khám bệnh", color: "text-emerald-600" },
  { icon: Activity, name: "Hồi sức cấp cứu", color: "text-red-600" },
  { icon: Pill, name: "Y học cổ truyền", color: "text-orange-600" },
  { icon: Syringe, name: "Truyền nhiễm – Da liễu", color: "text-teal-600" },
  { icon: ShieldPlus, name: "Ung bướu", color: "text-indigo-600" },
];

export function Departments() {
  return (
    <section className="py-16 md:py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Chuyên khoa</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-primary-dark">Khoa & Phòng nổi bật</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:text-accent">Xem tất cả →</a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {DEPTS.map((d) => (
            <a
              key={d.name}
              href="#"
              className="group flex flex-col items-center text-center p-5 rounded-xl bg-background ring-1 ring-border hover:ring-primary hover:shadow-card transition-all hover:-translate-y-0.5"
            >
              <div className={`h-14 w-14 rounded-full bg-secondary flex items-center justify-center ${d.color} group-hover:scale-110 transition-transform`}>
                <d.icon className="h-7 w-7" />
              </div>
              <div className="mt-3 text-sm font-semibold text-foreground">{d.name}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
