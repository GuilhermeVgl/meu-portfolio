import SectionContainer from '@/components/SectionContainer';

export default function FourZeroFour() {
  return (
    <main className="grainy-header min-h-screen">
      <SectionContainer>
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="not-found-title mb-8 font-extrabold leading-9 tracking-tight dark:text-primary-600 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
            404
          </h1>
        </div>
        <div className="max-w-md text-3xl">
          <p className="mb-4 font-bold leading-normal md:text-2xl">
            This page could not be found.
          </p>
          <br></br>
          <b className="font-normal text-2xl">Try to </b><a href="/" className="text-2xl underlineHyper font-semibold dark:text-primary-600">Back to homepage</a>
        </div>
      </SectionContainer>
    </main>
  );
}
