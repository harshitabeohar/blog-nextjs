import Image from "next/image";
import styles from '@/app/ui/styles/home.module.css';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="container mx-auto p-4 relative">
        <div className="bg-white border-2 border-emerald-500 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center">
            <h1 className={`text-4xlfont-bold mb-4 ${styles.text_green}`}>Welcome to the Blog</h1>
            <p className="text-lg text-gray-700 mb-4">
            A dynamic space where creativity meets technology! Whether you're here to read insightful blogs, share your own stories, or generate AI-powered content, this platform is designed to inspire and empower your writing journey.

            🚀 What You Can Do Here
            ✅ Read & Explore - Discover engaging and thought-provoking blogs on various topics.
            ✍️ Create & Share - Write your own blog posts and share your ideas with the world.
            🤖 AI-Powered Content - Need inspiration? Let our AI generate creative blog content for you.

            Whether you're an experienced writer or just starting out, This platform provides the tools to bring your words to life. Start exploring, writing, and innovating today!             </p>
            <a href="/blog/posts" className={`outline outline-1 outline-offset-2 border-emerald-500 text-emerald-500 hover:text-white py-2 px-4 rounded hover:bg-emerald-500 md:w-auto ${styles.fit_content}`}>
              Read
            </a>
          </div>
          <div className="relative flex justify-center items-center">
            {/* Image */}
            <Image
              src="/image-desktop.jpeg"
              width={1000}
              height={760}
              className="hidden rounded-lg md:block z-10"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <Image
              src="/image-mobile.jpeg"
              width={560}
              height={620}
              className="block rounded-md md:hidden"
              alt="Screenshot of the dashboard project showing mobile version"
            />
          </div>
        </div>
      </div>
      <div className={`hidden md:block absolute top-0 right-0 bottom-0 left-2/3 z-0 ${styles.bg_green}`}></div>
    </main>
  );
}
