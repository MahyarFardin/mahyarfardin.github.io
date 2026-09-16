import { House, Milestone, BookOpen, FolderGit2, School, Github, Linkedin, ExternalLink } from "lucide-react";
import NavItem from "./NavItem";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col bg-neutral-50 p-6">
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/three.png"
          alt="avatar"
          width={40}
          height={40}
          className="h-10 w-10 rounded-full"
          priority
        />
        <div>
          <div className="font-serif text-sm font-semibold text-neutral-900">
            Mahyar Fardinfar
          </div>
          <div className="text-sm text-neutral-500">AI Researcher</div>
        </div>
      </div>

      <nav className="space-y-0.5">
        <NavItem href="/" label="Home" accent="var(--accent-base)" icon={<House size={16} />} />
        <NavItem href="/Experience" label="Experience" accent="var(--accent-experience)" icon={<Milestone size={16} />} />
        <NavItem href="/Publications" label="Publications" accent="var(--accent-publications)" icon={<BookOpen size={16} />} />
        <NavItem href="/Projects" label="Projects" accent="var(--accent-projects)" icon={<FolderGit2 size={16} />} />
      </nav>

      <div className="mt-10 text-xs font-medium uppercase tracking-wide text-neutral-400">
        Elsewhere
      </div>
      <div className="mt-2 space-y-0.5">
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
  );
}
