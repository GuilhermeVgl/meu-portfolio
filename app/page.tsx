import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Projects from '@/components/Projects/Projects';
import { ScrollProvider } from '@/components/Providers/ScrollProvider';
import MainLayout from '@/components/layouts/MainLayout';
import Developer from '@/components/Developer';

export default function Page() {
  return (
    <ScrollProvider>
      <Hero />
      <Intro />
      <div className='grainy-footer'>
        <MainLayout>
            <div className="space-y-2 pt-6 pb-8 md:space-y-5 ">
              <h1 className="text-4xl talk font-bold leading-9 tracking-tight dark:text-primary-600 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                Projects
              </h1>
              <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                Showcase of Featured Projects.
              </p>
            </div>
            <Projects />
          <Developer />
        </MainLayout>
      </div>
    </ScrollProvider>
  );
}
