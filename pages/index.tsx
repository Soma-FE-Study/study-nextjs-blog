import type { NextPage } from 'next';

interface Posts {
  slug: string;
  date: string;
  title: string;
  summary: string;
  tags: Array<string>;
}

export async function getStaticProps() {
  const posts = [
    {
      slug: 'new-features-in-v1',
      date: 'August 8, 2021',
      title: 'New features in v1',
      summary: 'An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more',
      tags: ['NEXT-JS', 'TAILWIND', 'GUIDE'],
    },
  ];
  return { props: { posts } };
}

const Home: NextPage<{ posts: Array<Posts> }> = ({ posts }) => {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Home;
