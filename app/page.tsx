import Announcement from "@/components/Announcement";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Story from "@/components/Story";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <Hero />
        <Collection />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
