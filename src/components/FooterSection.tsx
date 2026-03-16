import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h2
          className="font-display text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let's Build{" "}
          <span className="text-gradient">Something Together</span>
        </motion.h2>

        <motion.p
          className="text-muted-foreground text-lg mb-10 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Open to collaborations, freelance projects, and opportunities in AI
          engineering.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="mailto:kinthadalokeshnaidu@gmail.com"
            className="px-8 py-3 rounded-full border border-primary text-foreground font-display font-medium tracking-wide hover:glow-primary transition-all duration-300"
          >
            <Mail className="inline-block mr-2 w-5 h-5" />
            kinthadalokeshnaidu@gmail.com
          </a>
          <a
            href="/Moyyi_Lokesh_Naidu_Resume.pdf"
            download
            className="px-8 py-3 rounded-full border border-primary text-foreground font-display font-medium tracking-wide hover:glow-primary transition-all duration-300 bg-primary/10"
            style={{ textDecoration: 'none' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="inline-block mr-2 w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 16V4m0 12l-4-4m4 4l4-4m-8 8h8a2 2 0 002-2V6a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Download Resume (PDF)
          </a>
        </motion.div>

        {/* Social & Contact Icons */}
        <div className="flex gap-6 justify-center mb-12">
          <a
            href="https://github.com/Lokeshh1330"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/moyyi-lokesh-naidu-0bb040324/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:kinthadalokeshnaidu@gmail.com"
            className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="tel:9392740536"
            className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Phone"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-2.625a1.125 1.125 0 0 0-1.125-1.125c-1.636 0-3.21-.26-4.687-.75a1.125 1.125 0 0 0-1.09.21l-2.2 1.833a12.042 12.042 0 0 1-5.25-5.25l1.833-2.2a1.125 1.125 0 0 0 .21-1.09c-.49-1.477-.75-3.051-.75-4.687A1.125 1.125 0 0 0 4.875 2.25H2.25A1.125 1.125 0 0 0 1.125 3.375c0 8.284 6.716 15 15 15 .621 0 1.125-.504 1.125-1.125v-2.625a1.125 1.125 0 0 0-1.125-1.125c-1.636 0-3.21-.26-4.687-.75a1.125 1.125 0 0 0-1.09.21l-2.2 1.833a12.042 12.042 0 0 1-5.25-5.25l1.833-2.2a1.125 1.125 0 0 0 .21-1.09c-.49-1.477-.75-3.051-.75-4.687A1.125 1.125 0 0 0 4.875 2.25H2.25z" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/lokeshhh.30?igsh=MWdsemw0Nmo2bzgxNw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass text-muted-foreground hover:text-primary transition-colors duration-200"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <rect width="20" height="20" x="2" y="2" rx="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17" cy="7" r="1.2" fill="currentColor" />
            </svg>
          </a>
        </div>

        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </section>
  );
}
