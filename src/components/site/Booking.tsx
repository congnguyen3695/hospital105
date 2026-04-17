import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarCheck, PhoneCall } from "lucide-react";
import doctorsImg from "@/assets/doctors-team.jpg";
import { toast } from "sonner";

export function Booking() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="relative rounded-2xl overflow-hidden shadow-card min-h-[380px]">
          <img src={doctorsImg} alt="Đội ngũ bác sĩ" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-primary)", opacity: 0.85 }} />
          <div className="relative p-8 md:p-10 h-full flex flex-col justify-between text-primary-foreground">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold">Đăng ký khám bệnh</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold">Tại Bệnh viện Quân y 105</h2>
              <p className="mt-4 text-white/85">
                Địa chỉ uy tín hàng đầu về khám chữa bệnh, với đội ngũ chuyên gia – bác sĩ
                giàu kinh nghiệm cùng trang thiết bị hiện đại, chi phí hợp lý.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white/15 flex items-center justify-center">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs text-white/70">Hotline 24/7</div>
                  <div className="text-lg font-bold">0243.930.414</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl bg-card ring-1 ring-border shadow-card p-6 md:p-8">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-dark">Đặt lịch khám nhanh</h3>
              <p className="text-sm text-muted-foreground">Để được đăng ký nhanh, vui lòng điền thông tin</p>
            </div>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Họ và tên *</Label>
              <Input id="name" required placeholder="Nguyễn Văn A" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Số điện thoại *</Label>
              <Input id="phone" type="tel" required placeholder="0987 xxx xxx" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="dept">Chuyên khoa</Label>
              <Select>
                <SelectTrigger id="dept" className="mt-1.5"><SelectValue placeholder="Chọn chuyên khoa" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="noi">Khối Nội khoa</SelectItem>
                  <SelectItem value="ngoai">Khối Ngoại khoa</SelectItem>
                  <SelectItem value="san">Phụ sản – Nhi</SelectItem>
                  <SelectItem value="rhm">Răng – Hàm – Mặt</SelectItem>
                  <SelectItem value="khac">Khoa khác</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="date">Ngày khám</Label>
              <Input id="date" type="date" className="mt-1.5" />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="note">Triệu chứng / ghi chú</Label>
              <Textarea id="note" rows={3} placeholder="Mô tả ngắn gọn..." className="mt-1.5" />
            </div>
          </div>

          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            {loading ? "Đang gửi..." : "Đăng ký ngay"}
          </Button>
        </form>
      </div>
    </section>
  );
}
