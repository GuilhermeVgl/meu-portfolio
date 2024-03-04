"use client"

import siteMetadata from 'content/siteMetadata';
import Link from 'next/link';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub, FaGoogle, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa';
import SectionContainer from './SectionContainer';
import { Suspense } from 'react';
import NowPlaying from './Spotify/NowPlaying';

export default function Footer() {
  return (
    <main className="grainy-footer">
      <SectionContainer>
        <footer>
          <div className="mb-0 flex flex-col justify-start space-y-1.5 space-x-0 py-10 text-gray-500 dark:text-gray-400">
              <Suspense fallback="loading..">
                <NowPlaying />
              </Suspense>
            <div className="flex flex-col items-center space-y-2 text-sm sm:flex-row sm:justify-between sm:text-base">
              <ul className="flex space-x-2">
                <li>{`© ${new Date().getFullYear()}`}</li>
                <li>{` • `}</li>
                <li>
                  <Link href="/">{siteMetadata.title}</Link>
                </li>
              </ul>
              <ul className="flex cursor-pointer items-center space-x-5">
                <li>
                  <a
                    href={siteMetadata.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="linkedin"
                  >
                    <AiFillLinkedin className="sm:text-4xl hover:fill-icons-linkedin easeinout" />
                  </a>
                </li>
                <li>
                  <a href={siteMetadata.github} target="_blank" rel="noreferrer" aria-label="github">
                    <FaGithub className="sm:text-4xl hover:fill-icons-github easeinout" />
                  </a>
                </li>
                
                <li>
                  <a href={siteMetadata.google} target="_blank" rel="noreferrer" aria-label="github">
                    <FaGoogle className="sm:text-4xl hover:fill-icons-google easeinout" />
                  </a>
                </li>

                <li>
                  <a href={siteMetadata.whatsapp} target="_blank" rel="noreferrer" aria-label="github">
                    <FaWhatsapp className="sm:text-4xl hover:fill-icons-whatsapp easeinout" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </SectionContainer>
    </main>
  );
}
