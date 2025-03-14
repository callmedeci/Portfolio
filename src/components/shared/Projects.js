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
    name: 'Wild Oasis Hotel Dashboard',
    description:
      'A React powered hotel management dashboard for managing bookings, cabins, and settings—smooth, efficient, and feature-packed. (Use Email: vabaj41481@perceint.com Password: 12345678 to log in)',
    homepage: 'https://my-wild-oasis-dashboard.netlify.app',
    html_url: 'https://github.com/callmedeci/The-wild-oasis',
  },
  {
    created_at: '2025-01-24T15:52:49Z',
    name: 'Wild Oasis: Your Perfect Getaway',
    description:
      'A beautifully crafted Next.js website designed for the Wild Oasis Hotel. it offers a seamless booking experience with secure authentication, modern UI, and a smooth, intuitive design.',
    homepage: 'https://the-wild-oasis-website-production.vercel.app',
    html_url: 'https://github.com/callmedeci/The-wild-oasis-website',
  },
  {
    created_at: '2025-01-24T15:52:49Z',
    name: 'Snapgram: Share, Like, and Save Moments',
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
        className='flex flex-col items-center lg:grid lg:grid-cols-2 gap-5 border-t border-zinc-400 dark:border-zinc-700 my-26 py-26 min-h-160'
      >
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='col-span-full text-2xl md:text-4xl text-zinc-800 dark:text-zinc-200 font-bold after:bg-emerald-500 after:content-[""] after:absolute after:w-26 after:h-0.5 after:left-0 after:-bottom-1.5 relative self-start'
        >
          Projects
        </motion.h2>

        <ProjectsGrid projects={projects} />

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 65 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col gap-5 h-full w-full'
        >
          <StayUpToDateForm />

          <div className='ring ring-zinc-400/50 dark:ring-zinc-700/50 p-6 rounded-2xl shadow-sm shadow-zinc-400 dark:shadow-zinc-950'>
            <div className='flex items-center gap-1'>
              <CpuIcon className='text-zinc-500 dark:text-zinc-400 size-6' />
              <h4 className='text-lg font-semibold text-zinc-700 dark:text-zinc-200 tracking-wide'>
                Main languages
              </h4>
            </div>

            <TechStack />

            <div className='flex flex-col sm:flex-row w-full gap-2 justify-between mt-5'>
              <Button
                icon={
                  <Download className='size-5 group-hover:size-6 transition-all' />
                }
                className='flex-1'
              >
                Download CV
              </Button>

              <Link href='/projects' className='flex-1 gap-1'>
                <Button
                  icon={
                    <MoreHorizontal className='size-5 group-hover:size-6 transition-all' />
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
