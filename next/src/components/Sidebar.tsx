import { School, Github, Linkedin, ExternalLink, House, Brain, Binary, Origami } from "lucide-react";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <>
    <div className="flex h-full flex-col p-4" style={{ backgroundColor: "#fafafa" }}>
      <div className="flex items-center gap-3 mb-6">
        <img src="/three.png"
             alt="avatar" className="h-10 w-10 rounded-full" />
        <div>
          <div className="font-semibold text-sm">Mahyar Fardinfar</div>
          <div className="text-sm text-gray-500">AI Engineer</div>
        </div>
      </div>
      <nav className="space-y-1">
        <NavItem href="/" label="Home" badge={1} icon={<House size={16} />} />
        <NavItem href="/Experience" label="Experience" badge={3} icon={<Binary size={16} />} />
        <NavItem href="/Publications" label="Publications" badge={4} icon={<Origami size={16} />} />
        <NavItem href="/Projects" label="Projects" badge={5} icon={<Brain size={16} />} />
      </nav>
      <div className="mt-8 text-sm text-gray-500">Online</div>
      <div className="mt-5 space-y-1">
        <NavItem
          href="https://scholar.google.com/citations?user=6d226_oAAAAJ&hl=en"
          label="Google Scholar"
          icon={<School size={16} />}
        />
        <NavItem
          href="https://github.com/MahyarFardin"
          label="GitHub"
          icon={<Github size={16} />}
        />
        <NavItem
          href="https://www.linkedin.com/in/mahyar-fardinfar/"
          label="LinkedIn"
          icon={<Linkedin size={16} />}
        />
        <NavItem
          href="https://medium.com/@mahyarfardinfar"
          label="Medium"
          icon={<ExternalLink size={16} />}
        />
      </div>
      </div>
    </>
  );
}
