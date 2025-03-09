'use client';

import AboutCard from './AboutCard';

const AboutContents = [
  {
    title: 'What Can I do?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    translate: { x: 5, y: 10 },
  },
  {
    title: 'What Is my hobbies?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    translate: { x: -8, y: 8 },
  },
  {
    title: 'Main languages?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    translate: { x: 7, y: 2 },
  },
  {
    title: 'Where to find me?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    translate: { x: 9, y: 6 },
  },
  {
    title: 'Where do I live?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    translate: { x: -6, y: -6 },
  },
  {
    title: 'How do I do?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    translate: { x: -9, y: 5 },
  },
  {
    title: 'What to I do?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    translate: { x: 3, y: 7 },
  },
  {
    title: 'How can you find me?',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum ipsa alias rem dolorem doloremque recusandae numquam dolore?',
    translate: { x: 5, y: 1 },
  },
];

function AboutGrid() {
  return (
    <div className='mt-5 w-full lg:grid lg:grid-cols-2 flex flex-col gap-5 lg:gap-y-10'>
      {AboutContents.map((content, i) => (
        <AboutCard key={content.title} index={i} content={content} />
      ))}
    </div>
  );
}

export default AboutGrid;
