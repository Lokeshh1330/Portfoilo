import { motion } from "framer-motion";
import { Home, FolderOpen, User, Wrench, Mail } from "lucide-react";

const navItems = [
  { icon: <Home className="w-5 h-5" />, href: "#", label: "Home" },
  { icon: <FolderOpen className="w-5 h-5" />, href: "#projects", label: "Projects" },
  { icon: <User className="w-5 h-5" />, href: "#about", label: "About" },
  { icon: <Wrench className="w-5 h-5" />, href: "#", label: "Skills" },
  { icon: <Mail className="w-5 h-5" />, href: "#", label: "Contact" },
];

export default function FloatingNav() {
  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full glass flex gap-6"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 100 }}
    >
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
          title={item.label}
        >
          {item.icon}
        </a>
      ))}
    </motion.nav>
  );
}
