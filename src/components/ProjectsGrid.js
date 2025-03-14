'use client';

import { motion } from 'motion/react';

import ProjectsCard from './ProjectsCard';

const projects = [
  {
    date: 'March 7, 2025',
    title: 'Wild Oasis Hotel Dashboard',
    description: (
      <>
        A React powered hotel management dashboard for managing bookings,
        cabins, and settings—smooth, efficient, and feature-packed.
        <br />
        <span className='font-semibold'>
          (Use <b>Email: vabaj41481@perceint.com</b> <b>Password: 12345678</b>{' '}
          to log in)
        </span>
      </>
    ),
    liveLink: 'https://my-wild-oasis-dashboard.netlify.app',
    sourceLink: 'https://github.com/callmedeci/The-wild-oasis',
  },
  {
    date: 'February 20, 2025',
    title: 'Wild Oasis: Your Perfect Getaway',
    description:
      'A beautifully crafted Next.js website designed for the Wild Oasis Hotel. it offers a seamless booking experience with secure authentication, modern UI, and a smooth, intuitive design.',
    liveLink: 'https://the-wild-oasis-website-production.vercel.app',
    sourceLink: 'https://github.com/callmedeci/The-wild-oasis-website',
  },
  {
    date: 'January 20, 2025',
    title: 'Snapgram: Share, Like, and Save Moments',
    description:
      'A social media app where you can create posts, like and save content, explore other users on the People page, and seamlessly sign in and out. Simple, smooth, and built for sharing.',
    liveLink: 'https://snapgram-psi-ten.vercel.app',
    sourceLink: 'https://github.com/callmedeci/Snapgram',
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
