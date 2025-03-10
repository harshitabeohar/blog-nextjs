import { notFound } from 'next/navigation';
// import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
import { getPosts } from '@/app/lib/data';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === resolvedParams.id);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <h1>Post</h1>
      {post && <Post id={post.id} title={post.title} content={post.content} date={post.date} {...post} />}
    </>)
}