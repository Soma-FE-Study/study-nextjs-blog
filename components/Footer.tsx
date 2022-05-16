import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <a
            className="text-sm font-bold text-gray-500 transition hover:text-gray-600"
            target="_blank"
            href="https://github.com/iHoHyeon"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>iHoHyeon</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">iHoHyeon Dev Blog</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
