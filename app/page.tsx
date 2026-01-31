import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resources from "@/components/Resources";
import Dynamics from "@/components/Dynamics";
import AnimeShare from "@/components/AnimeShare";
import MusicShare from "@/components/MusicShare";
import IllustrationGallery from "@/components/IllustrationGallery";
import SectionWatcher from "@/components/SectionWatcher";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-foreground overflow-x-hidden">
      <Navbar />
      
      <SectionWatcher id={0}>
        <Hero />
      </SectionWatcher>

      <SectionWatcher id={1}>
        <About />
      </SectionWatcher>

      <SectionWatcher id={2} threshold={0.1}>
        <IllustrationGallery />
      </SectionWatcher>

      <SectionWatcher id={3}>
        <AnimeShare />
      </SectionWatcher>

      <SectionWatcher id={4}>
        <MusicShare />
      </SectionWatcher>

      <SectionWatcher id={5}>
        <Resources />
      </SectionWatcher>

      <SectionWatcher id={6}>
        <Dynamics />
      </SectionWatcher>
      
      <footer className="py-8 text-center text-foreground/50 text-sm glass-card border-t border-glass-border mt-20">
        <p>© {new Date().getFullYear()} Luminous. All rights reserved.</p>
        <p className="mt-2">Designed & Built with Next.js and Tailwind CSS</p>
      </footer>
    </main>
  );
}
