import 'github-markdown-css';
import Link from 'next/link';
import { Suspense } from 'react';
import { Code2, Link as LucideLink, Radio } from 'lucide-react';

import {
  getRepo,
  getRepoContent,
  getRepos,
  parseMarkdown,
} from '@/lib/data-service';

import Spinner from '@/components/ui/Spinner';
import ProjectHeader from '@/components/ProjectHeader';
import ProjectMain from '@/components/ProjectMain';
import Button from '@/components/ui/Button';
import GithubMarkdown from '@/components/ui/GithubMarkdown';

export async function generateMetadata({ params }) {
  const { projectName } = await params;

  const projectTitle = projectName
    .split('-')
    .map((char) => char.at(0).toUpperCase() + char.slice(1))
    .join(' ');

  return {
    title: projectTitle,
  };
}

export async function generateStaticParams() {
  const repos = await getRepos();

  return repos.map((repo) => ({
    projectName: repo.name,
  }));
}

async function Page({ params }) {
  const { projectName } = await params;
  const repo = await getRepo(projectName);
  const markdown = await getRepoContent(projectName, 'README.md');
  const html = await parseMarkdown(markdown);

  const {
    updated_at,
    created_at,
    topics,
    html_url,
    homepage,
    description,
    name,
  } = repo;

  return (
    <section className='h-full w-full'>
      <Suspense fallback={<Spinner />} key={projectName}>
        <ProjectHeader name={name} description={description} topics={topics} />

        <ProjectMain createdAt={created_at} updatedAt={updated_at} />

        <GithubMarkdown html={html} />

        <div className='mx-auto flex w-full max-w-5xl items-center justify-end gap-2'>
          <Link target='_blank' href={homepage}>
            <Button icon={<Radio className='size-5' />} variant='link'>
              Watch Live
            </Button>
          </Link>

          <Link target='_blank' href={html_url}>
            <Button icon={<Code2 className='size-5' />} variant='link'>
              Source Code
            </Button>
          </Link>
        </div>
      </Suspense>
    </section>
  );
}

export default Page;
