import { createFileRoute } from "@tanstack/react-router";
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
