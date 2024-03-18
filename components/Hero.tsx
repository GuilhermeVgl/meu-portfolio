'use client';

import { motion } from 'framer-motion';
import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HiOutlineArrowNarrowDown } from 'react-icons/hi';
import { ScrollContext } from './Providers/ScrollProvider';
import { renderCanvas } from './renderCanvas';
import Link from 'next/link';


export default function Hero(): ReactElement {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);

  return (
    <div className='grainy-header'>
      <div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
        <div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
          <div className="-mt-36">
            <div ref={ref} className="flex cursor-default flex-col space-y-2">
              <h1 className="text-5xl text-primary-100 font-semibold sm:text-6xl md:text-7xl xl:text-9xl">
                <b className="firstName text-primary-200">Guilherme</b> <b className="surname">Freitas</b>
              </h1>
              <h2 className="text-3xl font-large sm:text-6xl md:text-3xl xl:text-4xl odyssey text-primary-100 ">
                The Odyssey of a <b className='text-primary-200'>Software engineer</b>.
              </h2>
              <button className="text-md w-max cursor-pointer sm:text-lg md:text-xl xl:text-2xl font-semibold underlineHyper readMore">
                <Link href="/about"><b className="text-primary-200">Read more</b><b className="text-primary-100"> about me &rarr;</b></Link>
              </button>
            </div>
            <motion.div
              animate={{
                transform: `translateY(${progress * 10}vh)`,
              }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 transform md:bottom-8"
            >
              <div
                role="presentation"
                className="flex cursor-pointer flex-col items-center justify-center"
                onClick={() => {
                  const intro = document.querySelector('#intro');

                  intro?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <HiOutlineArrowNarrowDown size={20} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </div>
  );
}
