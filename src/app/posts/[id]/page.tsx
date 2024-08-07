import UpvoteBtn from "@/components/UpvoteBtn";

export default async function Page({ params }: { params: { id: string } }) {
  const response = await fetch(`http://dummyjson.com/posts/${params.id}`);
  const post = await response.json();
  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
      <UpvoteBtn />
    </main>
  );
}
