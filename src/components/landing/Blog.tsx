import { getPublishedBlogPosts } from '@/lib/blog';
import { Link } from 'next-view-transitions';
import React from 'react';

import Container from '../common/Container';
import ArrowRight from '../svgs/ArrowRight';
import Calender from '../svgs/Calender';
import { Button } from '../ui/button';

export default function Blog() {
  const posts = getPublishedBlogPosts();

  return (
    <Container className="mt-16">
      <h2 className="text-2xl font-bold">Blog</h2>
      <div className="divide-border mt-4 flex flex-col divide-y">
        {posts.slice(0, 3).map((post) => {
          const { slug, frontmatter } = post;
          const formattedDate = new Date(frontmatter.date).toLocaleDateString(
            'en-US',
            { year: 'numeric', month: 'long', day: 'numeric' },
          );

          return (
            <div key={slug} className="py-4">
              <div className="flex items-start justify-between gap-4">
                <Link
                  href={`/blog/${slug}`}
                  className="text-base leading-snug font-semibold underline-offset-4 hover:underline"
                >
                  {frontmatter.title}
                </Link>
                <Link
                  href={`/blog/${slug}`}
                  className="text-secondary hover:text-foreground flex shrink-0 items-center gap-1 text-sm"
                >
                  Read more <ArrowRight className="size-3" />
                </Link>
              </div>
              <p className="text-secondary mt-1 line-clamp-2 text-sm">
                {frontmatter.description}
              </p>
              <time
                className="text-secondary mt-2 flex items-center gap-1.5 text-sm"
                dateTime={frontmatter.date}
              >
                <Calender className="size-3.5" />
                {formattedDate}
              </time>
            </div>
          );
        })}
      </div>
      <div className="mt-6 flex justify-center">
        <Button variant="outline">
          <Link href="/blog">Show all blogs</Link>
        </Button>
      </div>
    </Container>
  );
}
