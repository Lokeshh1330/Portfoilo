const row1 = [
  "Python", "TensorFlow", "PyTorch", "OpenAI API", "LangChain",
  "Computer Vision", "AR/VR", "Multi-Agent AI",
];

const row2 = [
  "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js",
  "Firebase", "PostgreSQL", "Framer Motion",
];

export default function ArsenalSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-display tracking-[0.3em] uppercase text-muted-foreground mb-3">
          Tech Stack
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          My Arsenal
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Row 1 */}
        <div className="flex mb-4 marquee-left" style={{ width: "300%" }}>
          {[...row1, ...row1, ...row1].map((tech, idx) => (
            <div
              key={`r1-${idx}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-full glass text-sm font-display text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-200"
            >
              {tech}
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex marquee-right" style={{ width: "300%" }}>
          {[...row2, ...row2, ...row2].map((tech, idx) => (
            <div
              key={`r2-${idx}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-full glass text-sm font-display text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors duration-200"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
