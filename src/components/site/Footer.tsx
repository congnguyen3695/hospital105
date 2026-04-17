import { MapPin, Phone, Mail, Clock, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-white/10 ring-1 ring-white/20 flex items-center justify-center font-bold">
              105
            </div>
            <div>
              <div className="text-xs uppercase text-white/60 tracking-wider">Tổng cục Hậu cần</div>
              <div className="font-bold">Bệnh viện Quân y 105</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-white/75">
            Niềm tin của người bệnh — chăm sóc sức khỏe toàn diện cho bộ đội và nhân dân.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Liên kết nhanh</h4>
          <ul className="space-y-2 text-sm text-white/80">
            {["Giới thiệu", "Khoa & Phòng", "Bảng giá dịch vụ", "Đăng ký khám", "Tin tức", "Mời thầu"].map((l) => (
              <li key={l}><a href="#" className="hover:text-gold">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Liên hệ</h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Số 2 Chùa Thông, P. Sơn Tây, Hà Nội</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> 0243.930.414</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" /> contact@bvqy105.vn</li>
            <li className="flex gap-2"><Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Cấp cứu 24/7</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Theo dõi</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Youtube" className="h-10 w-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
          <p className="mt-5 text-xs text-white/60">
            © {new Date().getFullYear()} Bệnh viện Quân y 105. Bảo lưu mọi quyền.
          </p>
        </div>
      </div>
    </footer>
  );
}
