import { createFileRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Toaster } from "@/components/ui/sonner";
import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Departments } from "@/components/site/Departments";
import { Booking } from "@/components/site/Booking";
import { News } from "@/components/site/News";
import { Tenders } from "@/components/site/Tenders";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Bệnh viện Quân y 105 — Niềm tin của người bệnh</title>
        <meta
          name="description"
          content="Bệnh viện Quân y 105. Khám chữa bệnh chất lượng cao, đội ngũ bác sĩ chuyên gia, trang thiết bị y tế hiện đại tại Sơn Tây, Hà Nội."
        />
        <meta property="og:title" content="Bệnh viện Quân y 105 — Niềm tin của người bệnh" />
        <meta
          property="og:description"
          content="Khám chữa bệnh chất lượng cao tại Sơn Tây, Hà Nội."
        />
      </Helmet>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Departments />
        <Booking />
        <News />
        <Tenders />
      </main>
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
