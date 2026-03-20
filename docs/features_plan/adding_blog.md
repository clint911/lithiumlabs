Adding Blog to my website to allow for content on built stuff: 
CMS Chosen: Wisp: https://www.wisp.blog/app
- Pros: 
    - Free for 1 user, 1 site, and 1000 visitors per month
    - Easy to use and set up
    - Integrates well with static sites
    - Provides a clean and modern interface for writing and managing blog posts
- Cons:
    - Limited features compared to more robust CMS platforms
    - May not be suitable for larger websites with high traffic
    - Limited customization options for themes and templates
- Implementation Steps:
1. Sign up for a Wisp account and create a new site for my blog.
2. Set up the necessary configurations, such as connecting my domain and customizing the appearance of the blog.
3. Create and publish my first blog post, ensuring that it is properly formatted and includes relevant images and links.
4. Integrate the blog into my existing website by adding a link to the blog in the navigation menu and embedding the blog feed on the homepage.
5. Regularly update the blog with new content to keep it fresh and engaging for visitors, and promote the blog posts through social media and other channels to drive traffic to the site.
- Future Considerations:
- As the blog grows, I may need to consider upgrading to a paid plan for additional features and increased visitor limits.
- I may also want to explore other CMS options in the future if I find that Wisp does not meet my needs as the blog evolves and expands.
- Overall, adding a blog to my website will allow me to share updates, insights, and content related to the projects and products I have built, and will help to engage with my audience and build a community around my work.
- I will also need to consider the SEO implications of adding a blog, and ensure that my blog posts are optimized for search engines to increase visibility and drive more traffic to my site as well as key configuration for analytics and tracking to monitor the performance of the blog and understand my audience better and having a content strategy in place to ensure that I am consistently creating valuable and relevant content for my audience to keep them engaged and coming back for more. 
- I will also need to evaluate  NextJs builtin support for SEO and ensure that my blog posts are properly optimized for search engines to increase visibility and drive more traffic to my site. This may involve using appropriate meta tags, optimizing images, and ensuring that the blog posts are structured in a way that is easy for search engines to crawl and index. Additionally, I will need to consider the overall user experience of the blog, ensuring that it is easy to navigate and that the content is easily accessible to visitors.

Listed Procedures: 
1. Set up Wisp Client

We will first install Wisp’s JS SDK to your existing project:

Now, we will create an instance of the client in src/lib/wisp.ts:
``` Typescript 
import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "d0528bee-a016-4b20-94cc-0a1ff522c827",
});

export type { GetPostsResult, GetPostResult };
``` 

Relevant code sample
https://github.com/Wisp-CMS/nextjs-blog-cms-wisp/blob/master/src/lib/wisp.ts
2. Set up Blog Listing Page

Update the root page src/app/page.tsx to retrieve and display all the posts with the wisp's client function wisp.getPosts
``` Typescript
import { wisp } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const result = await wisp.getPosts({ limit: 6 });
  return (
    <div className="grid grid-cols-1 gap-16 lg:gap-28 md:grid-cols-2 md:my-16 my-8">
      {result.posts.map((post) => (
        <div className="break-words" key={post.id}>
          <Link href={`/${post.slug}`}>
            <div className="aspect-[16/9] relative">
              {post.image ? (
                <Image
                  alt={post.title}
                  className="object-cover"
                  src={post.image}
                  fill
                />
              ) : (
                <img src="https://placehold.co/600x400" />
              )}
            </div>
          </Link>
          <div className="grid grid-cols-1 gap-3 md:col-span-2 mt-4">
            <h2 className="font-sans font-semibold tracking-tighter text-primary text-2xl md:text-3xl">
              <Link href={`/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="prose lg:prose-lg italic tracking-tighter text-muted-foreground">
              {(post.publishedAt || post.updatedAt).toLocaleString()}
            </div>
            <div className="prose lg:prose-lg leading-relaxed md:text-lg line-clamp-4 text-muted-foreground">
              {post.description}
            </div>
            <div className="text-sm text-muted-foreground">
              {post.tags.map((tag) => (
                <div key={tag.id} className="mr-2 inline-block">
                  #{tag.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
``` 

Relevant code sample
https://github.com/Wisp-CMS/nextjs-blog-cms-wisp/blob/master/src/app/page.tsx
3. Set up Blog Post Page

Add a new page src/app/[slug]/page.tsx to retrieve and display a specific blog post with the wisp's client function wisp.getPost
``` Typescript
import { wisp } from "@/lib/wisp";
import Link from "next/link";

interface Params {
  slug: string;
}
export default async function BlogPost({
  params: { slug },
}: {
  params: Params;
}) {
  const result = await wisp.getPost(slug);
  if (!result.post) return null;
  const { title, publishedAt, createdAt, content, tags } = result.post;
  return (
    <div>
      <div className="prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words">
        <h1>{title}</h1>
        <div
          className="blog-content mx-auto"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        <div className="mt-10 opacity-40 text-sm">
          {tags.map((tag) => (
            <span>#{tag.name}</span>
          ))}
        </div>
        <div className="text-sm opacity-40 mt-4">
          {Intl.DateTimeFormat("en-US").format(
            new Date(publishedAt || createdAt),
          )}
        </div>
      </div>
    </div>
  );
}
```

Relevant code sample
https://github.com/Wisp-CMS/nextjs-blog-cms-wisp/blob/master/src/app/blog/[slug]/page.tsx
```  Typescript 
import { BlogPostContent } from "@/components/BlogPostContent";
import { CommentSection } from "@/components/CommentSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RelatedPosts } from "@/components/RelatedPosts";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import { wisp } from "@/lib/wisp";
import { notFound } from "next/navigation";
import type { BlogPosting, WithContext } from "schema-dts";

export async function generateMetadata(props: { params: Promise<Params> }) {
  const params = await props.params;

  const { slug } = params;

  const result = await wisp.getPost(slug);
  if (!result || !result.post) {
    return {
      title: "Blog post not found",
    };
  }

  const { title, description, image } = result.post;
  const generatedOgImage = signOgImageUrl({ title, brand: config.blog.name });

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [generatedOgImage, image] : [generatedOgImage],
    },
  };
}
interface Params {
  slug: string;
}

const Page = async (props: { params: Promise<Params> }) => {
  const params = await props.params;

  const { slug } = params;

  const result = await wisp.getPost(slug);
  const { posts } = await wisp.getRelatedPosts({ slug, limit: 3 });

  if (!result || !result.post) {
    return notFound();
  }

  const { title, publishedAt, updatedAt, image, author } = result.post;

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image ? image : undefined,
    datePublished: publishedAt ? publishedAt.toString() : undefined,
    dateModified: updatedAt.toString(),
    author: {
      "@type": "Person",
      name: author.name ?? undefined,
      image: author.image ?? undefined,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-5">
        <Header />
        <div className="max-w-prose mx-auto text-xl">
          <BlogPostContent post={result.post} />
          <RelatedPosts posts={posts} />
          <CommentSection slug={slug} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
```