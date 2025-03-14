import ProjectsGrid from '@/components/ProjectsGrid';
import TypingEffect from '@/components/ui/TypingEffect';
import { Octokit } from 'octokit';
import { Suspense } from 'react';

const octokit = new Octokit({
  auth: process.env.GITHUB_API_TOKEN,
});

async function Page() {
  const { data } = await octokit.request('GET /users/{username}/repos', {
    username: 'callmedeci',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  const reposWithHomepageURL = data.filter(
    (repo) => repo.homepage && repo.description,
  );

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
          projects={reposWithHomepageURL}
          className='flex flex-col lg:grid lg:grid-cols-2'
        />
      </Suspense>
    </div>
  );
}

export default Page;
