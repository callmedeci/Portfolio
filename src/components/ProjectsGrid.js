'use client';

import { motion } from 'motion/react';

import ProjectsCard from './ProjectsCard';
import { cn } from '@/lib/utils';

function ProjectsGrid({ projects, className }) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 65 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={cn('flex flex-col gap-5 w-full', className)}
    >
      {projects.map((project, i) => (
        <ProjectsCard key={project.name} project={project} index={i} />
      ))}
    </motion.div>
  );
}

export default ProjectsGrid;
