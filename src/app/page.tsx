import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import GitHubIntegration from "@/components/sections/github";
import Skills from "@/components/sections/skills";
import Process from "@/components/sections/process";
import Testimonials from "@/components/sections/testimonials";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Projects />
      <GitHubIntegration />
      <Skills />
      <Process />
      <Testimonials />
      <Contact />
    </div>
  );
}
