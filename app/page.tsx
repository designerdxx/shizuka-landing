import { Categories } from "./_components/Categories";
import { Effortless } from "./_components/Effortless";
import { Footer } from "./_components/Footer";
import { Founder } from "./_components/Founder";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Intro } from "./_components/Intro";
import { Process } from "./_components/Process";
import { RevealController } from "./_components/RevealController";
import { Reviews } from "./_components/Reviews";
import { Transparency } from "./_components/Transparency";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 bg-white px-4 py-3 text-espresso focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Intro />
      <Header />
      <main id="main">
        <Hero />
        <Process />
        <Categories />
        <Founder />
        <Effortless />
        <Reviews />
        <Transparency />
      </main>
      <Footer />
      <RevealController />
    </>
  );
}
