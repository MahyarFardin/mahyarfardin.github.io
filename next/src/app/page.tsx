import { getAllPosts } from "@/lib/posts";
import PostTable from "@/components/PostTable";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <div>
      <p className="text-lg">
        Hi 👋 I&apos;m <strong>YourName</strong>, a software engineer and minimalist based somewhere.
      </p>

      <h2 className="mt-10 text-xl font-semibold">Writing</h2>
      <PostTable posts={posts} />
    </div>

  );
}
