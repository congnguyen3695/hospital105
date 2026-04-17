import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-primary-dark text-primary-foreground/90 text-xs">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between gap-2 py-2">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Số 2 Chùa Thông, P. Sơn Tây, Hà Nội
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" /> 24/7 — Cấp cứu
          </span>
        </div>
        <div className="flex items-center gap-x-5 gap-y-1">
          <a href="mailto:contact@bvqy105.vn" className="inline-flex items-center gap-1.5 hover:text-white">
            <Mail className="h-3.5 w-3.5" /> contact@bvqy105.vn
          </a>
          <a href="tel:0243930414" className="inline-flex items-center gap-1.5 font-semibold text-white">
            <Phone className="h-3.5 w-3.5" /> Hotline: 0243.930.414
          </a>
        </div>
      </div>
    </div>
  );
}
