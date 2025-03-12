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
              Welcome to an innovative blog platform! Here, you can immerse yourself in a world of creativity and technology. Whether you&apos;re looking to read insightful articles, share your own stories, or leverage AI to generate content, we&apos;ve got you covered.

              What You Can Do Here:
              Read & Explore - Dive into a variety of engaging and thought-provoking blogs.
              Create & Share - Write and publish your own blog posts to share your ideas.
              AI-Powered Content - Get creative inspiration with AI-generated blog content.

              No matter your experience level, our platform provides the tools you need to bring your words to life. Start exploring, writing, and innovating today!
            </p>
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
