import kebabCase from '@/lib/utils/kebabCase';
import Link from 'next/link';

type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium text-teal-500 uppercase hover:text-teal-600 dark:hover:text-primary-400">{text.split(' ').join('-')}</a>
    </Link>
  );
};

export default Tag;
