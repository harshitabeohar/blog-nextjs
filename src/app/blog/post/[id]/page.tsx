import { posts } from '@/app/lib/placeholder-data';
import Post from '@/app/ui/components/posts/Post';
type Params = { id: string[] }
export default async function Page({ params }: { params: Params }) {
  const postId = params.id[0];
  const post = posts.find((post) => post.id === postId);
  return (
    <>
      <h1>Post</h1>
      {post && <Post {...post} />}
    </>)
}