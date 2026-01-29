import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Social from "@/components/Social";
import Experience from "@/components/Experience";
import Resources from "@/components/Resources";
import Dynamics from "@/components/Dynamics";
import AnimeShare from "@/components/AnimeShare";
import IllustrationGallery from "@/components/IllustrationGallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <IllustrationGallery />
      <AnimeShare />
      <Social />
      <Experience />
      <Resources />
      <Dynamics />
      
      <footer className="py-8 text-center text-foreground/50 text-sm glass-card border-t border-glass-border mt-20">
        <p>© {new Date().getFullYear()} Luminous. All rights reserved.</p>
        <p className="mt-2">Designed & Built with Next.js and Tailwind CSS</p>
      </footer>
    </main>
  );
}
