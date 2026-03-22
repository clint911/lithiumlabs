import type { Metadata } from "next";
import { wisp } from "@/lib/wisp";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Lithium Labs",
  description:
    "Insights, builds, and technical deep-dives from the Lithium Labs team — covering FinTech, Web3, system design, and everything in between.",
  openGraph: {
    title: "Blog | Lithium Labs",
    description:
      "Insights, builds, and technical deep-dives from the Lithium Labs team.",
    type: "website",
  },
};

export default async function BlogListingPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams?.page ?? 1);
  const result = await wisp.getPosts({ limit: 6, page });
  const { posts, pagination } = result;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-48 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block p-6 sm:p-8 md:p-12 lg:p-16 rounded-hero backdrop-blur-3xl bg-white/[0.05] border border-white/10 mb-12 shadow-4xl animate-in fade-in zoom-in duration-1000">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9] uppercase">
              Insights &amp;{" "}
              <span className="text-brand-secondary">Builds</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light">
              Technical deep-dives, product retrospectives, and engineering
              decisions from the Lithium Labs team.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-white/40 text-lg font-light uppercase tracking-widest">
                No posts published yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              {posts.map((post) => (
                <Card
                  key={post.id}
                  className="backdrop-blur-3xl bg-white/[0.04] border-white/10 hover:border-brand-secondary/20 transition-all duration-700 rounded-card-md group shadow-glow-secondary-card hover:shadow-glow-secondary-md flex flex-col overflow-hidden"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-[16/9] relative overflow-hidden rounded-t-[3rem]">
                      {post.image ? (
                        <Image
                          alt={post.title}
                          src={post.image}
                          fill
                          className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-white/[0.03] flex items-center justify-center">
                          <span className="text-white/10 font-black tracking-[0.5em] uppercase text-sm select-none">
                            Lithium Labs
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation/60 to-transparent" />
                    </div>
                  </Link>

                  <CardContent className="p-10 flex flex-col flex-1">
                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <Badge
                            key={tag.id}
                            className="bg-brand-secondary/10 text-brand-secondary border-none px-3 py-1 rounded-full text-micro font-black uppercase tracking-widest"
                          >
                            {tag.name}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="font-black text-white uppercase tracking-tighter text-2xl md:text-3xl mb-4 leading-none">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-brand-secondary transition-colors duration-300"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    {post.description && (
                      <p className="text-white/60 text-sm font-light leading-relaxed line-clamp-3 mb-6 flex-1">
                        {post.description}
                      </p>
                    )}

                    {/* Footer row */}
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <span className="text-white/40 italic text-xs tracking-tighter">
                        {Intl.DateTimeFormat("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }).format(new Date(post.publishedAt || post.updatedAt))}
                      </span>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          variant="outline"
                          className="border-white/10 bg-transparent text-white/60 hover:bg-brand-secondary/10 hover:border-brand-secondary/30 hover:text-brand-secondary px-5 py-2 rounded-xl font-black uppercase text-micro tracking-widest transition-all"
                        >
                          Read <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination && (pagination.prevPage || pagination.nextPage) && (
            <div className="flex items-center justify-center gap-4">
              {pagination.prevPage && (
                <Link href={`/blog?page=${pagination.prevPage}`}>
                  <Button
                    variant="outline"
                    className="border-white/10 bg-transparent text-white/60 hover:bg-brand-secondary/10 hover:border-brand-secondary/30 hover:text-brand-secondary px-8 py-5 rounded-xl font-black uppercase text-xs tracking-widest transition-all"
                  >
                    ← Previous
                  </Button>
                </Link>
              )}
              <span className="text-white/30 text-xs font-black uppercase tracking-widest">
                {page} / {pagination.totalPages}
              </span>
              {pagination.nextPage && (
                <Link href={`/blog?page=${pagination.nextPage}`}>
                  <Button
                    variant="outline"
                    className="border-white/10 bg-transparent text-white/60 hover:bg-brand-secondary/10 hover:border-brand-secondary/30 hover:text-brand-secondary px-8 py-5 rounded-xl font-black uppercase text-xs tracking-widest transition-all"
                  >
                    Next →
                  </Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
