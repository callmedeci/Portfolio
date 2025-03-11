'use client';

import { motion } from 'motion/react';

import ProjectsCard from './ProjectsCard';

const projects = [
  {
    date: 'March 7, 2025',
    title: 'Foodie Finder: Discover New Recipes',
    description:
      'A web app that helps users discover and save delicious recipes from around the world.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    date: 'February 20, 2025',
    title: 'TaskMaster: Your Productivity Partner',
    description:
      'A sleek and intuitive to-do list app that keeps you organized and on track.',
    liveLink: '#',
    sourceLink: '#',
  },
  {
    date: 'January 15, 2025',
    title: 'DevConnect: A Hub for Developers',
    description:
      'An online platform where developers can share knowledge, collaborate, and connect.',
    liveLink: '#',
    sourceLink: '#',
  },
];

function ProjectsGrid() {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 65 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='flex flex-col gap-5 w-full'
    >
      {projects.map((project, i) => (
        <ProjectsCard key={project.title} project={project} index={i} />
      ))}
    </motion.div>
  );
}

export default ProjectsGrid;
