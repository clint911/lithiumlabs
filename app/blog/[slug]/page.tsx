import type { Metadata } from "next";
import { wisp } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Params {
  slug: string;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const result = await wisp.getPost(slug);
  if (!result.post) return {};
  const { title, description, image } = result.post;
  return {
    title: `${title} | Lithium Labs Blog`,
    description: description ?? undefined,
    openGraph: {
      title: `${title} | Lithium Labs Blog`,
      description: description ?? undefined,
      type: "article",
      ...(image ? { images: [{ url: image, alt: title }] } : {}),
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const [postResult, relatedResult] = await Promise.all([
    wisp.getPost(slug),
    wisp.getRelatedPosts({ slug, limit: 3 }),
  ]);

  if (!postResult.post) notFound();

  const { title, publishedAt, createdAt, content, tags, image, description } =
    postResult.post;
  const relatedPosts = relatedResult.posts;

  return (
    <>
      {/* Back Button */}
      <section className="pt-32 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-white/10 bg-transparent text-white/60 hover:bg-brand-secondary/10 hover:border-brand-secondary/30 hover:text-brand-secondary px-6 py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="text-white/40 italic text-sm tracking-tighter">
              {Intl.DateTimeFormat("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              }).format(new Date(publishedAt || createdAt))}
            </span>
            {tags.map((tag) => (
              <Badge
                key={tag.id}
                className="bg-brand-secondary/10 text-brand-secondary border-none px-3 py-1 rounded-full text-micro font-black uppercase tracking-widest"
              >
                {tag.name}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-10">
            {title}
          </h1>

          {/* Hero Image */}
          {image && (
            <div className="relative aspect-[16/9] rounded-card-md overflow-hidden mb-12 shadow-glow-secondary-md">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation/40 to-transparent" />
            </div>
          )}

          {/* Article body */}
          <div
            className="prose prose-invert lg:prose-xl prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-brand-secondary prose-a:no-underline hover:prose-a:underline prose-code:text-brand-secondary prose-pre:bg-white/[0.04] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-white uppercase tracking-tighter mb-10">
              Related <span className="text-brand-secondary">Posts</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <Card
                  key={post.id}
                  className="backdrop-blur-3xl bg-white/[0.04] border-white/10 hover:border-brand-secondary/20 transition-all duration-700 rounded-card group shadow-glow-secondary-card hover:shadow-glow-secondary-md overflow-hidden"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/9] relative overflow-hidden rounded-t-[2.5rem]">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/[0.03] flex items-center justify-center">
                          <span className="text-white/10 font-black tracking-[0.5em] uppercase text-xs select-none">
                            Lithium Labs
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation/60 to-transparent" />
                    </div>
                  </Link>
                  <CardContent className="p-8">
                    <h3 className="font-black text-white uppercase tracking-tighter text-lg leading-tight mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-brand-secondary transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    {post.description && (
                      <p className="text-white/50 text-xs font-light leading-relaxed line-clamp-2">
                        {post.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-white/10 bg-transparent text-white/60 hover:bg-brand-secondary/10 hover:border-brand-secondary/30 hover:text-brand-secondary px-10 py-6 rounded-2xl font-black uppercase text-xs tracking-widest transition-all"
            >
              <ArrowLeft className="mr-3 h-4 w-4" /> Back to Blog
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
