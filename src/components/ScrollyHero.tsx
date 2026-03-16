import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import heroPhoto from "@/assets/hero-photo.jpg";
import heroPhoto2 from "@/assets/hero-photo-2.jpg";

const springConfig = { stiffness: 60, damping: 20, mass: 0.5 };

export default function ScrollyHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out scroll for buttery feel
  const smooth = useSpring(scrollYProgress, springConfig);

  // === PHASE 1 (0–0.33): Photo 1 zooms in slowly, name reveal ===
  const p1Scale = useTransform(smooth, [0, 0.33], [1.0, 1.35]);
  const p1Opacity = useTransform(smooth, [0, 0.28, 0.35], [1, 1, 0]);
  const p1Blur = useTransform(smooth, [0.25, 0.35], [0, 12]);
  const p1X = useTransform(smooth, [0, 0.33], ["0%", "-8%"]);

  // === PHASE 2 (0.33–0.66): Photo 2 slides in from right, rotates ===
  const p2Opacity = useTransform(smooth, [0.28, 0.38], [0, 1]);
  const p2Scale = useTransform(smooth, [0.33, 0.5, 0.66], [1.2, 1.05, 1.15]);
  const p2X = useTransform(smooth, [0.28, 0.45], ["15%", "0%"]);
  const p2Blur = useTransform(smooth, [0.58, 0.7], [0, 10]);

  // === PHASE 3 (0.66–1): Both gone, clean exit ===
  const p2FinalOpacity = useTransform(smooth, [0.6, 0.72], [1, 0]);

  // Cinematic letterbox bars
  const barHeight = useTransform(smooth, [0, 0.15, 0.85, 1], ["0%", "8%", "8%", "0%"]);

  // Dark overlay intensity
  const overlayOpacity = useTransform(
    smooth,
    [0, 0.1, 0.33, 0.4, 0.66, 0.75, 1],
    [0.55, 0.35, 0.5, 0.3, 0.5, 0.6, 0.85]
  );

  // Grain/noise overlay opacity
  const grainOpacity = useTransform(smooth, [0, 1], [0.03, 0.06]);

  // === TEXT SECTIONS ===
  // Section 1: Hero name — visible 0–0.25
  const t1Y = useTransform(smooth, [0, 0.05, 0.22, 0.3], ["8vh", "0vh", "0vh", "-25vh"]);
  const t1Opacity = useTransform(smooth, [0, 0.06, 0.2, 0.28], [0, 1, 1, 0]);
  const t1Scale = useTransform(smooth, [0, 0.06, 0.22, 0.3], [0.92, 1, 1, 0.95]);

  // Section 2: What I build — visible 0.3–0.6
  const t2Y = useTransform(smooth, [0.28, 0.38, 0.55, 0.63], ["30vh", "0vh", "0vh", "-30vh"]);
  const t2Opacity = useTransform(smooth, [0.28, 0.38, 0.53, 0.63], [0, 1, 1, 0]);
  const t2Scale = useTransform(smooth, [0.28, 0.38, 0.55, 0.63], [0.9, 1, 1, 0.95]);

  // Section 3: Mission — visible 0.63–0.9
  const t3Y = useTransform(smooth, [0.6, 0.72, 0.85, 0.93], ["30vh", "0vh", "0vh", "-20vh"]);
  const t3Opacity = useTransform(smooth, [0.6, 0.72, 0.83, 0.93], [0, 1, 1, 0]);
  const t3Scale = useTransform(smooth, [0.6, 0.72, 0.85, 0.93], [0.9, 1, 1, 0.95]);

  // Floating particles positions
  const particle1Y = useTransform(smooth, [0, 1], ["10vh", "-80vh"]);
  const particle2Y = useTransform(smooth, [0, 1], ["30vh", "-60vh"]);
  const particle3Y = useTransform(smooth, [0, 1], ["50vh", "-40vh"]);

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(smooth, [0, 0.08], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[600vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">

        {/* === PHOTO LAYER === */}
        {/* Photo 1 */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ opacity: p1Opacity, scale: p1Scale, x: p1X, filter: useTransform(p1Blur, (v) => `blur(${v}px)`) }}
        >
          <img
            src={heroPhoto}
            alt="Portrait"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Photo 2 */}
        <motion.div
          className="absolute inset-0 will-change-transform"
          style={{ opacity: p2FinalOpacity, scale: p2Scale, x: p2X, filter: useTransform(p2Blur, (v) => `blur(${v}px)`) }}
        >
          <motion.div className="w-full h-full" style={{ opacity: p2Opacity }}>
            <img
              src={heroPhoto2}
              alt="Portrait 2"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* === OVERLAYS === */}
        {/* Dark cinematic overlay */}
        <motion.div
          className="absolute inset-0 bg-background pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />

        {/* Radial vignette — strong edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, hsl(0 0% 2% / 0.6) 70%, hsl(0 0% 2%) 100%)
            `,
          }}
        />

        {/* Film grain texture */}
        <motion.div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{
            opacity: grainOpacity,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Cinematic letterbox bars */}
        <motion.div
          className="absolute top-0 left-0 right-0 bg-background z-20 pointer-events-none"
          style={{ height: barHeight }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-background z-20 pointer-events-none"
          style={{ height: barHeight }}
        />

        {/* === FLOATING PARTICLES === */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{ top: "20%", left: "15%", y: particle1Y }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-accent/30"
            style={{ top: "60%", left: "75%", y: particle2Y }}
          />
          <motion.div
            className="absolute w-0.5 h-0.5 rounded-full bg-primary/50"
            style={{ top: "40%", left: "45%", y: particle3Y }}
          />
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-accent/20"
            style={{ top: "70%", left: "30%", y: particle1Y }}
          />
          <motion.div
            className="absolute w-0.5 h-0.5 rounded-full bg-primary/30"
            style={{ top: "80%", left: "85%", y: particle3Y }}
          />
        </div>

        {/* === TEXT OVERLAYS === */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">

          {/* Section 1 — Grand Entrance */}
          <motion.div
            className="absolute text-center px-6 max-w-4xl"
            style={{ y: t1Y, opacity: t1Opacity, scale: t1Scale }}
          >
            <motion.div
              className="inline-block mb-5 px-4 py-1.5 rounded-full border border-primary/30 backdrop-blur-sm"
            >
              <span className="font-display text-xs tracking-[0.3em] uppercase text-primary">
                Portfolio
              </span>
            </motion.div>

            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 drop-shadow-2xl">
              <span className="text-gradient">Moyyi Lokesh Naidu</span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto leading-relaxed mb-6">
              AI Engineer • Innovator • Visionary<br/>
              <span className="text-sm text-muted-foreground/70">Solving problems with code, creativity, and relentless curiosity. Not your average developer—uniquely blending logic, imagination, and ambition to build what others only dream of.</span>
            </p>

            <motion.a
              href="#about"
              className="pointer-events-auto inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/40 text-foreground font-display text-sm tracking-wider hover:bg-primary/10 hover:border-primary transition-all duration-300 backdrop-blur-sm"
            >
              <span>Discover More</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                <path d="M8 3v10M8 13l4-4M8 13L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>

            {/* Decorative line */}
            <div className="mt-8 mx-auto w-12 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </motion.div>

          {/* Section 2 — What I Build */}
          <motion.div
            className="absolute text-center px-6 max-w-3xl"
            style={{ y: t2Y, opacity: t2Opacity, scale: t2Scale }}
          >
            <div className="mb-6 flex justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: "0.3s" }} />
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.6s" }} />
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              I build{" "}
              <span className="text-gradient">intelligent systems.</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-xl max-w-xl mx-auto leading-relaxed">
              From multi-agent AI to augmented reality — crafting experiences
              that push the boundaries of what's possible.
            </p>
          </motion.div>

          {/* Section 3 — Mission */}
          <motion.div
            className="absolute text-center px-6 max-w-3xl"
            style={{ y: t3Y, opacity: t3Opacity, scale: t3Scale }}
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-2xl">
              Bridging{" "}
              <span className="text-gradient">AI & Reality.</span>
            </h2>

            <p className="text-muted-foreground text-base md:text-xl max-w-xl mx-auto leading-relaxed mb-8">
              Creating software that doesn't just work — it feels alive.
              <br />
              Offline safety systems. AR anime recognition. Autonomous AI agents.
            </p>

            <motion.a
              href="#projects"
              className="pointer-events-auto inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/40 text-foreground font-display text-sm tracking-wider hover:bg-primary/10 hover:border-primary transition-all duration-300 backdrop-blur-sm"
            >
              <span>Explore Projects</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                <path d="M8 3v10M8 13l4-4M8 13L4 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* === SCROLL INDICATOR === */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="font-display text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <div className="w-5 h-8 rounded-full border border-foreground/15 flex items-start justify-center pt-1.5">
              <motion.div
                className="w-0.5 h-1.5 rounded-full bg-primary/70"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}
