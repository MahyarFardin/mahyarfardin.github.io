import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  summary?: string;
  views?: number;
  year: number;
};

const CONTENT_DIR = path.join(process.cwd(), "src/content/writing");

export async function getAllPosts(): Promise<Post[]> {
  const files = await fs.readdir(CONTENT_DIR);
  const mdxFiles = files.filter(f => f.endsWith(".mdx"));
  const posts: Post[] = [];

  for (const file of mdxFiles) {
    const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
    const { data } = matter(raw);
    const slug = file.replace(/\.mdx$/, "");
    const date = String(data.date ?? "1970-01-01");
    posts.push({
      slug,
      title: String(data.title ?? slug),
      date,
      summary: data.summary,
      views: data.views ?? 0,
      year: new Date(date).getFullYear(),
    });
  }

  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getCounts() {
  const writing = (await getAllPosts()).length;
  return { writing, journey: 3, stack: 4, workspace: 5, bookmarks: 6 }; // tweak as you add pages
}
