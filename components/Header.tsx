'use client';

import headerNavLinks from 'content/headerNavLinks';
import Link from 'next/link';
import CommandPalette from './CommandPalette/CommandPalette';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';

export default function Header() {
  return (
    <main className="grainy-header">
      <SectionContainer>
        <header className="z-40 bg-transparent py-5 md:py-10">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <div className="nomeHeader">
              <Link
                href="/"
                aria-label="d."
                className="text-3xl font-extrabold sm:block underlineOpen"
              >
                Guilherme V.
              </Link>
            </div>
            <div className="flex items-center space-x-3 text-base leading-5">
              <div className="hidden space-x-5 sm:flex">
                {headerNavLinks.map(({ title, href, className }) => {
                  return (
                    <Link prefetch key={title} href={href} className={className} aria-label={title}>
                      <span className={`font-semibold tracking-wide ${title === 'Contact me' ? 'underlineHyper' : 'underlineOpen'}`}>
                        {title}
                      </span>
                    </Link>
                  );
                })}
              </div>
              <div className="flex items-center">
                <CommandPalette />
                <MobileNav />
              </div>
            </div>
          </div>
        </header>
      </SectionContainer>
    </main>
  );
}
