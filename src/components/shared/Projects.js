'use client';

import { CpuIcon, Download, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';
import ProjectsGrid from '../ProjectsGrid';
import StayUpToDateForm from '../StayUpToDateForm';
import TechStack from '../TechStack';
import Button from '../ui/Button';

import HashProvider from '@/context/HashContext';
import { motion } from 'motion/react';

const projects = [
  {
    created_at: '2025-01-24T15:52:49Z',
    name: 'The-wild-oasis',
    description:
      'A React powered hotel management dashboard for managing bookings, cabins, and settings—smooth, efficient, and feature-packed. (Use Email: vabaj41481@perceint.com Password: 12345678 to log in)',
    homepage: 'https://my-wild-oasis-dashboard.netlify.app',
    html_url: 'https://github.com/callmedeci/The-wild-oasis',
  },
  {
    created_at: '2025-01-24T15:52:49Z',
    name: 'The-wild-oasis-website',
    description:
      'A beautifully crafted Next.js website designed for the Wild Oasis Hotel. it offers a seamless booking experience with secure authentication, modern UI, and a smooth, intuitive design.',
    homepage: 'https://the-wild-oasis-website-production.vercel.app',
    html_url: 'https://github.com/callmedeci/The-wild-oasis-website',
  },
  {
    created_at: '2025-01-24T15:52:49Z',
    name: 'Snapgram',
    description:
      'A social media app where you can create posts, like and save content, explore other users on the People page, and seamlessly sign in and out. Simple, smooth, and built for sharing.',
    homepage: 'https://snapgram-psi-ten.vercel.app',
    html_url: 'https://github.com/callmedeci/Snapgram',
  },
];

function Projects() {
  return (
    <HashProvider.Section>
      <div
        id='projects'
        className='my-26 flex min-h-160 flex-col items-center gap-5 border-t border-zinc-400 py-26 lg:grid lg:grid-cols-2 dark:border-zinc-700'
      >
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='relative col-span-full self-start text-2xl font-bold text-zinc-800 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-26 after:bg-emerald-500 after:content-[""] md:text-4xl dark:text-zinc-200'
        >
          Projects
        </motion.h2>

        <ProjectsGrid projects={projects} />

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 65 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex h-full w-full flex-col gap-5'
        >
          <StayUpToDateForm />

          <div className='rounded-2xl p-6 shadow-sm ring shadow-zinc-400 ring-zinc-400/50 dark:shadow-zinc-950 dark:ring-zinc-700/50'>
            <div className='flex items-center gap-1'>
              <CpuIcon className='size-6 text-zinc-500 dark:text-zinc-400' />
              <h4 className='text-lg font-semibold tracking-wide text-zinc-700 dark:text-zinc-200'>
                Main languages
              </h4>
            </div>

            <TechStack />

            <div className='mt-5 flex w-full flex-col justify-between gap-2 sm:flex-row'>
              <Button
                icon={
                  <Download className='size-5 transition-all group-hover:size-6' />
                }
                className='flex-1'
              >
                Download CV
              </Button>

              <Link href='/projects' className='flex-1 gap-1'>
                <Button
                  icon={
                    <MoreHorizontal className='size-5 transition-all group-hover:size-6' />
                  }
                  className='w-full'
                >
                  More Projects
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </HashProvider.Section>
  );
}

export default Projects;
