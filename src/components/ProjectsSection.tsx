import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import auraosImg from "@/assets/project-auraos.jpg";
import stratavexImg from "@/assets/project-stratavex.jpg";
import aranimeImg from "@/assets/project-aranime.jpg";
import minesafetyImg from "@/assets/project-minesafety.jpg";

const projects = [
  {
    id: 1,
    title: "AURAOS",
    category: "Multi-AI Agent System",
    description:
      "A multi-agent AI that analyses anything without giving prompts. Unlike ChatGPT and other AIs, it provides advanced, up-to-date data autonomously.",
    image: auraosImg,
    glowColor: "from-accent/30 to-primary/30",
  },
  {
    id: 2,
    title: "STRATAVEX",
    category: "AI Career Path Analyzer",
    description:
      "An advanced AI-powered career path analyzer that maps trajectories, identifies skill gaps, and creates personalized career roadmaps.",
    image: stratavexImg,
    glowColor: "from-primary/30 to-accent/30",
  },
  {
    id: 3,
    title: "AR ANIME",
    category: "Augmented Reality",
    description:
      "An AR application that recognizes Naruto anime hand signs in real-time, triggering jutsu effects through gesture recognition.",
    image: aranimeImg,
    glowColor: "from-red-500/20 to-accent/20",
  },
  {
    id: 4,
    title: "MINE SAFETY",
    category: "Offline Safety Application",
    description:
      "A rugged offline application designed for mine workers operating in zero-connectivity environments. Real-time safety monitoring without internet.",
    image: minesafetyImg,
    glowColor: "from-amber-500/20 to-orange-500/20",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-sm font-display tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Selected Works
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              className="group relative rounded-xl overflow-hidden border border-border/50 bg-card hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -4 }}
            >
              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${proj.glowColor} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none`}
              />

              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <span className="text-xs font-display tracking-widest uppercase text-primary mb-2 block">
                  {proj.category}
                </span>
                <h3 className="font-display text-2xl font-bold mb-2 flex items-center gap-2">
                  {proj.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {proj.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
