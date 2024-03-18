'use client';

import { MDXLayoutRenderer } from '@/components/MDXComponents';
import AuthorLayout from '@/layouts/MDX/AuthorLayout';
import MainLayout from '@/layouts/MainLayout';
import { allAuthors } from 'contentlayer/generated';
import useDownloader from 'react-use-downloader';

export default function About() {
  
  const { download } = useDownloader(); 

  const englishUrl = "/static/files/GuilhermeVieira-curriculum.pdf"; 
  const portugueseUrl = "/static/files/GuilhermePTBR.pdf"; 
  const englishFilename = "GuilhermeVieira-curriculum.pdf"; 
  const portugueseFilename = "GuilhermePTBR.pdf"; 

  const author = allAuthors.find((p) => p.slug === 'about');

  if (!author) {
    return null;
  }

  return (
    <main className='grainy-background min-h-screen'>
      <MainLayout>
        <AuthorLayout content={author}>
          <MDXLayoutRenderer content={author} />
        </AuthorLayout>
        <button className="send-button" onClick={() => download(englishUrl, englishFilename)}>English</button>
        <button className="send-button mx-2" onClick={() => download(portugueseUrl, portugueseFilename)}>Portuguese</button>
      </MainLayout>
    </main>
  );
}
