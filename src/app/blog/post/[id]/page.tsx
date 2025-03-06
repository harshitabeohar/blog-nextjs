import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';

export type Params = Promise<{ id: string[] }>;
export default async function Page({ params }: { params: Params }) {
  const postId = (await params).id[0];
  const post = posts.find((post) => post.id === postId);
  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </>)
}