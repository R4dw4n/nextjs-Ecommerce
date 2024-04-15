import Categories from "./components/Categories";
import Collections from "./components/Collections";
import Deals from "./components/Deals";
import Features from "./components/Features";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <div className="w-full min-h-screen mx-auto">
      <Hero />
      <Categories />
      <Collections />
      <Deals />
      <Features />
    </div>
  );
}
