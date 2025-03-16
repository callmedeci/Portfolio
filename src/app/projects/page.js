import ProjectsGrid from '@/components/ProjectsGrid';
import TypingEffect from '@/components/ui/TypingEffect';
import { getRepos } from '@/lib/data-service';
import { Suspense } from 'react';

export const metadata = {
  title: 'projects',
};

async function Page() {
  const repos = await getRepos();

  return (
    <div className='flex flex-col'>
      <header className='mx-auto my-24 flex max-w-2xl flex-col items-center justify-center gap-6 text-center'>
        <TypingEffect text='Things I’ve made trying to put my dent in the universe.' />

        <p className='tracking-wide text-zinc-600 dark:text-zinc-400'>
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </header>

      <Suspense fallback={<p>Loading...</p>}>
        <ProjectsGrid
          projects={repos}
          className='flex flex-col lg:grid lg:grid-cols-2'
        />
      </Suspense>
    </div>
  );
}

export default Page;
