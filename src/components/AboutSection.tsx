import { motion } from "framer-motion";
import { MapPin, GraduationCap } from "lucide-react";
import heroPhoto2 from "@/assets/hero-photo-2.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Photo */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Neural glow behind */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/15 blur-3xl scale-125" />
              <img
                src={heroPhoto2}
                alt="About portrait"
                className="relative w-72 md:w-80 rounded-2xl object-cover aspect-[3/4] border border-border/30"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-display tracking-[0.3em] uppercase text-muted-foreground mb-3">
              About Me
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Building intelligent systems{" "}
              <span className="text-gradient">that feel alive.</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              I’m Moyyi Lokesh Naidu, a 3rd-year B.Tech IT student at CMR Technical Campus. My journey is defined by relentless curiosity and a drive to turn ideas into reality — from AI and AR to robust, production-grade software.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I’m not just a coder. I’m a communicator, a team player, and a leader who believes that technology is most powerful when paired with empathy and vision. My passion extends beyond academics: I excel in soft skills, public speaking, and building meaningful connections.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Whether it’s developing multi-agent AI systems, creating offline safety solutions for mine workers, or collaborating on innovative projects, I bring energy, creativity, and a premium touch to everything I do. Let’s connect and make an impact together.
            </p>

            <div className="flex flex-wrap gap-4 mb-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                India
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary" />
                B.Tech IT — CMRTC
              </span>
            </div>
            {/* Premium Contact Row */}
            <div className="flex flex-wrap gap-3 mb-2">
              <a href="mailto:kinthadalokeshnaidu@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-primary hover:bg-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-.659 1.591l-7.5 7.5a2.25 2.25 0 0 1-3.182 0l-7.5-7.5A2.25 2.25 0 0 1 2.25 6.993V6.75" />
                </svg>
                kinthadalokeshnaidu@gmail.com
              </a>
              <a href="tel:9392740536" className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-primary hover:bg-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-2.625a1.125 1.125 0 0 0-1.125-1.125c-1.636 0-3.21-.26-4.687-.75a1.125 1.125 0 0 0-1.09.21l-2.2 1.833a12.042 12.042 0 0 1-5.25-5.25l1.833-2.2a1.125 1.125 0 0 0 .21-1.09c-.49-1.477-.75-3.051-.75-4.687A1.125 1.125 0 0 0 4.875 2.25H2.25A1.125 1.125 0 0 0 1.125 3.375c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-2.625a1.125 1.125 0 0 0-1.125-1.125c-1.636 0-3.21-.26-4.687-.75a1.125 1.125 0 0 0-1.09.21l-2.2 1.833a12.042 12.042 0 0 1-5.25-5.25l1.833-2.2a1.125 1.125 0 0 0 .21-1.09c-.49-1.477-.75-3.051-.75-4.687A1.125 1.125 0 0 0 4.875 2.25H2.25z" />
                </svg>
                9392740536
              </a>
              <a href="https://github.com/Lokeshh1330" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-primary hover:bg-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 4.302 2.792 7.953 6.653 9.24.486.09.664-.211.664-.47 0-.232-.009-.846-.013-1.66-2.706.588-3.276-1.305-3.276-1.305-.442-1.123-1.08-1.422-1.08-1.422-.883-.604.067-.592.067-.592  .976.069 1.49 1.003 1.49 1.003.868 1.488 2.277 1.059 2.834.81.088-.629.34-1.06.618-1.304-2.162-.246-4.437-1.081-4.437-4.814 0-1.063.38-1.933 1.003-2.614-.101-.247-.435-1.24.096-2.586 0 0 .816-.262 2.676 1.001A9.36 9.36 0 0 1 12 6.844c.827.004 1.66.112 2.438.328 1.86-1.263 2.675-1.001 2.675-1.001.532 1.346.198 2.339.098 2.586.624.681 1.002 1.551 1.002 2.614 0 3.742-2.278 4.565-4.447 4.808.35.302.662.899.662 1.814 0 1.31-.012 2.367-.012 2.689 0 .261.176.563.67.468C18.96 19.95 21.75 16.302 21.75 12c0-5.385-4.365-9.75-9.75-9.75z" />
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/moyyi-lokesh-naidu-0bb040324/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-primary hover:bg-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 8.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM2.25 12a9.75 9.75 0 1 1 19.5 0 9.75 9.75 0 0 1-19.5 0zm16.5 0v6.75M5.25 12v6.75" />
                </svg>
                LinkedIn
              </a>
              <a href="https://www.instagram.com/lokeshhh.30?igsh=MWdsemw0Nmo2bzgxNw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-primary hover:bg-primary/10 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                </svg>
                Instagram
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
