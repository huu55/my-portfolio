import CursorDot from "./components/CursorDot";
import FixedSidebar from "./components/FixedSidebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Closing from "./components/Closing";

export default function Home() {
  return (
    <main>
      <CursorDot />
      <FixedSidebar />
      <Hero />
      <About />
      <Work />
      <Portfolio />
      <Closing />
    </main>
  );
}
