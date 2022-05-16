import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import Footer from './Footer';
import MobileNav from './MobileNav';
import ThemeSwitch from './ThemeSwitch';

type LayoutProps = {
  children: ReactNode;
};

const HEADER_NAV_LINK = [
  { title: 'Blog', href: '/blog' },
  { title: 'Tags', href: '/tags' },
  { title: 'About', href: '/about' },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex flex-col justify-between h-screen">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label="iHoHyeon">
              <div className="flex items-center justify-between">
                <div className="h-6 text-2xl font-semibold leading-8 hover:cursor-pointer">{"iHoHyeon's Blog"}</div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {HEADER_NAV_LINK.map((link) => (
                <Link key={link.title} href={link.href}>
                  <a className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">{link.title}</a>
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
