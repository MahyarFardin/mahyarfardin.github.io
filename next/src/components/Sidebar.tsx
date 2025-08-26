import { Twitter, Github, Linkedin, ExternalLink, House, Pencil, Flame, Binary, Origami } from "lucide-react";
import NavItem from "./NavItem";

export default function Sidebar() {
  return (
    <>
    <div className="flex h-full flex-col p-4" style={{ backgroundColor: "#fafafa" }}>
      <div className="flex items-center gap-3 mb-6">
        <img src="https://avatars.githubusercontent.com/u/1?v=4"
             alt="avatar" className="h-10 w-10 rounded-full" />
        <div>
          <div className="font-semibold">Your Name</div>
          <div className="text-sm text-gray-500">Software Engineer</div>
        </div>
      </div>
      <nav className="space-y-1">
        <NavItem href="/" label="Home" badge={1} icon={<House size={16} />} />
        <NavItem href="/Experience" label="Experience" badge={2} icon={<Binary size={16} />} />
        <NavItem href="/Publications" label="Publications" badge={3} icon={<Origami size={16} />} />
        <NavItem href="/writing" label="Writing" badge={4} icon={<Pencil size={16} />} />
        <NavItem href="/journey" label="Journey" badge={5} icon={<Flame size={16} />} />
      </nav>
      <div className="mt-8 text-sm text-gray-500">Online</div>
      <div className="mt-5 space-y-1">
        <NavItem
          href="https://twitter.com"
          label="X (Twitter)"
          icon={<Twitter size={16} />}
        />
        <NavItem
          href="https://github.com"
          label="GitHub"
          icon={<Github size={16} />}
        />
        <NavItem
          href="https://linkedin.com"
          label="LinkedIn"
          icon={<Linkedin size={16} />}
        />
        <NavItem
          href="https://medium.com"
          label="Medium"
          icon={<ExternalLink size={16} />}
        />
      </div>
      </div>
    </>
  );
}
