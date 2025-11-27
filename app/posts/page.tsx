import { readItems } from "@directus/sdk";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import directus from "@/lib/directus";

export const metadata: Metadata = {
  title: "HTML Compiler - Online HTML Editor & Preview",
  description:
    "Modern online HTML compiler with real-time preview, syntax highlighting, and code completion. Write, test, and download your HTML code instantly.",
};

export const revalidate = 86400;

export default async function BlogPage() {
  try {
    const posts = await directus.request(
      readItems("posts", {
        fields: [
          "id",
          "title",
          "slug",
          "description",
          "published_at",
          "status",
        ],
        filter: {
          status: { _eq: "published" },
        },
        sort: ["-published_at"],
        limit: -1,
      }),
    );

    return (
      <>
        <PageHeader />
        <main className="min-h-screen bg-background">
          <div className="max-w-6xl mx-auto py-12 px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 text-balance text-foreground">
                Blog Posts
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Explore our latest articles and updates
              </p>
            </div>

            {posts.length === 0 ? (
              <Card className="border-2 border-border bg-card">
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    No posts published yet
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    scroll={false}
                    key={post.id}
                    href={`/posts/${post.slug}`}
                    className="group"
                  >
                    <Card className="h-full transition-all hover:shadow-lg hover:border-primary border-2 border-border bg-card">
                      <CardHeader>
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors text-balance text-foreground">
                          {post.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {new Date(post.published_at).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            },
                          )}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground line-clamp-3 text-pretty">
                          {post.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error("[v0] Error fetching posts:", error);

    return (
      <>
        <PageHeader />
        <main className="min-h-screen bg-background">
          <div className="max-w-6xl mx-auto py-12 px-4">
            <Card className="border-2 border-destructive bg-card">
              <CardContent className="py-12 text-center space-y-4">
                <p className="text-destructive font-semibold">
                  Error loading posts
                </p>
                <p className="text-sm text-muted-foreground">
                  {error instanceof Error ? error.message : "Unknown error"}
                </p>
                {!process.env.NEXT_PUBLIC_DIRECTUS_URL && (
                  <p className="text-sm text-muted-foreground">
                    Please check if NEXT_PUBLIC_DIRECTUS_URL environment
                    variable is set
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </main>
      </>
    );
  }
}
