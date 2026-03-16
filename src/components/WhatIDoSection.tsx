import { motion } from "framer-motion";
import { BrainCircuit, Code2, Eye, Shield } from "lucide-react";

const services = [
  {
    title: "AI Engineering",
    description:
      "Building intelligent multi-agent systems, autonomous analysis pipelines, and no-prompt AI solutions.",
    icon: <BrainCircuit className="w-8 h-8" />,
  },
  {
    title: "Full Stack Development",
    description:
      "Crafting robust, scalable web applications from database architecture to responsive frontends.",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: "AR / Computer Vision",
    description:
      "Augmented Reality applications with real-time gesture recognition and interactive visual overlays.",
    icon: <Eye className="w-8 h-8" />,
  },
  {
    title: "Offline-First Systems",
    description:
      "Building resilient applications that operate in zero-connectivity environments for critical use cases.",
    icon: <Shield className="w-8 h-8" />,
  },
];

export default function WhatIDoSection() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <motion.p
          className="text-sm font-display tracking-[0.3em] uppercase text-muted-foreground mb-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What I Do
        </motion.p>
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group p-8 rounded-xl glass hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -4 }}
            >
              <div className="text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                {s.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
