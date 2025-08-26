import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import MDXContent from "@/components/MDXContent";

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/content/writing");
  const files = (await fs.readdir(dir)).filter(f => f.endsWith(".mdx"));
  return files.map(f => ({ slug: f.replace(/\.mdx$/, "") }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "src/content/writing", `${params.slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(raw);

  return (
    <article>
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <p className="text-sm text-gray-500">{new Date(data.date).toDateString()}</p>
      <div className="mt-6" />
      <MDXContent source={content} />
    </article>
  );
}
