import { wisp } from "@/lib/wisp";
import Link from "next/link";

interface Params {
  slug: string;
}
// TODO: Enhance the blog post page by adding support for rich media content such as images, videos, and embedded social media posts. Consider implementing a responsive design to ensure optimal viewing experience across different devices and screen sizes. Additionally, add features like related posts or author information to increase user engagement and time spent on the page.
//TODO: Implement SEO best practices for the blog post page, including dynamic meta tags, Open Graph tags for social media sharing, and structured data markup to improve search engine visibility and click-through rates. Consider adding a comment section or integration with a third-party commenting system to foster community engagement and discussion around the blog post.
//TODO: Align the design of the blog post page with the app design system and overall aesthetic of the website, ensuring a cohesive and visually appealing user experience. Consider using typography, color schemes, and layout techniques that are consistent with the rest of the site to create a unified brand experience for visitors.
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
