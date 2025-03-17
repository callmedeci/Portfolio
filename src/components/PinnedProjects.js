'use client';

import HashProvider from '@/context/HashContext';
import { CpuIcon, FolderDown, FolderOpen } from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import ProjectsGrid from './ProjectsGrid';
import StayUpToDateForm from './StayUpToDateForm';
import TechStack from './TechStack';
import Button from './ui/Button';

function PinnedProjects({ projects }) {
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
          className='relative col-span-full self-start text-2xl font-bold text-zinc-800 after:absolute after:-bottom-[5px] after:left-0 after:h-0.5 after:w-26 after:bg-emerald-500 after:content-[""] md:text-4xl dark:text-zinc-200'
        >
          Projects
        </motion.h2>

        <div className='flex flex-col gap-3'>
          <ProjectsGrid projects={projects} />

          <Link href='/projects' className='gap-1 lg:w-[50%] lg:self-end'>
            <Button
              icon={
                <FolderOpen className='size-5 transition-all group-hover:size-6' />
              }
              className='w-full'
            >
              More Projects
            </Button>
          </Link>
        </div>

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
                Main Technologies
              </h4>
            </div>

            <TechStack />

            <Link href='/pdf/cv.pdf'>
              <Button
                icon={
                  <FolderDown className='size-5 transition-all group-hover:size-6' />
                }
                className='mt-5 w-full'
              >
                Download CV
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </HashProvider.Section>
  );
}

export default PinnedProjects;
