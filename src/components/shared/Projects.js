'use client';

import { CpuIcon, Download, MoreHorizontal } from 'lucide-react';
import ProjectsGrid from '../ProjectsGrid';
import StayUpToDateForm from '../StayUpToDateForm';
import TechStack from '../TechStack';
import Button from '../ui/Button';
import Link from 'next/link';

import { motion } from 'motion/react';

function Projects() {
  return (
    <section
      id='projects'
      className='flex flex-col items-center lg:grid lg:grid-cols-2 gap-5 border-t border-zinc-700 mt-64 py-24'
    >
      <ProjectsGrid />

      <motion.div
        initial={{ opacity: 0, y: 65 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='flex flex-col gap-5 h-full w-full'
      >
        <StayUpToDateForm />

        <div className='ring ring-zinc-700/50 p-6 rounded-2xl shadow-sm shadow-zinc-950'>
          <div className='flex items-center gap-1'>
            <CpuIcon className='text-zinc-400 size-6' />
            <h4 className='text-lg font-semibold text-zinc-200 tracking-wide'>
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
            <Button
              icon={
                <MoreHorizontal className='size-5 group-hover:size-6 transition-all' />
              }
              className='flex-1 gap-1'
            >
              <Link href='/projects'>More Projects</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;
