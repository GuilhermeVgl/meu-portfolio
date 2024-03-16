import Image from '@/components/Image';
import type { Authors } from 'contentlayer/generated';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  content: Omit<Authors, '_id' | '_raw' | 'body'>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { occupation, company } = content;

  return (
    <div className="pt-8">
      <div className="mb-8 flex flex-col-reverse items-center justify-between sm:flex-row sm:items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold md:text-3xl lg:text-4xl text-primary-100"><b className="text-primary-200">Guilherme</b> Freitas</h1>
          <h2 className="text-sm font-normal md:text-base text-primary-100">
            <b className="font-semibold text-primary-100">{occupation}</b> at {' '}
            <a className="underlineHyper font-semibold" href="https://www.castgroup.com.br/">
              {company}
            </a>
          </h2>
        </div>
      </div>
  <div className="flex items-center text-xl max-lg:flex-col">
    <div>
      <p>
        I am currently a{' '}
        <b className="font-semibold text-primary-200">Software Developer</b> at{' '}
        <a href="https://www.castgroup.com.br/" className="underlineHyper text-primary-200 font-semibold"><b>Cast Group</b></a>,
        And a Computer Science student who enjoy problem-solving, 
        refining algorithms, and <b className="font-semibold text-primary-200">building software</b>. In my current role, 
        I have had the opportunity to reshape project architectures and upgrade library versions, 
        among other responsibilities. Additionally, I've developed projects supporting  <b className="font-semibold text-primary-200">over 50,000 users</b>.
        I specialize in crafting robust solutions using a versatile stack, including <b className="font-semibold text-primary-200">Java </b> and 
        <b className="font-semibold text-primary-200"> Spring Boot</b> for backend development, 
        <b className="font-semibold "> PHP</b> and <b className="font-semibold">Laravel</b> for dynamic web applications, and a front-end blend of 
        <b className="font-semibold"> TailwindCSS, Bootstrap, AngularJS, Javascript And TypeScript</b>.
      </p>
    </div>
    <img
      alt="Guilherme"
      src={'/static/images/avatar.png' || ''}
      className="w-60 h-60 rounded-t-lg object-scale-down max-lg:w-40 max-lg:h-40 max-lg:mb-4"
    />
  </div>
      <div className="prose max-w-none pb-8 text-justify text-sm dark:prose-dark md:text-lg xl:col-span-2">
        {children}
      </div>
    </div>
  );
}
