import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import rehypeAutolink from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import "@/styles/prose.css";

export default function MDXContent({ source }: { source: string }) {
  const options = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolink, { behavior: "wrap" }],
        [rehypePrettyCode, { theme: "github-dark" }],
      ],
    },
  } as any;

  return (
    <div className="prose dark:prose-invert max-w-none">
      <MDXRemote source={source} options={options} />
    </div>
  );
}
