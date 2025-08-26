import Link from "next/link";
import { format } from "date-fns";
import { Post } from "@/lib/posts";

export default function PostTable({ posts }: { posts: Post[] }) {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-gray-500">
          <tr className="[&>th]:px-3 [&>th]:py-2">
            <th>Year</th><th>Date</th><th>Title</th><th className="text-right">Views</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {posts.map(p => (
            <tr key={p.slug} className="[&>td]:px-3 [&>td]:py-3">
              <td>{p.year}</td>
              <td>{format(new Date(p.date), "dd/MM")}</td>
              <td className="font-medium hover:underline">
                <Link href={`/writing/${p.slug}`}>{p.title}</Link>
              </td>
              <td className="text-right tabular-nums">{p.views?.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
