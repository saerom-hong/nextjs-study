import type { Metadata } from 'next';
import './globals.css';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      href: '/',
      label: 'Home',
    },
    {
      href: '/docs',
      label: 'Docs',
    },
    {
      href: '/todos',
      label: 'Todos',
    },
  ];

  return (
    <html lang="en" className={montserrat.className}>
      <body className="bg-slate-100">
        <header>
          <nav>
            <ul className="flex items-center justify-end p-4 gap-8">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-montserrat font-semibold text-xl"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="px-64">{children}</div>
      </body>
    </html>
  );
}
