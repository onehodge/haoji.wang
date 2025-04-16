import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';

// Importing the blog post data
import { DUMMY_POSTS, type BlogPost } from './blog/data';

export default function Home() {
  // Get the first 3 blog posts
  const recentPosts = DUMMY_POSTS.slice(0, 3);

  return (
    <>
      <section className="flex flex-col md:flex-row items-end justify-between py-16 border-b border-border">
        <div className="w-full md:w-3/5 flex flex-col justify-end h-full">
          <h1 className="text-6xl md:text-7xl font-body font-normal mb-8">
            <span className="block mt-6">Haoji Wang</span>
          </h1>
          <div className="w-fit">
            <p className="text-xl md:text-2xl font-serif tracking-wide mb-10">
              This site is a bit like me: <br />
              Still in progress, but you'll want to check back later.
            </p>
            <div className="flex justify-end">
              <Link 
                href="/about" 
                className="bg-accent text-background py-3 px-6 font-sans text-sm uppercase tracking-wide no-underline hover:bg-text/75 transition-colors duration-300"
              >
                MORE ABOUT ME
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden">
            <Image
              src="/profile3.jpg"
              alt="Haoji Wang"
              fill
              sizes="(max-width: 768px) 16rem, 20rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-b border-border py-6">
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 mt-16">
          <Link href="/blog" className="no-underline hover:no-underline">
            BLOG
          </Link>
        </h2>
        
        <div className="space-y-4 my-8">
          {recentPosts.map((post: BlogPost) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`} 
              className="block hover:bg-background/60 transition-colors duration-200 p-3 -mx-3 rounded-md"
            >
              <h3 className="text-xl font-body">{post.title}</h3>
            </Link>
          ))}
        </div>
        
        <Link 
          href="/blog" 
          className="inline-block mt-4 text-accent font-sans text-sm uppercase tracking-wide hover:underline"
        >
          VIEW ALL POSTS →
        </Link>
      </section>

      <section className="py-6">
        <h2 className="text-3xl md:text-4xl font-serif font-normal mb-8 mt-16">
          <Link href="/work" className="no-underline hover:no-underline">
            WORK
          </Link>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-6">
          <ProjectCard
            title="Project One"
            description="A short description of the project"
            slug="project-one"
          />
          <ProjectCard
            title="Project Two"
            description="A short description of the project"
            slug="project-two"
          />
          <ProjectCard
            title="Project Three"
            description="A short description of the project"
            slug="project-three"
          />
        </div>
      </section>

    </>
  );
} 