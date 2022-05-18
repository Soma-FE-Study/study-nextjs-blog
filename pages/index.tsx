import BlogPostPreview from '@/components/BlogPostPreview';
import PageDescription from '@/components/PageDescription';
import Tag from '@/components/Tag';
import formatDate from '@/utils/formatDate';
import type { NextPage } from 'next';
import Link from 'next/link';

interface Posts {
  slug: string;
  date: string;
  title: string;
  summary: string;
  tags: Array<string>;
}

const MAX_DISPLAY = 5;

export async function getStaticProps() {
  const posts = [
    {
      slug: 'new-features-in-v1',
      date: '2022-09-08',
      title: 'New features in v1',
      summary: 'An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more',
      tags: ['NEXT-JS', 'TAILWIND', 'GUIDE'],
    },
    {
      slug: 'new-features-in-v2',
      date: '2022-10-08',
      title: 'New features in v2',
      summary: 'An overview of the new features released in v2 - code block copy, multiple authors, frontmatter layout and more',
      tags: ['NEXT-JS', 'TAILWIND', 'GUIDE'],
    },
    {
      slug: 'new-features-in-v3',
      date: '2022-11-08',
      title: 'New features in v3',
      summary: 'An overview of the new features released in v2 - code block copy, multiple authors, frontmatter layout and more',
      tags: ['NEXT-JS', 'TAILWIND', 'GUIDE'],
    },
    {
      slug: 'new-features-in-v4',
      date: '2022-09-08',
      title: 'New features in v4',
      summary: 'An overview of the new features released in v4 - code block copy, multiple authors, frontmatter layout and more',
      tags: ['NEXT-JS', 'TAILWIND', 'GUIDE'],
    },
  ];
  return { props: { posts } };
}

const Home: NextPage<{ posts: Array<Posts> }> = ({ posts }) => {
  return (
    <>
      <PageDescription title="Latest" description="A blog created with Next.js and Tailwind.css" />
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!posts.length && 'No posts found.'}

        {posts.slice(0, MAX_DISPLAY).map((postProps) => {
          return (
            <li key={postProps.slug} className="py-12">
              <BlogPostPreview {...postProps} readMore={true}></BlogPostPreview>
            </li>
          );
        })}
      </ul>

      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link href="/blog" className="text-teal-500 hover:text-teal-600 dark:hover:text-teal-400" aria-label="all posts">
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
